define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.person = person;

  function person(name, id, salary) {
    this.personId = id;
    this.personName = name;
    this.personSalary = salary;

    this.show = function () {
      // return this.personName + ', ' + this.personId + ', ' + this.personSalary
      //string interpolation/string template/templated string
      var info = "\n            Name: ".concat(this.personName, ",\n            Id:").concat(this.personId, ",\n            Salary:").concat(this.personSalary, "\n        ");
      return info;
    };
  }
});