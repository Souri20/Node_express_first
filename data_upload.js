const connectDB =require("./db/connect");
require("dotenv").config()

dataJson = require("./data.json")
const Product =require("./models/schema");

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.create(dataJson);
        console.log("Success data has been added sucessfully")

    }catch(error){
        console.log(error)
    }
}

start();