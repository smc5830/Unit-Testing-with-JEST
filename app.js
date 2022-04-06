const sum = (a,b) => {
    return a+b
};

console.log(sum(7,3));
module.exports = {sum};

let oneEuroIs = {
    "JPY": 127.9, //japan yen
    "USD": 1.2, //us dollar
    "GBP": 0.8, //british pound
};

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 106.5833333333333;
    return Number(valueInYen.toFixed(2));
};
 
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
};

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0062548866301798;
    return valueInPound;
};

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};