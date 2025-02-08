import { v2 as cloudinary } from 'cloudinary';

type CloudinaryConfig = {
    cloud_name: string | undefined;
    api_key: string | undefined;
    api_secret: string | undefined;
};

const config: CloudinaryConfig = {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_KEY_SECRET,
};

cloudinary.config(config);

export default cloudinary;