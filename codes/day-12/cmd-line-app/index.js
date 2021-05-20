const yargs = require("yargs");

let addCommand = yargs.
    command(
        'add',
        'add product related data',
        () => { }
        // ({ argv }) => {
        //     console.log(argv);
        //     // let product = {
        //     //     productId: argv.id,
        //     //     productName: argv.name,
        //     //     price: argv.price,
        //     //     description: argv.description
        //     // }
        //     let product = new product()
        // }
    )

addCommand.options({
    'name': {
        describe: 'pass name of the product',
        alias: 'n',
        type: 'string',
        demandOption: true
    },
    'id': {
        describe: 'pass id of the product',
        alias: 'i',
        type: 'number',
        demandOption: true
    },
    'price': {
        describe: 'pass price of the product',
        alias: 'p',
        type: 'number',
        default: 0
    },
    'description': {
        describe: 'pass description of the product',
        alias: 'd',
        type: 'string',
        default: ''
    }
})
// .demandOption(['name', 'id', 'price', 'description'], 'name, id, price and description - all are mandatory to pass')

yargs
    .command(
        'update',
        'update product related data',
        (args) => {
            console.log(args.argv);
        }
        // ({ argv }) => {
        //     console.log(argv);
        //     // let product = {
        //     //     productId: argv.id,
        //     //     productName: argv.name,
        //     //     price: argv.price,
        //     //     description: argv.description
        //     // }
        //     let product = new product()
        // }
    )
    .options({
        'name': {
            describe: 'pass name of the product',
            alias: 'n',
            type: 'string',
            default: ''
        },
        'id': {
            describe: 'pass id of the product',
            alias: 'i',
            type: 'number',
            demandOption: true
        },
        'price': {
            describe: 'pass price of the product',
            alias: 'p',
            type: 'number',
            default: 0
        },
        'description': {
            describe: 'pass description of the product',
            alias: 'd',
            type: 'string',
            default: ''
        }
    })

yargs.parse()