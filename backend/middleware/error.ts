import { Request, Response, NextFunction } from 'express';
import ErrorResponse from '../utils/errorResponse';

interface CustomError extends Error {
    code?: number;
    statusCode?: number;
    value?: string;
    errors?: { [key: string]: { message: string } };
}

const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    let error = { ...err } as CustomError;
    error.message = err.message;

    if (err.name === "CastError") {
        const message = `Resource not found ${err.value}`;
        error = new ErrorResponse(message, 404);
    }

    // Mongoose duplicate value
    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message, 400);
    }

    // Mongoose validation error
    if (err.name === "ValidationError" && err.errors) {
        const message = Object.values(err.errors).map(val => ' ' + val.message).join(', ');
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server error"
    });
};

export default errorHandler;
