// import { employee } from "./employee";
const { employee } = require("./employee")
function developer(name, id, basicpay, dapay, hrapay, incentivepay) {
    employee.call(this, name, id, basicpay, dapay, hrapay)
    this.incentivepay = incentivepay;

    this.calculateSalary = () => {
        this.__proto__.calculateSalary.apply(this);
        this.totalsalary += this.incentivepay;
    }
}

Object.setPrototypeOf(developer.prototype, employee.prototype)

module.exports = { developer }
