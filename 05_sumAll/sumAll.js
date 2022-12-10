const sumAll = function(value1, value2) {
    let arrayLength, startingValue;
    if (value1 < 0 || value2 < 0 || typeof value1 !== "number" || typeof value2 !== "number") {
        return "ERROR";
    } else if (value1 > value2) {
        arrayLength = value1;
        startingValue = value2;
    } else {
        arrayLength = value2;
        startingValue = value1;
    }
    const array = [];
    for (let i = startingValue; i <= arrayLength; i++) {
        array.push(i);
    }
    let sum = 0;
    for (const value of array) {
        sum = sum + value;
    }
    console.log(array, sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
