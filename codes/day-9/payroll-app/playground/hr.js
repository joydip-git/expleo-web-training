//import { employee } from "./employee";
const { employee } = require("./employee")

function hr(name, id, basicpay, dapay, hrapay, gratuitypay) {
    employee.call(this, name, id, basicpay, dapay, hrapay)
    this.gratuitypay = gratuitypay;

    this.calculateSalary = () => {
        this.__proto__.calculateSalary.apply(this)
        this.totalsalary += this.gratuitypay;
    }
}

Object.setPrototypeOf(hr.prototype, employee.prototype)

module.exports = { hr }
