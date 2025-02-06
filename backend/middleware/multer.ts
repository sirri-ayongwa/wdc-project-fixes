import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';

const storage = multer.diskStorage({});

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (!file.mimetype.includes('image')) {
        return cb(new Error('Invalid image format'));
    }
    cb(null, true);
};

export default multer({ storage, fileFilter });