const mongoose = require('mongoose')

const dbPath = 'mongodb://127.0.0.1:27017/expleodb'

const connectDb = () => {
    mongoose.connect(dbPath, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        if (err)
            console.log(err)
        else
            console.log('connected to mogodb')
    })
}

module.exports = {
    connectDb
}