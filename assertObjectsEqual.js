const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assersion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // console.log(`🛑🛑🛑Assertion Failed.`);
    return false;
  } else {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        // console.log(`🛑🛑🛑Assertion Failed.`);
        return false
      } 
    }
    return true;
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log(`🛑🛑🛑Assertion Failed: ${object1} !== ${object2}`);
    return false;
  } else {
    for (const i of Object.keys(object1)) {
      if (Array.isArray(object1[i]) && Array.isArray(object2[i])) {
        if (!eqArrays(object1[i], object2[i])) {
          console.log(`🛑🛑🛑Assertion Failed: ${object1} !== ${object2}`);
          return false;
        };
      } else if (object1[i] !== object2[i]) {
        console.log(`🛑🛑🛑Assertion Failed: ${object1} !== ${object2}`);
        return false;
      } 
    }
    console.log(`✅✅✅Assersion Passed: ${object1} === ${object2}`);
    return true;
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

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; 
  eqObjects(actual, expected);
  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3] };
assertObjectsEqual(cd, cd2); // => false
