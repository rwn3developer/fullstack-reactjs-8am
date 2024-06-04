const express = require('express');

const routes = express.Router();

const ProductModel = require('../models/ProductModel');
const { verifyToken } = require('../middleware/Verifytoken');

const cloudinary = require('cloudinary').v2

const multer = require('multer');

const storage = multer.diskStorage({});

const productImage = multer({storage : storage}).single('image');

routes.post('/createProduct',productImage,async(req,res)=>{
    try{
        const {name,price,qty,description} = req.body;  
        const image = await cloudinary.uploader.upload(req.file.path);
        // res.send(image.secure_url)
        // console.log(image.public_id);
        const product = await ProductModel.create({
            categoryId : req.body.categoryId,
            name : name,
            price : price,
            description : description,
            image : image.secure_url,
            public_id : image.public_id
        })
        return res.status(200).send({
            success : true,
            message : "Product successfully add",
            product
        })
    }catch(err){
        return res.status(501).send({
            success : false,
            messege : err
        })
    }
})

routes.get('/',productImage,async(req,res)=>{
    try{
        const products = await ProductModel.find({}).populate('categoryId');
        return res.status(200).send({
            success : true,
            message : "Product successfully fetch",
            products
        })
    }catch(err){
        return res.status(501).send({
            success : false,
            messege : err
        })
    }
})

routes.delete('/productDelete',verifyToken,productImage,async(req,res)=>{
    try{
       const id = req.query.id;
       const single = await ProductModel.findById(id);
       await cloudinary.uploader.destroy(single.public_id);
       await ProductModel.findByIdAndDelete(id);
       return res.status(200).send({
        success : true,
        message : "Product successfully delete",
    })
    }catch(err){
        return res.status(501).send({
            success : false,
            messege : err
        })
    }
})



module.exports = routes;