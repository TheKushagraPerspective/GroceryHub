const mongoose = require("mongoose");

// Create a user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Create a model for the schema
const SignUp = mongoose.model('SignUp', userSchema);

module.exports = SignUp;
