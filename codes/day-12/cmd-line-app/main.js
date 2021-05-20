const yargs = require("yargs");
const { getProductById, getProducts, addProduct, deleteProduct, updateProduct } = require('./controller/productController')

//add
yargs.
    command(
        'add',
        'add product related data',
        {
            'name': {
                describe: 'pass name',
                demandOption: true,
                type: 'string',
                alias: 'n'
            },
            'id': {
                describe: 'pass id',
                demandOption: true,
                type: 'number',
                alias: 'i'
            },
            'price': {
                describe: 'pass price',
                type: 'number',
                default: 0,
                alias: 'p'
            },
            'description': {
                describe: 'pass description',
                type: 'string',
                default: '',
                alias: 'd'
            }
        },
        //this callback for something to happen in response to the command and its options
        //yrags passes only the 'argv' property value, because you need only this to extract all the values passed through different options for that command
        addProduct
    )

//update
yargs.
    command(
        'update',
        'update product data given its id',
        {
            'name': {
                describe: 'pass name',
                default: '',
                type: 'string',
                alias: 'n'
            },
            'id': {
                describe: 'pass id',
                demandOption: true,
                type: 'number',
                alias: 'i'
            },
            'price': {
                describe: 'pass price',
                type: 'number',
                default: 0,
                alias: 'p'
            },
            'description': {
                describe: 'pass description',
                type: 'string',
                default: '',
                alias: 'd'
            }
        },
        updateProduct
    )

//delete: id (mandatory)
yargs.
    command(
        'delete',
        'delete a product given its id',
        {
            'id': {
                describe: 'pass id',
                demandOption: true,
                type: 'number',
                alias: 'i'
            }
        },
        deleteProduct
    )

//read-list: no option
yargs.
    command(
        'read-list',
        'displays all product data',
        {},
        getProducts
    )

//read-product: id (mandatory)
yargs.
    command(
        'read-product',
        'displays the product data given its id',
        {
            'id': {
                describe: 'pass id',
                demandOption: true,
                type: 'number',
                alias: 'i'
            }
        },
        getProductById
    )

yargs.parse()