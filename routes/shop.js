const exprress = require('express');
const fs = require('fs');
const router = exprress();


const shopController =require('../controllers/shop')

router.get("/",shopController.getIndex);

router.get("/products",shopController.getProducts);

router.get("/products/:productid",shopController.getProduct);

router.get('/details',shopController.getProductsDetails)

router.get('/cart',shopController.getProductsCarts)

router.get('/orders',shopController.getProductsOrders)




module.exports= router