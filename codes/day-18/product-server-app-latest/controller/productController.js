const { getProducts, getProductById, deleteProduct, addProduct, updateProduct } = require("../manager/productManager")
const { generateResponse } = require("./responseGenerator")

const getProductsHandler = (req, res) => {
    let getAllPromise = getProducts()
    getAllPromise
        .then((data) => {
            let jsDataResponse = generateResponse(data, 'records found')
            res.send(jsDataResponse)
        })
        .catch((err) => {
            let jsErrorResponse = generateResponse([], err)
            res.send(jsErrorResponse)
        })
}

const getProductByIdHandler = (req, res) => {
    if (req.params.id) {
        let getPromise = getProductById(parseInt(req.params.id))
        getPromise
            .then(
                (data) => {
                    let jsDataResponse = generateResponse(data, 'record found')
                    res.send(jsDataResponse)
                })
            .catch((err) => {
                let jsErrorResponse = generateResponse([], err)
                res.send(jsErrorResponse)
            })
    }
}

const deleteProductHandler = (req, res) => {
    let deletePromise = deleteProduct(parseInt(req.params.id))

    deletePromise
        .then(
            (data) => {
                let jsDataResponse = generateResponse(data, 'record deleted')
                res.send(jsDataResponse)
            })
        .catch(
            (err) => {
                let jsErrorResponse = generateResponse([], err)
                res.send(jsErrorResponse)
            })
}

const addProductHandler = (req, res) => {
    let addPromise = addProduct(req.body)
    addPromise
        .then(data => {
            let jsDataResponse = generateResponse(data, 'record added')
            res.send(jsDataResponse);
        })
        .catch(err => {
            let jsErrorResponse = generateResponse([], err)
            res.send(jsErrorResponse);
        })
}

const updateProductHandler = (req, res) => {
    let updatePromise = updateProduct(req.body)
    updatePromise
        .then(data => {
            let jsDataResponse = generateResponse(data, 'record updated')
            res.send(jsDataResponse);
        })
        .catch(err => {
            let jsErrorResponse = generateResponse([], err)
            res.send(jsErrorResponse);
        })
}

module.exports = {
    getProductByIdHandler,
    getProductsHandler,
    deleteProductHandler,
    addProductHandler,
    updateProductHandler
}