const express = require('express');

const routes = express.Router();

const CategoryModel = require('../models/CategoryModel');

const jwt = require('jsonwebtoken');
const { verifyToken } = require('../middleware/Verifytoken');


routes.post('/createCategory',async(req,res)=>{
    try{
        let category = await CategoryModel.create({
            category : req.body.category
        })
       res.send({
            success : true,
            messege : "category add",
            category
       })
    }catch(err){
        return res.status(501).send({
            success : false,
            messege : err
        })
    }
})

module.exports = routes