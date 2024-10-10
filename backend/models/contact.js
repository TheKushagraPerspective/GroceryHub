const { type } = require("express/lib/response");
const mongoose = require("mongoose");

// Create a user schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
}, { timestamps: true });

// Create a model for the schema
const Contact = mongoose.model('Contact', userSchema);

module.exports = Contact;
