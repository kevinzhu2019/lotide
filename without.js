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

const without = function (source, itemsToRemove) {
  let tempArray = source;
  for (let i = 0; i < itemsToRemove.length; i ++) {
    for (let j = 0; j < tempArray.length; j ++) {
      if (itemsToRemove[i] === tempArray[j]) {
        tempArray.splice(j, 1);
      }
    }
  }
  return tempArray;
};

module.exports = without;

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
// assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);

// const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);