const express = require('express')

const process = require('process'); 

const port = process.env.PORT || 8000

const app = express();

const cors = require('cors')

const db = require('./config/db');

const cloudinary = require('cloudinary').v2

//config cloudinary
cloudinary.config({ 
    cloud_name: "coderking", 
    api_key: "894478555391115", 
    api_secret: "gNOzQfa7BRLtN0MibIdiZHyfQnU"
});


app.use(express.json()); 

app.use(express.urlencoded());

app.use(cors());

app.use('/api/v1/auth',require('./routes/auth'))
app.use('/api/v1/category',require('./routes/categoryRoute'))
app.use('/api/v1/product',require('./routes/productRoute'));

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(`server start on port :- ${port}`); 
})