const express = require('express')

const router = express.Router()

const addProducts = require('../controller/product.js')



// add products
router.post('/add',addProducts.addProducts)


// edit event
router.put('/edit/:id',addProducts.editProducts)


router.delete('/delete-products/:id',addProducts.deleteproducts)

// get all products
router.get('/all-products',addProducts.getAllProducts)

module.exports = router