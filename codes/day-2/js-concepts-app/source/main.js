function add(firstNumber, secondNumber) {
    var addRes = firstNumber + secondNumber;
    return addRes;
}

function subtract(firstNumber, secondNumber) {
    var subRes = firstNumber - secondNumber;
    return subRes;
}

function getValue(){
    var strValue = prompt('Enter value: ', '0')
    var value = parseInt(strValue)
    return value;
}

function calculate() {
    
    var firstValue = getValue();
    var secondValue =getValue();
    // console.log(typeof firstValue)

    var addResult = add(firstValue, secondValue);
    var subResult = subtract(firstValue, secondValue);

    console.log(addResult)
    console.log(subResult)
}

calculate();