'use strict';

// function square(x) {
//   return x * x;
// };

// console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

// Challenge - Use arrow functions
// getFirstName('Mike Smith') => "Mike"
// create regular arrow function
// Create arrow function using shorthand syntax

// create regular arrow function
// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// };

// Create arrow function using shorthand syntax
var getFirstName = function getFirstName(fullName) {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Andrew Mead'));
