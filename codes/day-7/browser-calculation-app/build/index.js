define(["./calculation", "./person"], function (_calculation, _person) {
  "use strict";

  var addResult = (0, _calculation.add)(12, 3);
  var subResult = (0, _calculation.subtract)(12, 3);
  console.log(addResult);
  console.log(subResult);
  var anilPerson = new _person.person('joydip', 101, 10000);
  console.log(anilPerson.show());
});