"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _this = void 0;

var account = function account(accHolder, accNo, balance) {
  _this.accountHolderName = accHolder;
  _this.accountNumber = accNo;
  _this.currentBalance = balance;
};

var _default = account;
/**
 * module.exports['default']=account;
 * module.exports={
 *  default:account
 * }
 */

exports["default"] = _default;