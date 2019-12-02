// const assertArraysEqual = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     console.log("These 2 arrays are different.");
//   } else {
//     let flagSwitch = true;
//     for (let i = 0; i < array1.length; i ++) {
//       if (array1[i] !== array2[i]) {
//         flagSwitch = false;
//       }
//     }
//     if (flagSwitch === true) {
//       console.log("These 2 arrays are identical");
//     } else {
//       console.log("These 2 arrays are different.");
//     }
    
//   }
// };

const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        return false
      } 
    }
    return true;
  }
};

const middle = function(array) {
  let midArray = [];
  if (array.length <= 2) {
    return midArray;
  } else if (array.length % 2 === 0) {
    midArray.push(array[(array.length / 2) - 1]);
    midArray.push(array[array.length / 2]);
    // console.log(midArray);
    return midArray;
  } else if (array.length % 2 !== 0) {
    let midIndex = Math.floor(array.length / 2);
    midArray.push(array[midIndex]);
    // console.log(midIndex);
    return midArray;
  }
};

module.exports = middle;

