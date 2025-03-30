import { Request, RequestHandler, Response } from "express";
import { sendEmailVerificationCode as sendEmailVerificationCodeFunc} from "../utils/nodemailer"
import VerificationCode from "../models/verificationCodeModel";
import Professional from '../models/professionalModel'
import crypto from "crypto"

export const sendEmailVerificationCode: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body;

        const existingCode = await VerificationCode.findOne({ email })
        if(existingCode){
            res.status(400).json({ message: "Code already sent" });
            return;
        }
        const existingUser = await Professional.findOne({ email })
        if(existingUser){
            res.status(400).json("User already exists");    
        }
        var code = crypto.randomInt(100000,999999).toString()
        const newCode = await VerificationCode.create({ email, code })

        await sendEmailVerificationCodeFunc(email,newCode.code)
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        res.status(400).json(error);
    }
};

export const verifyEmailVerificationCode = async (email: string, code: string): Promise<boolean> => {
    try {
        const existingCode = await VerificationCode.findOne({ email });
        if (!existingCode) {
            return false;
        }
        if(existingCode.code !== code){
            return false;
        }
        await VerificationCode.deleteOne({ email });
        return true;
    } catch (error) {
        return false;
    }
}

