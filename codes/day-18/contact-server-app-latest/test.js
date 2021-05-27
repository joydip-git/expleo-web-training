const express = require('express')
const { Router } = require('express');

const app = express()
const router = Router();
router.get('/', (req, res) => res.send('hello world'))

app.use(router)
app.listen(3000, () => console.log('server is running'))