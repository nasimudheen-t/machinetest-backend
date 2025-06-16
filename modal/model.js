const mongoose = require('mongoose')

const productSchema =new mongoose.Schema({
    name:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:Number
    },
    inStock:{
        type:Boolean,
        default:false
    },

})

const Product = mongoose.model("Product",productSchema)

module.exports = Product