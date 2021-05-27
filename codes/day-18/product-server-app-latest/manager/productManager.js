const fs = require('fs')

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

                    let found = products.find(p => p.productId === id);
                    if (!found) {
                        reject('no such record exists')
                        return;
                    }
                    resolve(found)
                })
        })
}

const addProduct = (product) => {
    //adds a product record into file
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
                    () => resolve(product)
                )

            } else {
                let found = products.find(p => p.productId === product.productId)
                if (found) {
                    reject('product already exists')
                    return;
                }

                products.push(product);
                fs.writeFile(
                    './data/products.json',
                    JSON.stringify(products),
                    () => {
                        resolve(product)
                    })

            }
        })
    })
}

const updateProduct = (product) => {
    //updates a product record into file
    return new Promise((resolve, reject) => {
        fs.readFile('./data/products.json', (err, data) => {
            if (err) {
                reject(err)
                return;
            }

            if (data) {
                let products = JSON.parse(data)

                if (products.length == 0) {
                    reject('no records at all in the file')
                }
                else {
                    let index = products.findIndex((p) => p.productId === product.productId)
                    if (index == -1) {
                        reject('no such product found')
                    } else {
                        products.splice(index, 1, product);
                        fs.writeFile(
                            './data/products.json',
                            JSON.stringify(products),
                            () => {
                                resolve(product)
                            })
                    }
                }
            }
        })
    })
}

const deleteProduct = (id) => {
    //deletes a product record from file given the id of the product
    return new Promise((resolve, reject) => {
        fs.readFile('./data/products.json', (err, data) => {
            if (err) {
                reject(err)
                return;
            }

            if (data) {
                let products = JSON.parse(data)

                if (products.length == 0) {
                    reject('no records at all in the file')
                }
                else {
                    let index = products.findIndex((p) => p.productId === id)
                    let found = products.find((p) => p.productId === id)
                    if (index == -1) {
                        reject('no such product found')
                    } else {
                        products.splice(index, 1);
                        fs.writeFile(
                            './data/products.json',
                            JSON.stringify(products),
                            () => {
                                resolve(found)
                            })
                    }
                }
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