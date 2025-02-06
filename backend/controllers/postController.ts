import cloudinary from '../utils/cloudinary';
import Post from '../models/postModel';
import ErrorResponse from '../utils/errorResponse';
import { io } from '../server';
import { Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
    user?: any;
}


// Create post
export const createPost = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { title, content, image } = req.body;
    try {
        const result = await cloudinary.uploader.upload(image, {
            folder: "posts",
            width: 1200,
            crop: "scale"
        });
        const post = await Post.create({
            title,
            content,
            postedBy: req.user?._id,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
        });
        res.status(201).json({
            success: true,
            post
        });
    } catch (error) {
        next(error);
    }
};

// Show posts
export const showPost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 }).populate('postedBy', 'name');
        res.status(200).json({
            success: true,
            posts
        });
    } catch (error) {
        next(error);
    }
};

// Show single post
export const showSinglePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const post = await Post.findById(req.params.id).populate('postedBy', 'name');
        res.status(200).json({
            success: true,
            post
        });
    } catch (error) {
        next(error);
    }
};

// Delete post
export const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const currentPost = await Post.findById(req.params.id);
        if (currentPost?.image?.public_id) {
            await cloudinary.uploader.destroy(currentPost.image.public_id);
        }
        await currentPost?.deleteOne();
        res.status(200).json({
            success: true,
            message: "Post deleted"
        });
    } catch (error) {
        next(error);
    }
};

// Update post
export const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, content, image } = req.body;
        const currentPost = await Post.findById(req.params.id);
        const data: any = {
            title: title || currentPost?.title,
            content: content || currentPost?.content,
            image: currentPost?.image
        };

        if (image && image !== currentPost?.image?.url) {
            if (currentPost?.image?.public_id) {
                await cloudinary.uploader.destroy(currentPost.image.public_id);
            }
            const newImage = await cloudinary.uploader.upload(image, {
                folder: 'posts',
                width: 1200,
                crop: "scale"
            });
            data.image = {
                public_id: newImage.public_id,
                url: newImage.secure_url
            };
        }

        const postUpdate = await Post.findByIdAndUpdate(req.params.id, data, { new: true });
        res.status(200).json({
            success: true,
            postUpdate
        });
    } catch (error) {
        next(error);
    }
};

// Add comment
export const addComment = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { comment } = req.body;
    try {
        const postComment = await Post.findByIdAndUpdate(req.params.id, {
            $push: { comments: { text: comment, postedBy: req.user?._id } }
        }, { new: true });

        const post = await Post.findById(postComment?._id).populate('comments.postedBy', 'name email');
        res.status(200).json({
            success: true,
            post
        });
    } catch (error) {
        next(error);
    }
};

// Add like
export const addLike = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, {
            $addToSet: { likes: req.user?._id }
        }, { new: true });

        const posts = await Post.find().sort({ createdAt: -1 }).populate('postedBy', 'name');
        io.emit('add-like', posts);
        res.status(200).json({
            success: true,
            post,
            posts
        });
    } catch (error) {
        next(error);
    }
};

// Remove like
export const removeLike = async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, {
            $pull: { likes: req.user?._id }
        }, { new: true });

        const posts = await Post.find().sort({ createdAt: -1 }).populate('postedBy', 'name');
        io.emit('remove-like', posts);
        res.status(200).json({
            success: true,
            post
        });
    } catch (error) {
        next(error);
    }
};