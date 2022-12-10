const repeatString = function(string, number) {
    if (number < 0) {
        return "ERROR";
    } else {
        let repeated = "";
        for (let i = 0; i < number; i++) {
            repeated = repeated.concat(string)
        }
        return repeated;
    }
};

// Do not edit below this line
module.exports = repeatString;
