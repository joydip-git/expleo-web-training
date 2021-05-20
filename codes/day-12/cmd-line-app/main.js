const yargs = require("yargs");

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
                type: 'number',
                default: '',
                alias: 'd'
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
                type: 'number',
                default: '',
                alias: 'd'
            }
        },
        (args) => {
            console.log(args);
        }
    )

yargs.parse()