const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assersion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
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
}

assertEqual(eqArrays(results1, [1, 2, 5, 7, 2]), true);
assertEqual(eqArrays(results2, ["I've", 'been', 'to', 'Hollywood']), true);
