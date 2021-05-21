const fs = require('fs')
//service file/app: is a collection of operations/services
const getProducts = () => {
    //read all records from file and ??
    return new Promise((resolve, reject) => {
        fs.readFile('./data/products.json', (err, data) => {
            if (err) {
                reject(err)
                return;
            }
            resolve(JSON.parse(data));
        })
    })
}

const getProductById = (id) => {
    //read a particular product record from file and ???
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                './data/products.json',
                (err, data) => {
                    if (err) {
                        reject(err)
                        return;
                    }

                    let products = JSON.parse(data)
                    if (products.length == 0) {
                        reject('no records present')
                        return;
                    }

                    let found = products.find(p => p.id === id);
                    if (!found) {
                        reject('no such record exists')
                        return;
                    }
                    resolve(found)
                })
        })
}

const addProduct = (product) => {
    //adds a product record into file and ??
    return new Promise((resolve, reject) => {
        fs.readFile('./data/products.json', (err, data) => {
            if (err) {
                reject(err)
                return;
            }

            let products = JSON.parse(data);
            if (products.length == 0) {
                products.push(product)
                fs.writeFile(
                    './data/products.json',
                    JSON.stringify(products),
                    () => resolve('added successfully'))

            } else {
                let found = products.find(p => p.id === product.id)
                if (found) {
                    reject('product already exists')
                    return;
                }

                products.push(product);
                fs.writeFile(
                    './data/products.json',
                    JSON.stringify(products),
                    () => {
                        resolve('added successfully')
                    })

            }
        })
    })
}

const updateProduct = (product) => {
    //updates a product record into file and ??
}

const deleteProduct = (id) => {
    //deletes a product record from file and ??
    return new Promise((resolve, reject) => {
        fs.readFile('./data/products.json', (err, data) => {
            if (err) {
                reject(err)
                return;
            }

            if (data) {
                let products = JSON.parse(data)
                let index = products.findIndex(p => p.id === id)
                if (index == -1) {
                    reject('no such product found')
                    return;
                }
                products.splice(index, 1);
                fs.writeFile('./data/products.json', JSON.stringify(products), () => {
                    resolve('record deleted')
                })
            }
        })
    })
}
module.exports = {
    getProducts,
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct
}