import mongoose, { Document, Schema, Model } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Define the User interface
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
  profileCompleted: boolean;
  dob?: Date;
  education: {
    institution: string;
    degree: string;
    startYear: Date;
    endYear: Date;
  }[];
  profession?: string;
  country?: string;
  state?: string;
  town?: string;
  address?: string;
  skills: string[];
  imgUrl: string;
  contact: string;
  bio: string;
  rating: number;
  jobsApplied: {
    _id: mongoose.Types.ObjectId;
  }[];
  type: string;
  description?: string;
  startDate?: Date;
  mission?: string;
  website?: string;
  domain: string[];
  comparePassword(enteredPassword: string): Promise<boolean>;
  getJwtToken(): string;
}

// Define the User schema
const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'first name is required'],
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'e-mail is required'],
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
      ],
    },
    password: {
      type: String,
      trim: true,
      required: [true, 'password is required'],
      minlength: [6, 'password must have at least (6) characters'],
    },
    role: {
      type: String,
      default: 'user',
    },
    profileCompleted: {
      type: Boolean,
      default: false,
    },
    dob: {
      type: Date,
    },
    education: [
      {
        institution: { type: String },
        degree: { type: String },
        startYear: { type: Date },
        endYear: { type: Date },
      },
    ],
    profession: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    town: {
      type: String,
    },
    address: {
      type: String,
    },
    skills: {
      type: [String],
      default: [],
    },
    imgUrl: {
      type: String,
      default: '',
    },
    contact: {
      type: String,
      default: '0',
    },
    bio: {
      type: String,
      default: '',
    },
    rating: {
      type: Number,
      default: 0,
    },
    jobsApplied: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    type: {
      type: String,
      default: 'normal', // individual, enterprise
    },
    description: {
      type: String,
      required: false,
    },
    startDate: {
      type: Date,
    },
    mission: {
      type: String,
      required: false,
    },
    website: {
      type: String,
      required: false,
    },
    domain: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

// Encrypting password before saving
userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare user password
userSchema.methods.comparePassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Return a JWT token
userSchema.methods.getJwtToken = function (): string {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET || '11112222', {
    expiresIn: 36000,
  });
};

// Create and export the User model
const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;