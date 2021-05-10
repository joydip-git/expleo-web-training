"use strict";

var _accountEs = _interopRequireDefault(require("./account-es6"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var joydipAccount = new _accountEs["default"]('Joydip', 1234, 10000);
console.log(joydipAccount);