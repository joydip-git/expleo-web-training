const product = require('../models/product')
const { writeProduct, writeProductUsingPromise } = require('../dao/productdao')

const addProduct = (optionValues) => {
    const productObj = new product(optionValues.name, optionValues.id, optionValues.price, optionValues.description);
    //writeProduct(productObj)
    writeProductUsingPromise(productObj)
}

const deleteProduct = (optionValues) => {

}

const updateProduct = (optionValues) => {

}

const getProductById = (optionValues) => {

}

const getProducts = () => {

}

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProducts
}



