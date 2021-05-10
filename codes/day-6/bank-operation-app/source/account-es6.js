export function account(accHolder, accNo, balance) {
    this.accountHolderName = accHolder;
    this.accountNumber = accNo;
    this.currentBalance = balance;
}

/**
 * module.exports['default']=account;
 * module.exports={
 *  default:account
 * }
 */