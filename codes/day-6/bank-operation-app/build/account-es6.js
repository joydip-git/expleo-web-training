define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.account = account;

  function account(accHolder, accNo, balance) {
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

});