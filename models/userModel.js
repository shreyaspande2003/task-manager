const mongoose=require("mongoose");
require('dotenv').config()
// const bcrypt=require("bcrypt");
// const generateToken = require("../utils/generateToken");


async function dbConnect() {
    // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
    mongoose
      .connect(
          process.env.MONGODB,
        {
          //   these are options to ensure that the connection is done properly
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      )
      .then(() => {
        console.log("Successfully connected to MongoDB Atlas!");
      })
      .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.error(error);
      });
  }
module.exports = dbConnect;
// const User=mongoose.model("user",userSchema);
// module.exports=User;