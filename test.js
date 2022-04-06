const {sum} = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
})

test ('1 USD = 106,5833333333333 JPY', () => {
    const {fromDollarToYen} = require('./app.js');
    expect(fromDollarToYen(3.5)).toBe(373.04);
})

test('1 EUR = 1.2 USD', () => {
    const {fromEuroToDollar} = require('./app.js');
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test('1 JPY = 0,0062548866301798 GBP', () => {
    const {fromYenToPound} = require('./app.js');
    expect(fromYenToPound(3.5)).toBe(0.0218921032056293);
})