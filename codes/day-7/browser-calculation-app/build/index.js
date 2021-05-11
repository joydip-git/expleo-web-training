define(["./calculation"], function (_calculation) {
  "use strict";

  var addResult = (0, _calculation.add)(12, 3);
  var subResult = (0, _calculation.subtract)(12, 3);
  console.log(addResult);
  console.log(subResult);
});