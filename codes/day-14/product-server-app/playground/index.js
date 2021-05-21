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