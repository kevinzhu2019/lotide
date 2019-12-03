const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assersion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(takeInString) {
  let tempString = takeInString.replace(/\s+/g,"");
  let characterObj = {};
  // console.log(tempString);
    for (const i of tempString) {
      // console.log(i);
      if (characterObj[i]) {
        characterObj[i] += 1;
        // console.log(characterObj);  
      } else {
        characterObj[i] = 1;
        // console.log(characterObj);
      }
      // for (const j in characterObj) {
      //   if (i !== j) {
      //     characterObj[i] = 0;
      //   }
      // }  
    }
    // console.log(characterObj);
    return characterObj;
};
module.exports = countLetters;

let result1 = countLetters("this is a test");

assertEqual(result1.t, 3);
assertEqual(result1.h, 1);
assertEqual(result1.i, 2);
assertEqual(result1.s, 3);
assertEqual(result1.a, 1);
assertEqual(result1.e, 1);