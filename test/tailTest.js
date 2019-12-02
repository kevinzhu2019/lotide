// const tail = require('../tail');
const assertEqual = require('../tail');

const tail = function(tailArray) {
  let tempArray = [];
  for (let i = 1; i < tailArray.length; i ++) {
    tempArray.push(tailArray[i]);
  }
  return tempArray;
};

assertEqual(tail(["Hello", "Lighthouse", "Labs", "aaa", "bbb"]), ["Lighthouse", "Labs", "aaa", "bbb"]);
// assertEqual(result, );