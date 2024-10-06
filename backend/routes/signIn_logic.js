const express = require('express'); // Import Express
const router = express.Router(); // Initialize Router

// Route to handle user sign-in
router.post("/sign_in" , async (req , res) => {
    const {email , password} = req.body;    // Extract email and password from request body

    try{

        // Check if user exists in the database by email and password
        const user = await User.findMany({
            email : email,
            password : password
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
})


module.exports = router;