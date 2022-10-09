const asyncHandler = require("express-async-handler");
const { Error } = require("mongoose");
const Task = require("../models/tasks");

const addTask = asyncHandler(async (req, res) => {
    let { email, taskName , taskType ,  startTime ,timeComp } = req.body; 

    const task = await Task.create({
        email, taskName , taskType ,  startTime ,timeComp
    });
    if (task) {
        res.status(201).json({
            _id: task._id,
            email: task.email,
            taskName: taskName
        });
    }
    else {
        res.status(400);
        throw new Error("Error Occurred")
    }

});
//function to show tasks
const Searchtask = asyncHandler(async (req, res) => {
    const { email} = req.body;
    const tasks = await Task.find({email: email});
    if (tasks) {
        res.json({
            task:tasks
        });
    } else {
        res.status(400);
        throw new Error("Invalid Email or Password");
    }

});
module.exports = {addTask,Searchtask};