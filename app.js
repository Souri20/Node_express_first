const express = require('express');
const product_routes = require("./routes/product");
const connectDB =require("./db/connect")
require("dotenv").config()
const app = express();
const port =process.env.PORT || 5000; 

app.get("/",(req,res)=>{
    res.send("Hi I'm Alive")
});
// middleware to get routes

app.use("/api/product",product_routes)

const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL) ;
        app.listen(port,()=>{
                console.log("Port is Started at 5000")
        })
    }catch{
        console.log(error)
    }

}

start()
