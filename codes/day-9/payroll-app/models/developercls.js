const { employee } = require("./employeecls")

class developer extends employee {
    constructor(name, id, basicpay, dapay, hrapay, incentivepay) {
        super(name, id, basicpay, dapay, hrapay)
        this.incentivepay = incentivepay;
    }
    calculateSalary() {
        super.calculateSalary()
        this.totalsalary += this.incentivepay;
    }
}
module.exports = { developer }