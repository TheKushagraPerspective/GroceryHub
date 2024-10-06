const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT | 2000;

const SignUpRouter = require('./routes/sign_up_logic'); // Import the route of signup
const SignInRouter = require('./routes/signIn_logic'); // Import the route of login


const bodyparser = require("body-parser");
app.use(bodyparser.json());    // to parse json data
app.use(bodyparser.urlencoded({extended : true}));



const mongoose = require("mongoose");

// Replace the URI with your own MongoDB connection string
const dbURI = 'mongodb://localhost:27017/groceryhub'; // for local MongoDB
mongoose.connect(dbURI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(
    () => console.log("mongodb is connected")
)
.catch(
    (err) => console.log("error connection to mongodb ",err)
);



app.use("/register" , SignUpRouter);   // for sign-up
app.use("/sign_in" , SignInRouter);   // for sign-in




// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../frontend/build'))); // Adjust path if necessary

app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname , '../frontend/src/main.jsx'));
})

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})