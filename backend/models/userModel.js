const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
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
            'Please add a valid email'
        ]
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'password is required'],
        minlength: [6, 'password must have at least (6) caracters'],
    },
    role: {
        type: String,
        default: 'user'
    },
    profileCompleted: {
        type: Boolean,
        default: false
    },
    dob: {
        type: Date,  
    },
    education: [
        {
            institution: {type: String},
            degree: {type: String},
            startYear: {type: Date},
            endYear: {type: Date}
        }
    ],
    profession: {
		type: String
	},
	country: {
		type: String,
	},
	state: {
		type: String,
	},
	town: {
		type: String
	},
	address: {
		type: String
	},
    skills: {
        type: [String],
        default: []
    },
    imgUrl: {
        type: String,
        default: ""
    },
    contact: {
        type: String,
        default: 0
    },
    bio: {
        type: String,
        default: ""
    },
    rating: {
        type: Number,
        default: 0
    },
    jobsApplied: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId},
        }
    ]
}, { timestamps: true })


//encrypting password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})


// compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// return a JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: 3600
    });
}


module.exports = mongoose.model('User', userSchema);