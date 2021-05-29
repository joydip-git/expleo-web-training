const express = require('express')
const { json } = require('body-parser');
const cors = require('cors')
const { router } = require('../routes/app-routes')

const port = 4000
const app = express()

//register the middleware to be used/applied on express js application request pipeline
// const corsMiddleware = cors({
//     origin: 'file:///D:/Training/expleo-web-training/codes/day-15/client-side-app/index.html'
// })

app.use(cors())
app.use(json())
app.use(router)

app.listen(port, () => {
    console.log(`server is listenning at http://localhost:${port}/productservice`)
})


