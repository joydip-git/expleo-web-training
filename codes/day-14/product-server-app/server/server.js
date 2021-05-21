const express = require('express')

const app = express()
const port = 4000
const objectUri = '/productservice'

app.get(`${objectUri}`, (req, res) => {
    res.send('hello...')
})
app.get(`${objectUri}/:id`, (req, res) => {
    res.send(`got a value through request: ${req.params.id}`)
})

app.listen(port, () => {
    console.log(`server is listenning at http://localhost:${port}${objectUri}`)
})