const Product = require("../models/schema")

const getAllProduct = async (req,res) =>{
    // const myData = await Product.find({name:"watch"})
    const {name} = req.query
    console.log(name)
    const myData = await Product.find(req.query)
    res.status(200).json({myData})
}

const getAllProducttesting = async (req,res) =>{
    res.status(200).json({'msg':"I'm getting all product Testing"})
}

module.exports = {getAllProduct,getAllProducttesting}