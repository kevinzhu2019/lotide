// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual.length === expected.length) {
    let swi = true;
    for (let j = 0; j < actual.length; j ++) {
      if (actual[j] !== expected[j]) {
        swi = false;
      }
    }
    if (swi === true) {
      console.log(`✅✅✅Assersion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
    }
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(tailArray) {
  let tempArray = [];
  for (let i = 1; i < tailArray.length; i ++) {
    tempArray.push(tailArray[i]);
  }
  return tempArray;
};

// TEST CODE
/*assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("hello", "hello");
assertEqual(1, 2);
*/
//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const result = tail(["Hello", "Lighthouse", "Labs", "aaa", "bbb"]);
assertEqual(result, ["Lighthouse", "Labs", "aaa", "bbb"]);