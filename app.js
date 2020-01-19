const express = require('express');

const productRouter = require('./router/product')
const shopRouter = require('./router/shop')
const app = express();
app.use(express.urlencoded({extended:true}))

app.use(productRouter)
app.use(shopRouter)

app.listen(3000)