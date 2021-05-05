//10
//20
//variables/identifiers
// var first = 'JOYDIP'
// first = 10;
// var second = 20;

// console.log(typeof first)
// console.log(first.toLowerCase())
/*
var subFirst = parseInt(prompt('enter value: '));
var subSecond = parseInt(prompt('enter value: '));
var subRes = subtract(subFirst, subSecond)
console.log(subRes)

var addFirst = parseInt(prompt('enter value: '));
var addSecond = parseInt(prompt('enter value: '));
var addRes = add(addFirst, addSecond)
console.log(addRes)

var o;
console.log(o)
console.log(typeof o)

var p = null;
console.log(p)
console.log(typeof p)


//console.log(d) //error
d = 300;
console.log(d) // 300

console.log(a) // undefined
var a = 10;
console.log(a) //10
*/


// var arr = [1, 2, 3, 4]
// var people = [{
//     name:'joy'
// }]

//properties
//behavior

//object-literal syntax
var dellMouseObjectRef =
{
    //value properties
    productName: 'Dell Mouse',
    productCode: "GDN0011",
    productDesc: "new mouse from dell",
    productRating: 4,
    productPrice: 459,
    productImageUrl: "",

    //functional properties
    printInfo: function () {
        return this.productName + ' ' + this.productCode;
    },
    calculateTotalPrice: function (discount) {
        return this.productPrice - discount;
    }
}

var iBallMouseObjectRef =
{
    productName: 'iBall Mouse',
    productCode: "GDN0023",
    productDesc: "new mouse from iBall",
    productRating: 4,
    productPrice: 567,
    productImageUrl: "",

    printInfo: function () {
        return this.productName + ' ' + this.productCode;
    },
    calculateTotalPrice: function (discount) {
        return this.productPrice - discount;
    }
}


var add = function (x, y) {
    console.log(x + y)
}
add(10, 20)
// console.log(typeof dellMouseObjectRef)
// console.log(typeof dellMouseObjectRef.productPrice)
// console.log(typeof dellMouseObjectRef.printInfo)

// console.log(dellMouseObjectRef.productName)
// var info = dellMouseObjectRef.printInfo()
// console.log(info)

// dellMouseObjectRef.calculateTotalPrice(100)

var numbers = [10, 20, 30, '40'];
// console.log(typeof numbers)
// console.log(numbers)

// console.log(dellMouseObjectRef.productName)
// console.log(dellMouseObjectRef['productCode'])
// console.log(numbers[0])
// console.log(dellMouseObjectRef)
// console.log(numbers)

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
for (var propName in dellMouseObjectRef) {
    //console.log(propName)
    console.log(propName + ':' + dellMouseObjectRef[propName])
}
for (var indexNumber in numbers) {
    //console.log(indexOrValue)
    console.log(indexNumber + ':' + numbers[indexNumber])
}

var products = [
    {
        productName: 'Dell Mouse',
        productCode: "GDN0011",
        productDesc: "new mouse from dell",
        productRating: 4,
        productPrice: 459,
        productImageUrl: "",

        //functional properties
        printInfo: function () {
            return this.productName + ' ' + this.productCode;
        },
        calculateTotalPrice: function (discount) {
            return this.productPrice - discount;
        }
    },
    {
        productName: 'iBall Mouse',
        productCode: "GDN0023",
        productDesc: "new mouse from iBall",
        productRating: 4,
        productPrice: 567,
        productImageUrl: "",

        printInfo: function () {
            return this.productName + ' ' + this.productCode;
        },
        calculateTotalPrice: function (discount) {
            return this.productPrice - discount;
        }
    }
];

for (var ind = 0; ind < products.length; ind++) {
    var product = products[ind];
}
