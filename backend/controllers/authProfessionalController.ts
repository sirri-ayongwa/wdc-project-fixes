import {Request, RequestHandler, Response } from 'express'
import Professional from '../models/professionalModel'
import VerificationCode from '../models/verificationCodeModel';
import { verifyEmailVerificationCode } from "./nodemailerController"
export const registerProfessional: RequestHandler = async (req: Request, res: Response):Promise<void> => {
    try{
        //Destructure request body
        const { 
            email,
            password, 
            firstName, 
            lastName,
            code
        } = req.body;
        //Check if all fields are filled
        if (!email || !password || !firstName || !lastName || !code) {
            res.status(403).json("Please fill all the mandatory fields");
            return;
        }
        //Email Validation
        const emailRegexTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; 
        if(!emailRegexTest.test(email)){
            res.status(403).json("Please check your email")
            return;
        }
        //Password Validation: 
        const passwordRegexTest = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        if(!passwordRegexTest.test(password)){
            res.status(403).json("Your password must contain at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character")
            return;
        }
        //Check if user already exists
        const existingUser = await Professional.findOne({ email });
        if (existingUser){
            res.status(400).json({ message: 'User already exists' });
            return;
        }
        //Check if code already sent
        const existingCode = await VerificationCode.findOne({ email });
        if(!existingCode){
            res.status(400).json("Code doesn't exist");
            return;
        }
        //CHeck if the code is valid
        const validCode = await verifyEmailVerificationCode(email,code);
        if(!validCode){
            res.status(400).json("Invalid code");
            return;
        }
        //Create new user
        const newUser = new Professional({
            email,
            password, 
            firstName, 
            lastName,
            role: 'Professional'
        });
        //Set JWT Token
        newUser.setJwtToken({userId: newUser._id, email: newUser.email[0]}, res);
        //Save user
        await newUser.save();
        //Send response to client
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        //Send error to client
        res.status(500).json({ message: 'Something went wrong', error });
    }
};
export const loginProfessional: RequestHandler = async (req: Request, res: Response):Promise<void> => {
    try {
        //Check if all fields are filled
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(403).json({ message:"Please add an email and a password" });
            return;
        }
        //Check if user exists
        const user = await Professional.findOne({ email });
        if (!user) {
            res.status(400).json({ message:"Invalid credentials" });
            return;
        }
        //Check if password is correct
        const isValid = await user.comparePassword(password);
        if (!isValid) {
            res.status(400).json({ message:"Invalid credentials" });
            return;
        }        
        //Set JWT Token
        user.setJwtToken({userId: user._id, email: user.email[0]},res);
        //Send response to client
        res.status(200).json({ message:"Successfully logged in" });
    } catch (error) {
        //Send error to client
        res.status(400).json(error)
    }
}
export const updateProfileProfessional: RequestHandler = async (req:Request, res:Response):Promise<void> => {
    try{
        //Extend type user to include _id
        interface expressUser extends Express.User {
            _id: string
        }
        const user = req.user as expressUser
        //Check if user exists
        if(!user){
            res.status(401).json({error:"Not Authorized"});
            return;
        }
        //Destructure request body
        const updateData = req.body;
        //Remove unAuthorized fields
        const unAuthorizedFields = ["email", "phoneNumber", "profileStatus", "password", "role", "createdAt", "updatedAt", "__v",];
        for (const field of unAuthorizedFields) {
            delete updateData[field];
        }
        //Find User and update user
        const updatedUser = await Professional.findByIdAndUpdate(user._id, updateData, { 
            runValidators: true
        });
        //If user was not found send error
        if (!updatedUser) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        //Send response
        res.status(200).json({ message: "Profile updated successfully"});
    } catch (error){
        //Send error
        res.status(400).json(error)
    }
}
