//Immediately Invocable Function Expression - IIFE (IIFY)
(function () {
    var addFn = function (a, b) {
        console.log(a + b)
    }
    addFn(10, 20);
})();

(function () {
    addFn();
    var a = 10;
    for (var index = 0; index < 2; index++) {
        console.log(a)
    }
})();