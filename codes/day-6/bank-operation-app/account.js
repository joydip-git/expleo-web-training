function account(accHolder, accNo, balance) {
    this.accountHolderName = accHolder;
    this.accountNumber = accNo;
    this.currentBalance = balance;
}

module.exports = {
    account //account:account
}