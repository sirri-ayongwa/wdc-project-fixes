import { Request, RequestHandler, Response } from "express";
import { sendEmailVerificationCode as sendEmailVerificationCodeFunc} from "../utils/nodemailer"
import VerificationCode from "../models/verificationCodeModel";
import Professional from '../models/professionalModel'

export const sendEmailVerificationCode: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body;

        const existingCode = await VerificationCode.findOne({ email })
        if(existingCode){
            res.status(400).json("Code already sent");
            return;
        }
        const existingUser = await Professional.findOne({ email })
        if(existingUser){
            res.status(400).json("User already exists");    
        }
        const newCode = await VerificationCode.create({ email })

        await sendEmailVerificationCodeFunc(email,newCode.code)
        res.status(200).json("Email sent successfully");
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
        return true;
    } catch (error) {
        return false;
    }
}

