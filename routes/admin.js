const exprress = require('express');
const router = exprress();

const adminController = require('../controllers/admin')


router.get('/add-product',adminController.getAddProduct);

router.post('/add-product',adminController.postAddProduct);

router.get('/edit-product',adminController.getEditProduct);

router.post('/edit-product',adminController.postEditProduct);

router.get('/products',adminController.getProducts);

module.exports =router;
