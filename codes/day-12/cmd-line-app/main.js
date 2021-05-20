const yargs = require("yargs");

yargs.
    command(
        'add',
        'add product related data',
        {
            'name': {
                describe: 'pass name',
                demandOption: true,
                type: 'string'
            },
            'id': {
                describe: 'pass id',
                demandOption: true,
                type: 'number'
            },
            'price': {
                describe: 'pass price',
                type: 'number',
                default: 0
            },
            'description': {
                describe: 'pass description',
                type: 'number',
                default: ''
            }
        },
        (args) => {
            console.log(args);
        }
    )

yargs.
    command(
        'update',
        'update product related data',
        {
            'name': {
                describe: 'pass name',
                default: '',
                type: 'string'
            },
            'id': {
                describe: 'pass id',
                demandOption: true,
                type: 'number'
            },
            'price': {
                describe: 'pass price',
                type: 'number',
                default: 0
            },
            'description': {
                describe: 'pass description',
                type: 'number',
                default: ''
            }
        },
        (args) => {
            console.log(args);
        }
    )

yargs.parse()