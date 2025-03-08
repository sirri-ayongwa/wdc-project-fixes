import { Router } from "express"
import { sendEmailVerificationCode } from "../controllers/nodemailerController";

const router = Router();

router.post("/sendEmailVerificationCode", sendEmailVerificationCode)

export default router