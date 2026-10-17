
import { Router } from "express";
import {
  createFirstAdmin,
  loginAdmin,
  getAdminSetupStatus,
} from "../controllers/adminController.js";

const router = Router();

router.post("/setup-first-admin", createFirstAdmin);
router.get("/setup-status", getAdminSetupStatus);
router.post("/login", loginAdmin);

export default router;
