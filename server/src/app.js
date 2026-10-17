
import express from "express";
import cors from "cors";
import adminRoutes from "./modules/monirEnterprise/routes/adminRoutes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10kb" }));

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "MONIR GROUP API is running",
  });
});

app.use(
  "/api/monir-enterprise/auth",
  adminRoutes
);

export default app;
