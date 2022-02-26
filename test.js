const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});
test("One euro should be 1.206 dollars", function () {
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2;
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})
test("One dollar should be 106.583 yen", function () {
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(2)
    const expected = 2 * 106.583;
    expect(fromDollarToYen(2)).toBe(213.166);
})
test("One yen should be 0.00625488 pound", function () {
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound(127.9)
    const expected = 127.9 * 0.00625488;
    expect(fromYenToPound(127.9)).toBe(0.8);
})