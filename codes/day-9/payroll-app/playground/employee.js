function employee(name, id, basicpay, dapay, hrapay) {
    this.name = name;
    this.id = id;
    this.basicpay = basicpay;
    this.dapay = dapay;
    this.hrapay = hrapay;
    this.totalsalary = 0;
    this.show = () => {
        return `${this.name}, ${this.totalsalary}`
    }
}
employee.prototype.calculateSalary = function () {
    this.totalsalary = this.basicpay + this.dapay + this.hrapay;
}

module.exports = { employee }