
import mongoose from "mongoose";
import monirEnterpriseDB from "../../../config/monirEnterpriseDB.js";

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Admin name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    email: {
      type: String,
      required: [true, "Admin email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: 254,
    },

    whatsappNumber: {
      type: String,
      required: [true, "WhatsApp number is required"],
      trim: true,
      unique: true,
      match: [
        /^\+[1-9]\d{7,14}$/,
        "Enter WhatsApp number with country code, e.g. +8801XXXXXXXXX",
      ],
    },

    passwordHash: {
      type: String,
      required: [true, "Password hash is required"],
      select: false,
    },

    role: {
      type: String,
      enum: ["admin"],
      default: "admin",
      immutable: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },

    isWhatsAppVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Admin = monirEnterpriseDB.model("Admin", adminSchema);

export default Admin;
