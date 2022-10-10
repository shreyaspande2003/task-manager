const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    contactNumber:{
      type:Number,
      required:false
    },
    password: {
        type: String,
        required: false
    },
    //there will be 2 role: 0->user,1->admin
    department:{
        type: String,
        required:false  //0 is for user
    },
    joiningDate: {
        type: Date,
        required:false
    },
    role:{
        type: Number,
        default: 0   //0 for employee
    },
    
},
    {timesptamps:true}
);
const User=mongoose.model("model",userSchema);
module.exports=User;