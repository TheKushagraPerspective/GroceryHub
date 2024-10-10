const { type } = require("express/lib/response");
const mongoose = require("mongoose");

// Create a user schema
const userSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    product_id:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1,
    }
}, { timestamps: true });

// Create a model for the schema
const Cart = mongoose.model('Cart', userSchema);

module.exports = Cart;
