const express = require('express');

const routes = express.Router();

const UserModel = require('../models/UserModel');

const jwt = require('jsonwebtoken');

routes.post('/registeruser', async (req, res) => {
    try {
        const { name, email, password, city, phone } = req.body;
        const user = await UserModel.create({
            name, email, password, city, phone
        })
        return res.status(200).send({
            success: true,
            message: "User successfully create",
            user
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err
        })

    }
})

routes.post('/loginuser', async (req, res) => {
    try {
        const { email, password, } = req.body;
        const user = await UserModel.findOne({ email: email });
        if (!user || user.password != password) {
            return res.status(200).send({
                success: false,
                message: "Email and password not valid",
            })
        }
        const token  = await jwt.sign({payload : user},'8am',{expiresIn : '24hr'})
        return res.status(200).send({
            success : true,
            message : "Token is create",
            token
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            message: err
        })

    }
})





module.exports = routes;