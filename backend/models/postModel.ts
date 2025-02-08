import mongoose, { Document, Schema, Types, Model } from 'mongoose';

// Define the Post interface
interface IPost extends Document {
  title: string;
  content: string;
  postedBy: Types.ObjectId;
  image: {
    url: string;
    public_id: string;
  };
  likes: Types.ObjectId[];
  comments: {
    text: string;
    created: Date;
    postedBy: Types.ObjectId;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

// Define the Post schema
const postSchema: Schema<IPost> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
    },
    content: {
      type: String,
      required: [true, 'content is required'],
    },
    postedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    image: {
      url: String,
      public_id: String,
    },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [
      {
        text: String,
        created: { type: Date, default: Date.now },
        postedBy: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
  },
  { timestamps: true }
);

// Create and export the Post model
const Post: Model<IPost> = mongoose.model<IPost>('Post', postSchema);

export default Post;