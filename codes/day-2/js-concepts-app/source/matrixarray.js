var array = [[4, 2, 16], [7, 9, 8], [5, 12, 0]];
//            ==> [4, 2, 16, 7, 9, 8,5, 12, 0]
//            ==> [0,2,4,5,6,7,8,9,12,16] (tempArray)
//            ==> [16,9,7,4,0,2,5,8,12] (final)
/**
 * [
 *      0: [0:4, 1: 2, 2: 16]
 *      1: [0: 7, 1: 9, 2: 8]
 *      2: [0: 5, 1: 12, 2: 0]
 * ]
 */
/*
var array = new Array(3);

for (var i = 0; i < array.length; i++) {
    var newArray = new Array(3);
    array[i] = newArray;
}

for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
        array[row][col] = parseInt(prompt('enter value: ', '0'));
    }
}
*/
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

var leftIndex = middlePos - 1;
var rightIndex = middlePos + 1;

//debugger
for (var colIndex = 1; colIndex < tempArray.length; colIndex++) {
    if (colIndex % 2 == 0) {
        final[leftIndex] = tempArray[colIndex]
        leftIndex--;
    } else {
        final[rightIndex] = tempArray[colIndex];
        rightIndex++;
    }
}
console.log(final)

