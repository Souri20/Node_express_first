const express = require('express');
const product_routes = require("./routes/product");
const connectDB =require("./db/connect")
require("dotenv").config()
const app = express();
const port =process.env.PORT || 5000; 
jwt = require('jsonwebtoken');

app.post("/api/login",(req,res)=>{
    const user ={id:3};
    console.log({user})
    const token = jwt.sign({user},"my_secret_key")
    res.json({
        token : token
    })
});

app.get("/api/login/protected",ensureToken,(req,res)=>{

    jwt.verify(req.token,"my_secret_key",(error,data)=>{
        if(error){
            console.log("not working here")
        }
        else{
            res.json({
                key : "it is protected",
                data: data
            })

        }
    })
   
        

    
   
});

function ensureToken(req,res,next){
    const bearHeader = req.headers['authorization']
    if (req.headers['authorization'] !=='undefined'){
        req.token = bearHeader;
        next()

    }
    else{
        res.json({key: "not working in ensureToken Function"})
    }
}

// middleware to get routes

app.use("/api/product",product_routes)
app.use("/",product_routes)

const start = async () =>{
    try{
        // await connectDB(process.env.MONGODB_URL) ;
        app.listen(port,()=>{
                console.log("Port is Started at 5000")
        })
    }catch{
        console.log(error)
    }

}

start()
