const removeFromArray = function(array, ...values) {
    for (const value of values) {
        let valueIndex = array.indexOf(value);
        if (valueIndex == -1) {
            continue;
        } else {
            array.splice(valueIndex, 1);
        }
    }
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;