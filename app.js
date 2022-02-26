const sum = (a, b) => {
    return a + b
}


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = function (valueInEuro) {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}
const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 106.583;
    return valueInYen;
}
const fromYenToPound = function (valueInYen) {
    let valueInPound = +(valueInYen * 0.0062548866301798).toFixed(2);
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };