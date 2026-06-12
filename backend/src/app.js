import cors from "cors";
import dotenv from "dotenv";
import express from "express";

// Initialize Firebase Admin SDK first (must be before routes)
import "./config/firebase.js";

import contentRoutes from "./routes/contentRoutes.js";
import translateRoutes from "./routes/translateRoutes.js";

dotenv.config({ path: "backend/.env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({ success: true, message: "API is running" });
});

app.use("/api/content", contentRoutes);
app.use("/api/translate", translateRoutes);

app.use((error, _req, res, _next) => {
  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: error.message || "Internal server error",
  });
});

export default app;
