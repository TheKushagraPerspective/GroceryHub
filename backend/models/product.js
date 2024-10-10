const { type } = require("express/lib/response");
const mongoose = require("mongoose");

// Create a user schema
const userSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:String,
        required:true
    },
    product_description:{
        type:String,
        required:true
    },
    product_image:{
        type:String,
        required:true
        },
    product_category:{
        type:String,
        required:true
    },
    product_sub_category:{
        type:String,
        required:true
    },
    product_rating:{
        type:String,
    },
    product_reviews:{
        type:String,
    },
    product_country:{
        type:String,
    }
}, { timestamps: true });

// Create a model for the schema
const Product = mongoose.model('Product', userSchema);

module.exports = Product;
