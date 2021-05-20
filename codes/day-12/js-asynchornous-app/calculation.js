const add = (a, b) => {
    let addResult = a + b;
    return addResult;
}

const subtract = (a, b) => {
    let subResult = a - b;
    return subResult;
}

const multiply = (a, b) => {
    let multiResult = a * b;
    return multiResult;
}

const divide = (a, b) => {
    if (b == 0) {
        throw new Error('denominator can not be zero')
    }
    let divResult = a / b;
    return divResult;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
}