
const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');
const cloudinary = require('../utils/cloudinary');

exports.signup = async (req, res, next) => {
    const { email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        return next(new ErrorResponse("E-mail already registred", 400));
    }
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        next(error);
    }
}


exports.signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        // console.log(req.body)
        //validation
        if (!email) {
            return next(new ErrorResponse("please add an email", 403));
        }
        if (!password) {
            return next(new ErrorResponse("please add a password", 403));
        }

        //check user email
        const user = await User.findOne({ email });
        if (!user) {
            return next(new ErrorResponse("invalid credentials", 400));
        }
        //check password
        const isMatched = await user.comparePassword(password);
        if (!isMatched) {
            return next(new ErrorResponse("invalid credentials", 400));
        }

        sendTokenResponse(user, 200, res);
    } catch (error) {
        next(error);
    }
}


//complete profile
exports.completeProfile = async (req, res, next) => {
    const { education, skills, name, dob, image, contact, bio, country, state, town, address, profession  } = req.body;
    const {id} = req.params;
    // console.log(id);
    // console.log(req.body)
    try {
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({success: false, message: "Error, User not found"})
        }
        //upload image in cloudinary
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
        
        res.status(201).json({
            success: true,
            user
        })


    } catch (error) {
        console.log(error);
        next(error);
    }

}

//update profile
exports.updateProfile = async (req, res, next) => {
    const { name, education, skills, image, dob, contact, bio, country, state, town, address, profession  } = req.body;
    const {id} = req.params;
    // console.log(file)
    try {
        const user = await User.findById(id);
        if(!user){
            return res.status(404).json({success: false, message: "Error, User not found"})
        }
        //upload image in cloudinary
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
        
        res.status(201).json({
            success: true,
            user
        })


    } catch (error) {
        console.log(error);
        next(error);
    }

}


const sendTokenResponse = async (user, codeStatus, res) => {
    const token = await user.getJwtToken();
    const options = { maxAge: 60 * 60 * 1000, httpOnly: true }
    if (process.env.NODE_ENV === 'production') {
        options.secure = true
    }
    res
        .status(codeStatus)
        .cookie('token', token, options)
        .json({
            success: true,
            token: token,
            id: user._id,
            role: user.role
        })
}

//log out
exports.logout = (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "logged out"
    })
}

//Get all users ~ Admin
exports.allusersadmin = async (req, res, next) => {
    const users = await User.find();

    if(users){
        res.status(200).json({
            success: true,
            users: users
        });
    }else{
        res.status(400).json({
            success: false,
            message: "Error! Check if your connected to the server DB"
        })
    }
}

//Get a single user ~ Admin
exports.getUser = async (req, res, next) => {
    const {id} = req.params;
    const user = await User.findById(id);
    if(user){
        res.status(200).json({
            success: true,
            user: user
        });
    }else{
        res.status(400).json({
            success: false,
            message: "Error! User not found"
        })
    }
}

//Get a single profile ~ everybody
exports.getProfile = async (req, res, next) => {
    const {id} = req.params;
    const user = await User.findById(id);
    if(user){
        res.status(200).json({
            success: true,
            name: user.name,
            email: user.email
        });
    }else{
        res.status(400).json({
            success: false,
            message: "Error! User not found"
        })
    }
}

//user profile
exports.userProfile = async (req, res, next) => {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json({
        success: true,
        user
    })
}
