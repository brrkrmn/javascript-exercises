const reverseString = function(string) {
    stringCharacters = string.split("");
    const reversedString = [];
    for (let i = 1; i <= stringCharacters.length; i++) {
        reversedString.push(stringCharacters[stringCharacters.length - i]);
    }
    return reversedString.join("");
};

// Do not edit below this line
module.exports = reverseString;
