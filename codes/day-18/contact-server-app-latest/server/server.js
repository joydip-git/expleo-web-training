const express = require('express')
const { json } = require('body-parser');
const cors = require('cors')
const { router } = require('../routes/app-routes')
const { connectDb } = require('../db/db')


const port = 4001
const app = express()

app.use(cors())
app.use(json())
app.use(router)

app.listen(port, () => {
    connectDb();
    console.log(`server is listenning at http://localhost:${port}/contactservice`)
})


