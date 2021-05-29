const express = require('express')
const { json } = require('body-parser');
const cors = require('cors')
const { router } = require('../routes/app-routes')

const port = 4001
const app = express()

//register the middleware to be used/applied on express js application request pipeline
app.use(cors())
app.use(json())
app.use(router)

app.listen(port, () => {
    console.log(`server is listenning at http://localhost:${port}/contactservice`)
})


