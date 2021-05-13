class employee {
    constructor(name, id, basicpay, dapay, hrapay) {
        this.name = name;
        this.id = id;
        this.basicpay = basicpay;
        this.dapay = dapay;
        this.hrapay = hrapay;
        this.totalsalary = 0;
    }
    show() {
        return `${this.name}, ${this.totalsalary}`
    }
    calculateSalary() {
        this.totalsalary = this.basicpay + this.dapay + this.hrapay;
    }
}
module.exports = { employee }