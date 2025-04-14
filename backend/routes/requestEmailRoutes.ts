import { Router } from "express";
import { sendGeneralRequestEmail } from "../controllers/requestEmailController";
const router = Router();

// Route for sending general request emails
router.post("/sendGeneralRequestEmail", sendGeneralRequestEmail);

export default router;