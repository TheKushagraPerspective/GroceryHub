const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT | 2000;



app.use(express.static(__dirname , '../frontend'));

app.get('/' , (req , res) => {
    res.sendFile(path.join(__dirname , '../frontend/src/main.jsx'));
})



app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})