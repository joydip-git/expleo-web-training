// const allArgs = process.argv;
// const args = allArgs.slice(2)
// // args.forEach((element) => {
// //     const keyvalue = element.split('=')
// //     keyvalue.forEach(e => console.log(e))
// // });
// console.log(args[0].split('=')[1])

const readlineModule = require('readline')
const readline = readlineModule.createInterface({
    input: process.stdin,
    output: process.stdout
})

const inquirer = require('inquirer')
// let choice = undefined;
// readline.question('enter choice: ', input => {
//     choice = input
//     console.log(choice)
//     readline.close();
// })

const questions = [{
    type: 'input',
    name: 'name',
    message: 'enter name: '
},
{
    type: 'input',
    name: 'id',
    message: 'enter id: '
}, {
    type: 'input',
    name: 'basicpay',
    message: 'enter basic: '
},
{
    type: 'input',
    name: 'dapay',
    message: 'enter da: '
},
{
    type: 'input',
    name: 'hrapay',
    message: 'enter hra: '
},
{
    type: 'input',
    name: 'incentivepay',
    message: 'enter incentive: '
}
]

inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers)
    })
