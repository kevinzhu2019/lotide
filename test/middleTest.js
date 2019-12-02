const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// middle([1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// console.log(middle([1, 2, 3, 4, 5, 6, 7]))
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle(["a", "b", "c", "d", "e", "f", "g"]), ["d"]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);