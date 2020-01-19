const express = require('express')
const path = require('path');
const router = express.Router()

router.use('/add-product',(req,res,next) =>{
    console.log("First Middleware")
    res.sendFile(path.join(__dirname,'../views','product.html'));
    })
    router.use('/product',(req,res,next) =>{
        console.log(req.body);
        res.redirect('/');
    })

module.exports = router