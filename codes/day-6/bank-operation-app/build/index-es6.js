define(["./account-es6"], function (_accountEs) {
  "use strict";

  var joydipAccount = new _accountEs.account('Joydip', 1234, 10000);
  console.log(joydipAccount);
});