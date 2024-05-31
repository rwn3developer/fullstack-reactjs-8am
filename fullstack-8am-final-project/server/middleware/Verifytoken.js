const jwt = require('jsonwebtoken');


const verifyToken = async(req,res,next) => {
    try{
        let token = req.headers.authorization;
        // let token = req.headers['authorization'];
        if(!token || token === undefined){
            res.status(403).send({
                success : false,
                message : "Token is blank"
            })
        }
        const newToken = token.split(" ")[1];
        jwt.verify(newToken,'8am',(err,user)=>{
            if(err){
                res.status(503).send({
                    success : false,
                    message : "Token is not valid"
                })
            }
            req.user = user
        })
       
        return next()
    }catch(err){
        return res.status(501).send({
            success : false,
            messege : err
        })
    }
}

module.exports = {
    verifyToken
}