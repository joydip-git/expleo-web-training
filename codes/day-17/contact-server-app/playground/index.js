const express = require('express')

const app = express()
const port = 4000
const objectUri = '/productservice'

// app.get(objectUri, (req, res) => {
//     res.send('hello guys...')
// })
app.get(`${objectUri}/:searchType/:subCategory/:productname`, (req, res) => {
    console.log(req.params)
    res.send('got a value through request')
})
app.get(`${objectUri}`, (req, res) => {
    console.log(req.query)
    res.send('got a value through request')
})

app.listen(port, () => {
    console.log(`server is listenning at http://localhost:${port}${objectUri}`)
})

/*
app.get(`${objectUri}`, (req, res) => {
    getProducts()
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
})

app.get(`${objectUri}/:id`, (req, res) => {
    if (req.params.id) {
        let promise = getProductById(parseInt(req.params.id))
        promise
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
})

app.delete(`${objectUri}/:id`, (req, res) => {
    deleteProduct(parseInt(req.params.id))
        .then((data) => {
            let jsDataResponse = {
                message: data,
                data: []
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
})
*/