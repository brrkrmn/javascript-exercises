const fibonacci = function(targetIndex) {
    const array = [1, 1];
    if (targetIndex<0) {
        return "OOPS";
    };
    for (let i = 2; i <= targetIndex; i++) {
        array.push(array[array.length-1] + array[array.length-2]);
    }
    return(array[targetIndex-1]);
}

// Do not edit below this line
module.exports = fibonacci;
