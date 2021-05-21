const { Router } = require('express');
const { getProductsHandler, getProductByIdHandler, deleteProductHandler, addProductHandler, updateProductHandler } = require('../controller/productController');

const router = Router();
const objectUri = '/productservice'

router
    .get(objectUri, getProductsHandler);
router
    .get(`${objectUri}/:id`, getProductByIdHandler)
router
    .delete(`${objectUri}/:id`, deleteProductHandler)
router
    .post(objectUri, addProductHandler)
router
    .put(objectUri, updateProductHandler)

module.exports = { router }