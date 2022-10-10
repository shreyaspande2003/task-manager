const jwt=require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User=require("../models/user");

const postAuthenticate=async (req,res,next) =>{
    try{
        const { Useremail, Userpassword } = req.body;
      
        const rootUser = await User.findOne({email:Useremail});
        if(!rootUser || !(await bcrypt.compare( Userpassword, rootUser.password))){throw new Error('user not found')};

        req.Useremail=Useremail;
        // req.userID=rootUser._id;
        next();
    }
    catch(err){
        res.status(401).send("unauthoirized:no token provided");
        console.log(err);
    }
}

module.exports=postAuthenticate;