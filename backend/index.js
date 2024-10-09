require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');  // Import CORS
const PORT = process.env.PORT || 2000; // Use || for default value
const mongoose = require("mongoose");
const SignUp = require("./models/sign_up_model");// Import your user schema







const bodyparser = require("body-parser");
app.use(bodyparser.json()); // To parse JSON data
app.use(bodyparser.urlencoded({ extended: true })); // To parse URL-encoded data


// Enable CORS for all routes
app.use(cors());



// Replace the URI with your own MongoDB connection string
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));





// API routes

// For sign-up
app.use("/api/register" , async (req , res) => {
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
app.use("/api/sign_in" , async (req , res) => {
    const {email , password} = req.body;    // Extract email and password from request body

    try{

        // Check if user exists in the database by email and password
        const user = await SignUp.findOne({
            email : email
        })

        if(user) {
            if(user.password === password) {
                // If user exists, return a success response with user data
                res.status(200).json({ message : "User signed in successfully" })
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
