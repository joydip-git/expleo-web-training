var data = [1, 2, 3, 4, 5];
var filteredArray = data.filter(function (n) {
    return n % 2 == 0;
})
console.log(filteredArray)

var filteredResult = data.filter(function (a) {
    return a > 3;
})

console.log(filteredResult)

data.sort(function (a, b) {
    return b - a;;
})

console.log(data)