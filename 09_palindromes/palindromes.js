const palindromes = function (string) {
    string = string.toLowerCase();
    string = string.replace(/\W/g, '');
    let stringArray = string.split("");
    if (stringArray.join('') === stringArray.reverse().join('')){
        return true;
    } else {
        return false;
    }
    };
    

// Do not edit below this line
module.exports = palindromes;
