// FUNCTION IMPLEMENTATION
const assertEqual = function(tail, expected) {
  if (tail.length === expected.length) {
    let swi = true;
    for (let j = 0; j < tail.length; j ++) {
      if (tail[j] !== expected[j]) {
        swi = false;
      }
    }
    if (swi === true) {
      console.log(`✅✅✅Assersion Passed: ${tail} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${tail} !== ${expected}`);
    }
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${tail} !== ${expected}`);
  }
};

const tail = function(tailArray) {
  let tempArray = [];
  for (let i = 1; i < tailArray.length; i ++) {
    tempArray.push(tailArray[i]);
  }
  return tempArray;
};

// console.log(tail(['Hello', 'Lighthouse', 'Labs', 'aaa', 'bbb']));
// const assertEqual = require('./assertEqual');

// const tail = function(tailArray) {
//   let tempArray = [];
//   for (let i = 1; i < tailArray.length; i ++) {
//     tempArray.push(tailArray[i]);
//   }
//   return tempArray;
// };

// TEST CODE
/*assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual(1, 2);
*/
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// module.exports = tail;
module.exports = tail;