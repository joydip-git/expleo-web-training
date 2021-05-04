//var array = [[4, 2, 16], [7, 9, 8], [5, 12, 0]];

var array = new Array(3);

for (var i = 0; i < array.length; i++) {
    array[i] = new Array(3)
}

for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
        array[row][col] = parseInt(prompt('enyter value: ', '0'));
    }
}

var tempArray = [];
for (var x = 0; x < 3; x++) {
    for (var y = 0; y < 3; y++) {
        tempArray.push(array[x][y])
    }
}

//console.log(tempArray)

tempArray.sort(function (a, b) {
    return a - b;
})

var final = new Array(tempArray.length);
var middlePos = parseInt(final.length / 2);
final[middlePos] = tempArray[0];

//your job

