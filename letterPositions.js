const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log("Fail");
  } else {
    let flagSwitch = true;
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        flagSwitch = false;
      }
    }
    if (flagSwitch === true) {
      console.log("Pass");
    } else {
      console.log("Fail");
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

const letterPositions = function(sentence) {
  const results = {};
  let characterObj = {};
  // logic to update results here
  let tempString = sentence.replace(/\s+/g,"");
  let tempArray = tempString.split("");
  // console.log(tempArray);
  for (const i in tempArray) {
    // console.log(i);
    if (characterObj[tempArray[i]]) {
      characterObj[tempArray[i]].push(Number(i));
    } 
    else {
      characterObj[tempArray[i]] = [];
      characterObj[tempArray[i]].push(Number(i));
    }
  }
  // for (let i = 0; i < tempArray.length; i ++) {
  //   for (const j of characterObj) {
  //     if (characterObj[tempArray[i]]) {
  //       characterObj[tempArray[i]].push(i);
  //     }
  //   }
  // }
  return characterObj;
  // console.log(characterObj);
};

// console.log(letterPositions("hello"));
let results1 = letterPositions("hello");
// console.log(results1);
assertArraysEqual(results1.h, [0]);
assertArraysEqual(results1.e, [1]);
assertArraysEqual(results1.l, [2, 3]);
// assertArraysEqual(results1.h, [0]);
assertArraysEqual(results1.o, [4]);

