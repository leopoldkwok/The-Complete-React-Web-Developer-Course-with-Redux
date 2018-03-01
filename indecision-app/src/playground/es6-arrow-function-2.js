// arguments object - no longer bound with arrow functions

// es5
// const add = function(a, b){
// console.log(arguments);
//   return a + b;
// };
// console.log(add(55, 1, 1001));

// arrow functions
const add = (a, b) =>{
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

// es5

// const user = {
//   name: 'Andrew',
//   cities: ['Philadelhia', 'New York', 'Dublin'],
//   printPlacesLived: function(){
//     console.log(this.name);
//     console.log(this.cities);
    
//     const that = this;

//     this.cities.forEach(function(city){
//       console.log(that.name + ' has lived in ' + city);
//     });
//   }
// };

// user.printPlacesLived();

// es6 version

const user = {
    name: 'Andrew',
    cities: ['Philadelhia', 'New York', 'Dublin'],
    printPlacesLived() { 
      return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };
  
 console.log(user.printPlacesLived());

 // Challenge area

 const mutiplier = {
  // numbers - array of numbers
  numbers: [10, 20, 30],
  // multiplyBy - single number
  multiplyBy: 3,
  // multiply - return a new array where the number have been multiplied
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
 };

 console.log(mutiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]
