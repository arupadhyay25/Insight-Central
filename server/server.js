const express=require("express");
const cors=require("cors");
const { userRoute } = require("./routes/user.route");
const { connection } = require("./config/db");
const { blogRoute } = require("./routes/blog.route");
require("dotenv").config()
const PORT=process.env.PORT||8081

const app=express();
app.use(express.json())

app.use(cors({
    origin: "*",
  }
))

app.use("/",userRoute)    //user Route
app.use("/blog",blogRoute)  //blog Route

app.listen(PORT,async()=>{
    console.log("Server has started on Port no "+PORT)
    try{
        await connection;
        console.log("db connected")
    }catch(err){
        console.log("db not connected"+err.message)
    }
})

