const express = require('express');
const mongoose=require("mongoose");
const app = express();
const PORT = 3000;
const bodyparser=require("body-parser");
const cookieParser = require('cookie-parser');
const dbConnect = require("./models/userModel");
dbConnect();

const router=express.Router();
const userRoutes=require('./routes/userRoutes');
app.use(bodyparser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.json());
app.use('/api/users',userRoutes);
app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);