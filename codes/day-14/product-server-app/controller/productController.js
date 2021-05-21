const { reset } = require("nodemon")
const { getProducts, getProductById, deleteProduct, addProduct } = require("../manager/productManager")

const getProductsHandler = (req, res) => {
    let getAllPromise = getProducts()
    getAllPromise
        .then((data) => {
            let jsDataResponse = {
                message: 'records found',
                data: data
            }
            res.send(JSON.stringify(jsDataResponse))
        })
        .catch((err) => {
            let jsErrorResponse = {
                message: err,
                data: []
            }
            res.send(JSON.stringify(jsErrorResponse))
        })
}

const getProductByIdHandler = (req, res) => {
    if (req.params.id) {
        let getPromise = getProductById(parseInt(req.params.id))
        getPromise
            .then(
                (data) => {
                    let jsDataResponse = {
                        message: 'record found',
                        data: data
                    }
                    res.send(JSON.stringify(jsDataResponse))
                })
            .catch((err) => {
                let jsErrorResponse = {
                    message: err,
                    data: []
                }
                res.send(JSON.stringify(jsErrorResponse))
            })
    }
}

const deleteProductHandler = (req, res) => {
    let deletePromise = deleteProduct(parseInt(req.params.id))

    deletePromise
        .then(
            (data) => {
                let jsDataResponse = {
                    message: data,
                    data: []
                }
                res.send(JSON.stringify(jsDataResponse))
            })
        .catch(
            (err) => {
                let jsErrorResponse = {
                    message: err,
                    data: []
                }
                res.send(JSON.stringify(jsErrorResponse))
            })
}

const addProductHandler = (req, res) => {
    let addPromise = addProduct(req.body)
    addPromise
        .then(res => {
            let jsDataResponse = {
                message: res,
                data: []
            }
            res.send(JSON.stringify(jsDataResponse));
        })
        .catch(err => {
            let jsErrorResponse = {
                message: err,
                data: []
            }
            res.send(JSON.stringify(jsErrorResponse));
        })
}

const updateProductHandler = (req, res) => {

}

module.exports = {
    getProductByIdHandler,
    getProductsHandler,
    deleteProductHandler,
    addProductHandler,
    updateProductHandler
}