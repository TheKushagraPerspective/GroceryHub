const express = require("express");
const router = express.Router();
const SignUp = require("../models/sign_up_model");// Import your user schema


// Define the signup route
router.post("/api/register" , async (req , res) => {
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

})

module.exports = router;