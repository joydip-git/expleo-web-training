//function
/**
 * accept product object as an argument in the function
 * write that product data in the file
 * 
 * 1. read the contents of the file
 * 2. check any array is already present or not
 * 3. check if there is an array
 *  a. if the array contains existing product object, then rewrite the same data along with new data as part of the array
 *  b. if that's an empty array
 *  c. there is no array at all
 */


const fs = require('fs')
const filePath = './data/products.json'

const getRecords = (callAfterReading) => {
    console.log('in get records');
    fs.readFile(filePath, callAfterReading)
}

const writeProduct = (productData) => {
    const getHandler = (err, data) => {
        if (err) {
            console.log(`error:${err}`);
        }
        if (data) {
            console.log('callback called with data');
            let d = data.toString()
            if (d !== '') {
                console.log('array exists');
                let products = JSON.parse(data)
                if (products.length > 0) {

                    let found = products.find(p => p.productId === productData.productId)

                    if (!found) {
                        products.push(productData)
                        let jsonProducts = JSON.stringify(products)
                        fs.writeFile(filePath, jsonProducts, () => {
                            console.log('record added in the existing array');
                        })
                    } else {
                        console.log('product already exists');
                    }
                }
            } else {
                fs.writeFile(filePath, JSON.stringify([productData]), () => {
                    console.log('new array with product record added');
                })
            }
        }
    }
    getRecords(getHandler)
}

writeProduct({ productId: 101, productName: 'dell xps', price: 60000, description: 'new product from dell' })

module.exports = {
    writeProduct
}