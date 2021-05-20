const product = require('../models/product')
const addProduct = (optionValues) => {
    const productObj = new product(optionValues.name, optionValues.id, optionValues.price, optionValues.description);
    //funct(productObj)
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



