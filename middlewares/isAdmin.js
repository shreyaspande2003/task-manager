const jwt=require("jsonwebtoken");
const User=require("../models/user");
const bcrypt = require("bcrypt");

const isAdmin=async (req,res,next) =>{
    try{
        const { Adminemail, Adminpassword } = req.body;
        // const verifyToken=jwt.verify(token,process.env.JWT_SECRET);
        const rootUser = await User.findOne({email:Adminemail});
        console.log(Adminpassword);
        if(!rootUser || !(await bcrypt.compare( Adminpassword, rootUser.password))){throw new Error('user not found')};

        if(rootUser.role==0){throw new Error('admin resource! access denied!');}
        next();
    }
    catch(err){
        res.status(401).send("unauthoirized:no token provided");
        console.log(err);
    }
}

module.exports=isAdmin;