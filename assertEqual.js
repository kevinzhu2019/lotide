// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assersion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
//Mode the test code to assertEqualTest.js

module.exports = assertEqual;

//🛑🛑🛑 Assertion Failed: "Lighthouse Labs" !== "Bootcamp"
//✅✅✅ Assertion Passed: 1 === 1
