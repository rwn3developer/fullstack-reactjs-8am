const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    qty:{
        type : Number,
        default : 1
    },
     description: {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    public_id : {
        type : String,
        required : true
    }
})

const product = mongoose.model('product',productSchema);
module.exports = product;