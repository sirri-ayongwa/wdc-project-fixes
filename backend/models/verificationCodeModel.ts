import mongoose, { Document, Schema, Model } from "mongoose";
import crypto from "crypto"

interface IVerificationCode {
    email: string;
    code: string;
    createdAt: Date;     
}
const VerificationCodeSchema: Schema<IVerificationCode> = new Schema<IVerificationCode>({
    email: { type: String, required: true},
    code: { type: String, default: crypto.randomInt(100000,999999).toString()},
    createdAt: { type: Date, default: Date.now, expires: 300 }
})

const VerificationCode: Model<IVerificationCode> = mongoose.model<IVerificationCode>("VerificationCode", VerificationCodeSchema);

export default VerificationCode