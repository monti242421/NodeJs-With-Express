const express = require("express");
const router = express.Router();


const productController = require('../controller/product')

router.get('/add-product',productController.getAddProduct);

router.post('/add-product',productController.postAddProducts);


module.exports = router;