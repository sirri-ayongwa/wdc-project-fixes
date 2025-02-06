import { Request, Response, NextFunction } from 'express';
import User from '../models/userModel';
import ErrorResponse from '../utils/errorResponse';
import cloudinary from '../utils/cloudinary';


export const signup = async (req: Request, res: Response):Promise<any> => {
    const { email, name, password } = req.body;
    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json("E-mail already registered");
        }

        const user = await User.create({
            email,
            name,
            password
        });

        res.cookie("jwt",user.getJwtToken());
        res.status(201).json({
            success: true,
            user
        });
    } catch (error) {
        res.json(error);
    }
};

export const signin = async (req: Request, res: Response):Promise<any> => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(403).json("Please add an email");
        }
        if (!password) {
            return res.status(403).json("Please add a password");
        }
        
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json("Invalid credentials");
        }
        
        const isValid = await user.comparePassword(password)
        if (!isValid) {
            return res.status(400).json("Invalid credentials");
        }

        res.cookie("jwt",user.getJwtToken())
        res.status(200).json("Successfully logged in")
    } catch (error) {
        res.status(400).json(error)
    }
};
export const completeProfile = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    try {
        const { education, skills, type, name, dob, image, contact, bio, country, state, town, address, profession } = req.body;
        // const { _id }  = req.user;

        const user = await User.findById("testt");
        if (!user) {
            return res.status(404).json({ success: false, message: "Error, User not found" });
        }

        const result = await cloudinary.uploader.upload(image, {
            folder: "profiles",
            width: 1200,
            crop: "scale"
        });

        user.name = name;
        user.education = education;
        user.skills = skills;
        user.imgUrl = result.secure_url;
        user.profession = profession;
        user.country = country;
        user.state = state;
        user.town = town;
        user.address = address;
        user.contact = contact;
        user.bio = bio;
        user.profileCompleted = true;
        user.dob = dob;
        user.type = type;

        await user.save();

        res.status(201).json({ success: true, user });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const completeCompanyProfile = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    try {
        const { description, type, domain, name, startDate, image, contact, website, country, state, town, address, mission } = req.body;
        const { id } = req.params;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "Error, User not found" });
        }

        const result = await cloudinary.uploader.upload(image, {
            folder: "profiles",
            width: 1200,
            crop: "scale"
        });

        user.name = name;
        user.description = description;
        user.domain = domain;
        user.imgUrl = result.secure_url;
        user.website = website;
        user.country = country;
        user.state = state;
        user.town = town;
        user.address = address;
        user.contact = contact;
        user.mission = mission;
        user.profileCompleted = true;
        user.startDate = startDate;
        user.type = type;

        await user.save();

        res.status(201).json({ success: true, user });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export const updateProfile = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    const { name, education, skills, image, dob, contact, bio, country, state, town, address, profession } = req.body;
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ success: false, message: "Error, User not found" });
        }

        const result = await cloudinary.uploader.upload(image, {
            folder: "profiles",
            width: 1200,
            crop: "scale"
        });

        user.name = name;
        user.education = education;
        user.skills = skills;
        user.imgUrl = result.secure_url;
        user.profession = profession;
        user.country = country;
        user.state = state;
        user.town = town;
        user.address = address;
        user.contact = contact;
        user.bio = bio;
        user.profileCompleted = true;
        user.dob = dob;

        await user.save();

        res.status(201).json({ success: true, user });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

// const sendTokenResponse = async (user: any, codeStatus: number, res: Response) => {
//     const token = await user.getJwtToken();
//     const options = { maxAge: 60 * 60 * 1000, httpOnly: true } as { maxAge: number; httpOnly: boolean; secure?: boolean };
//     if (process.env.NODE_ENV === 'production') {
//         options.secure = true;
//     }

//     res.status(codeStatus)
//         .cookie('token', token, options)
//         .json({
//             success: true,
//             token,
//             id: user._id,
//             role: user.role,
//             name: user?.name,
//             email: user?.email,
//             imgUrl: user?.imgUrl
//         });
// };

export const logout = (req: Request, res: Response) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "Logged out"
    });
};

export const allUsersAdmin = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, users });
    } catch (error) {
        res.status(400).json({ success: false, message: "Error! Check if you are connected to the server DB" });
    }
};

export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (user) {
            res.status(200).json({ success: true, user });
        } else {
            res.status(400).json({ success: false, message: "Error! User not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: "Error! User not found" });
    }
};

export const getProfile = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (user) {
            res.status(200).json({ success: true, name: user.name, email: user.email });
        } else {
            res.status(400).json({ success: false, message: "Error! User not found" });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: "Error! User not found" });
    }
};

export const userProfile = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        res.status(200).json({ success: true, user });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message || "Error," });
    }
};
