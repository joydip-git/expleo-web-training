//const { strict } = require("yargs");
const yargs = require("yargs");

//1. create a ccommand line command
/*
yargs
    .command({
        command: 'passmesagge',
        describe: 'pass a message through this command',
        handler: function () {
            console.log('got the message');
        }
    })
    .option('message', {
        describe: 'should pass message and that should be of type string',
        type: 'string',
        alias: 'm'
    })
    .demandOption('message', 'message should be used')

// yargs.command({
//     command: '',
//     describe: ''
// })
// console.log(yargs.argv);
*/
const obj = { name: 'anil', id: 100 };
const { name: pName } = obj;

const doSomething = function ({ argv: argObject }) {
    console.log('welcome to Command line tool');
    const obj = {
        message: argObject.message,
        title: argObject.title
    }
    console.log(obj);
    // console.log(argObject.message);
    // console.log(argObject.title);
}

yargs
    .command(
        'passmessage',
        'command to pass a message',
        doSomething
    )
    .option('message', {
        describe: 'should pass message and that should be of type string',
        type: 'string',
        alias: 'm'
    })
    .demandOption('message', 'message should be used')

yargs.parse()

