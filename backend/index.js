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
    
    res.json(data)
    // return res.json();
})


app.post("/add/product",async(req,res)=>{
     const {product_name,product_price,product_description,product_image,product_category,product_sub_category,product_country} = req.body;
        console.log(req.body);
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


// // Serve static files from the frontend build directory
// app.use(express.static(path.join(__dirname, '../frontend/dist'))); // Adjusted to 'dist' folder

// // The "catchall" handler: for any request that doesn't match one above,
// // send back the React app.
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html')); // Serve the main HTML file
// });




// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});





// {"product_name":"Amazon Brand - Vedaka Popular Unpolished Toor Dal | Naturally Rich Source of Protein | Naturally Cholesterol free| 2 kg Pack","product_price" : "398","product_description" : "Vedaka ensures the hygiene and quality of its Pulses through meticulous packaging and rigorous laboratory testing, adhering to the food safety standards set by FSSAI
// Toor dal is used in many Indian delicacies and is rich in protein*, dietary fibre*
// No artificial flavours. No preservatives
// ALSO TRY: Try All Vedaka products which maintains Consistency in quality across the year","product_image":"https://m.media-amazon.com/images/I/916fA7fDMHL._SX679_.jpg","product_category":"Pulses","product_sub_category":"Daal","product_country":"India"}