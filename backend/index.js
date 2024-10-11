require('dotenv').config(); // Load environment variables from .env file

const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');  // Import CORS
const PORT = process.env.PORT || 2000; // Use || for default value
const mongoose = require("mongoose");
const SignUp = require("./models/sign_up_model");// Import your user schema
const Product=require("./models/product")
const Cart=require("./models/cart")
const Contact = require("./models/contact");
// const bodyparser = require("body-parser");
app.use(express.json()); // To parse JSON data
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data


// Enable CORS for all routes
app.use(cors());



// Replace the URI with your own MongoDB connection string
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));





// API routes

// For sign-up
app.post("/api/register" , async (req , res) => {
    const {name , email , password} = req.body;

    try{
            // Check if the user already exists
        const existingUser = await SignUp.findOne({email});
        if(existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // create new user
        const newUser = new SignUp({
            name , 
            email , 
            password
        })

        await newUser.save();
        // Respond with a success message
        res.status(201).json({ message: 'User registered successfully' });
    } catch(err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Internal server error' });
    }

}); 



// For sign-in
app.post("/api/sign_in" , async (req , res) => {
    const {email , password} = req.body;    // Extract email and password from request body

    try{

        // Check if user exists in the database by email and password
        const user = await SignUp.findOne({
            email : email
        })

        if(user) {
            if(user.password === password) {

                // Generate a token with userId
                const token = jwt.sign({ userId: user._id }, 'SECRET_KEY');
    

                // If user exists, return a success response with user data
                res.status(200).json({token , message : "User signed in successfully" })
            }
            else {
                // If password is incorrect, return an error response
                res.status(401).json({ message : "Incorrect password" })
            }
        }
        else {
            res.status(400).json({message : "User not found.Please Register to login..."});
        }

    } catch(err) {
        // Catch any errors and send a 500 status code for server issues
        console.error(err);
        res.status(500).json({message : "server-error"});
    }
}); 



app.get("/api/product/:cat",async (req,res)=>{
    const cata = req.params.cat;
    let data=await Product.find({product_category:cata})
    // console.log(data);
    
    res.status(200).json(data)
    // return res.json();
})


app.post("/add/product",async(req,res)=>{
     const {product_name,product_price,product_description,product_image,product_category,product_sub_category,product_country} = req.body;
        // console.log(req.body);
        // res.send(req.body);
    try{
        
        const newProduct = new Product({product_name,product_price,product_description,product_image,product_category,product_sub_category,product_country})

        await newProduct.save();
        // Respond with a success message
        res.status(201).json({ message: 'Product registered successfully' ,newProduct});
    } catch(err) {
        console.error('Error registering Product:', err);
        res.status(500).json({ message: 'Internal server error' });
    }

})


app.post("/api/contact" , async(req , res) => {
    const {name , email , subject , message} = req.body;

    try{
        const newContactDetails = new Contact({name , email , subject , message});
        await newContactDetails.save();
        res.status(201).json({message : "Contact details saved successfully" , newContactDetails});
    } catch(err) {
        console.error('Error saving contact details:', err);
        res.status(500).json({ message: 'Internal server error on contact api' });
    }

})




app.post("/api/add/cart",async(req,res)=>{
    const {user_id,product_id} = req.body;
    let a=jwt.verify(user_id,'SECRET_KEY')
    // console.log(a.userId);
    // console.log(product_id);
    try{

        // Check if user exists in the database by email and password
        const data = await Cart.findOne({
            product_id:product_id,
        })

        if(data) {
            let up=await Cart.findOneAndUpdate({product_id},{$inc:{quantity:1}})
            res.status(201).json({message : "product added to cart" ,up})
        }
        else {
            const newProduct = new Cart({user_id:a.userId,product_id})
            await newProduct.save();
            res.status(201).json({ message: 'Product added to Cart successfully' ,newProduct});
        }
    } catch(err) {
        // Catch any errors and send a 500 status code for server issues
        console.error(err);
        res.status(500).json({message : "server-error"});
    }
})

app.post("/api/cart", async (req, res) => {
    const { user_id } = req.body;
    try {
      let a = jwt.verify(user_id, 'SECRET_KEY');
      const data = await Cart.find({ user_id: a.userId });
    //   console.log("from api/cart");
    //   console.log(data);
  
      if (data.length > 0) {
        res.status(200).json({ message: "Products fetched from cart", data });
      } else {
        res.status(200).json({ message: "Cart is empty", data: [] });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "server-error" });
    }
  });
  
  app.get("/products/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.status(200).json([product]);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "server-error" });
    }
});

  app.post("/api/cart/remove", async (req, res) => {
    const { user_id, item_id } = req.body;
    try {
      let a = jwt.verify(user_id, 'SECRET_KEY');
      const result = await Cart.findOneAndDelete({ _id: item_id, user_id: a.userId });
      
      if (result) {
        res.status(200).json({ message: "Item removed from cart successfully" });
      } else {
        res.status(404).json({ message: "Item not found in cart" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "server-error" });
    }
});



// ... (existing code)

const Order = require("./models/order");

// ... (existing code)

app.post("/api/submit-order", async (req, res) => {
  const { user_id, name, email, address, country, pincode, cartItems, totalPrice, paymentMethod } = req.body;

  try {
    let decodedUserId = jwt.verify(user_id, 'SECRET_KEY').userId;

    const newOrder = new Order({
      user_id: decodedUserId,
      name,
      email,
      address,
      country,
      pincode,
      items: cartItems,
      totalPrice,
      paymentMethod,
      status: 'Pending'
    });

    await newOrder.save();

    // Clear the user's cart

    res.status(201).json({ message: "Order submitted successfully", orderId: newOrder._id });
  } catch (err) {
    console.error('Error submitting order:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// ... (existing code)

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




