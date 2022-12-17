const add = function(a, b) {
	return (a+b);
};

const subtract = function(a, b) {
	return (a-b);
};

const sum = function(array) {
	let numSum = 0;
  for (let i = 0; i < array.length; i++){
    numSum = numSum + array[i];
  }
  return numSum;
};

const multiply = function(array) {
  let numMultiply = 1;
  for (let i = 0; i < array.length; i++){
    numMultiply = numMultiply * array[i];
  }
  return numMultiply;
};

const power = function(a,b) {
	return (a**b);
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  } else {
    let num = [];
    for (let i= 0; i < a; i++) {
      num.push(a - i);
    }
    return multiply(num);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
//4
// 4 3 2 1