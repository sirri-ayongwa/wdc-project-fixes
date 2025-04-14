import express from "express";
import { createRoaster } from "../controllers/roasterController";

const router = express.Router();

// Route: POST /api/roaster/create
router.post("/create", createRoaster);

export default router;
