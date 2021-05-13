const { employee } = require("./employeecls")

class hr extends employee {
    constructor(name, id, basicpay, dapay, hrapay, gratuitypay) {
        super(name, id, basicpay, dapay, hrapay)
        this.gratuitypay = gratuitypay;
    }

    calculateSalary() {
        super.calculateSalary()
        this.totalsalary += this.gratuitypay;
    }
}

module.exports = { hr }