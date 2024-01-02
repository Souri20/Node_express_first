const mongoose = require('mongoose')

// url = "mongodb+srv://sourabhkumbhar00:xU3CypaAHpvGCi5w@cluster0.dskrna5.mongodb.net/Cluster0?retryWrites=true&w=majority"


const connectDB =(url)=>{
    console.log("db connected");
    return mongoose.connect(url,{
        useNewUrlParser : true,
        useUnifiedTopology :true,
    });
};

module.exports =connectDB;