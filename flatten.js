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

const flatten = function (source) {
  let tempArray = [];
  for (let k = 0; k < source.length; k ++) {
    if (typeof source[k] === "object") {
      for (let l = 0; l < source[k].length; l ++) {
        tempArray.push(source[k][l]);
      }
      
    } else {
      tempArray.push(source[k]);
    }
  }
  return tempArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// console.log(flatten([1, 2, [3, 4], 5, [6]]));