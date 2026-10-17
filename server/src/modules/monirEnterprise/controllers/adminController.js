
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { timingSafeEqual } from "node:crypto";
import Admin from "../models/Admin.js";

// Check whether the first Admin can be created
export const getAdminSetupStatus = async (req, res) => {
  try {
    if (process.env.ADMIN_SETUP_ENABLED !== "true") {
      return res.status(200).json({
        success: true,
        setupAvailable: false,
      });
    }

    await Admin.init();

    const adminExists = await Admin.exists({});

    return res.status(200).json({
      success: true,
      setupAvailable: !adminExists,
    });
  } catch (error) {
    console.error("Admin setup status check failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to check Admin setup status.",
    });
  }
};

const safeKeyMatch = (provided, expected) => {
  if (
    typeof provided !== "string" ||
    typeof expected !== "string"
  ) {
    return false;
  }

  const providedBuffer = Buffer.from(provided);
  const expectedBuffer = Buffer.from(expected);

  return (
    providedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(providedBuffer, expectedBuffer)
  );
};

// Create the first Admin only
export const createFirstAdmin = async (req, res) => {
  try {
    if (process.env.ADMIN_SETUP_ENABLED !== "true") {
      return res.status(403).json({
        success: false,
        message: "Admin setup is disabled.",
      });
    }

    const bootstrapKey = process.env.ADMIN_BOOTSTRAP_KEY;
    const providedKey = req.get("x-admin-bootstrap-key");

    if (!safeKeyMatch(providedKey, bootstrapKey)) {
      return res.status(403).json({
        success: false,
        message: "Admin setup is not authorized.",
      });
    }

    const { name, email, whatsappNumber, password } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof whatsappNumber !== "string" ||
      typeof password !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !whatsappNumber.trim()
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Name, email, WhatsApp number and password are required.",
      });
    }

    if (password.length < 12 || password.length > 72) {
      return res.status(400).json({
        success: false,
        message: "Password must be 12–72 characters long.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedWhatsApp = whatsappNumber.trim();

    // Ensure unique indexes exist before checking/creating the first Admin.
    await Admin.init();

    const adminCount = await Admin.countDocuments();

    if (adminCount > 0) {
      return res.status(409).json({
        success: false,
        message: "The first Admin has already been created.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const admin = await Admin.create({
      name: name.trim(),
      email: normalizedEmail,
      whatsappNumber: normalizedWhatsApp,
      passwordHash,
      role: "admin",
      isActive: true,
      isEmailVerified: false,
      isWhatsAppVerified: false,
    });

    return res.status(201).json({
      success: true,
      message: "First Admin account created successfully.",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        whatsappNumber: admin.whatsappNumber,
        role: admin.role,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email or WhatsApp number is already registered.",
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }

    console.error("First Admin creation failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to create Admin account.",
    });
  }
};

// Admin login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const admin = await Admin.findOne({
      email: email.trim().toLowerCase(),
    }).select("+passwordHash");

    if (!admin || !admin.isActive) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const passwordMatches = await bcrypt.compare(
      password,
      admin.passwordHash
    );

    if (!passwordMatches) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      console.error("JWT_SECRET is missing from server/.env");

      return res.status(500).json({
        success: false,
        message: "Authentication is not configured.",
      });
    }

    const token = jwt.sign(
      {
        sub: admin._id.toString(),
        role: "admin",
        organization: "monirEnterprise",
      },
      jwtSecret,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      success: true,
      message: "Admin login successful.",
      token,
      expiresIn: 3600,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        whatsappNumber: admin.whatsappNumber,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Admin login failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Unable to log in.",
    });
  }
};
