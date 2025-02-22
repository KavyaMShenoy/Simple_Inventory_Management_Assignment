const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');
const validateProductsMiddleware = require('../middlewares/validateProductsMiddleware');

router.get('/', productsController.getAllProducts);

router.get('/:id', productsController.getProductsById);

router.post('/', validateProductsMiddleware, productsController.addProduct);

router.patch('/:id', productsController.updateProductById);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;