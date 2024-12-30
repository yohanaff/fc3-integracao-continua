function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function exponentiate(a, b) {
    return a ** b;
}

function factorial(a) {
    if (a === 0) {
        return 1;
    }
    return a * factorial(a - 1);
}

module.exports = {
    add,
    substract,
    multiply,
    divide,
    exponentiate,
    factorial
};
