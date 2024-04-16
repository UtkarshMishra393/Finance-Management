const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to MongoDB!")
}).catch((err)=>{
    console.log("Database Not Connected");
})
const app = express();

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})  