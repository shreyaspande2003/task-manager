const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

    email: {
        type: String,
        required: false
    },

    taskName:{
        type: String,
        required: true  //0 for employee
    },
    taskType:{
        type: String,
        required: true
    },
    startTime:{
        type: Date,
        required: true
    },
    timeComp:{
        type: Number,
        required: true
    }
    
},
    {timesptamps:true}
);
const Task=mongoose.model("task",taskSchema);
module.exports=Task;