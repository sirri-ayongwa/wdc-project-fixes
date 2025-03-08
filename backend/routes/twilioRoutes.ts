import express from "express";
import { sendSMSVerificationCode } from "../controllers/twilioController";

const router = express.Router();

router.post("/sendSMSVerificationCode", sendSMSVerificationCode);

export default router