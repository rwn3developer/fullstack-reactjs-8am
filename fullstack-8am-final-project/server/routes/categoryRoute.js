const express = require('express');

const routes = express.Router();

const UserModel = require('../models/UserModel');

const jwt = require('jsonwebtoken');
const { verifyToken } = require('../middleware/Verifytoken');


routes.get('/',verifyToken,async(req,res)=>{
    try{
       res.send({
            home : "category fetch",
            user : req.user
       })
    }catch(err){
        return res.status(501).send({
            success : false,
            messege : err
        })
    }
})

module.exports = routes