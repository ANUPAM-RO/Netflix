const express = require("express");
const cors=require("cors");
const app = express();
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRouter = require("./routes/users");
const movieRouter = require("./routes/movies");
const listRouter = require("./routes/lists");
mongoose.connect("mongodb://localhost:27017/netflix",{
    useNewUrlParser: true,
    useUnifiedTopology:true,

}, (err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("Mongodb connected Sucessfully");
    }
});

app.use(express.json())

app.use(cors())
app.use("/backend/auth", authRoute);
app.use("/backend/users", userRouter);
app.use("/backend/movies", movieRouter);
app.use("/backend/lists", listRouter);

app.listen(8000, ()=>{
    console.log("Backend server is running ")
});