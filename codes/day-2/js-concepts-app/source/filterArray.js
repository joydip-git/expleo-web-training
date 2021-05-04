function filterData(input) {
    var result = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] % 2 != 0) {
            result.push(input[i])
        }
    }
    return result;
}
var numbers = [1, 3, 2, 5, 4, 6, 7, 8, 0, 9]
var filtered = filterData(numbers);
console.log(filtered)