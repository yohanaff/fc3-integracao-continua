const { add, substract, multiply, divide } = require('../src/app');

test('add', () => {
    expect(add(1, 2)).toBe(3);
});

test('substract', () => {
    expect(substract(2, 1)).toBe(1);
});

test('multiply', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('divide', () => {
    expect(divide(6, 3)).toBe(2);
});

test('factorial', () => {
    expect(factorial(5)).toBe(120);
});
