const express = require("express");
const router = express.Router()
const { getAllProducts, getAllProductsStatic } = require("../controllers/product");


// router.get('/', getAllProducts)
// router.get('/', getAllProductsStatic)

// or

router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)

module.exports = router;