// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assersion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("These 2 arrays are different.");
  } else {
    let flagSwitch = true;
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        flagSwitch = false;
      }
    }
    if (flagSwitch === true) {
      console.log("These 2 arrays are identical");
    } else {
      console.log("These 2 arrays are different.");
    }
    
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("hello", "hello");
// assertEqual(1, 2);

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);

