import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import ErrorResponse from '../utils/errorResponse';
import User from '../models/userModel';

interface AuthRequest extends Request {
    user?: any;
}

// Check if user is authenticated
export const isAuthenticated = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { jwt } = req.cookies;
    
    // Make sure token exists
    if (!jwt) {
        return next(new ErrorResponse('You must Log In...', 401));
    }

    try {
        // Verify token
        const decoded = jwt.verify(jwt, process.env.JWT_SECRET as string) as { id: string };
        req.user = await User.findOne({ _id: decoded.id }).select("-password");
        next();
    } catch (error) {
        return next(new ErrorResponse('You must Log In', 401));
    }
};

// Middleware for admin
export const isAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || (req.user.role !== 'admin' && req.user.role !== 'dev')) {
        return next(new ErrorResponse('Access denied, you must be an admin', 401));
    }
    next();
};
