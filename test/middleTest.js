const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", function() {
  it("should get [3, 4] from [1, 2, 3, 4, 5, 6]", function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it ("should get [4] from [1, 2, 3, 4, 5, 6, 7]", function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });

  it ("should get ['d'] from ['a', 'b', 'c', 'd', 'e', 'f', 'g']", function() {
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['d']);
  });

  it ("should get [] from [1, 2]", function() {
    assert.deepEqual(middle([1, 2]), []);
  });

  it ("should get empty string from single item array", function() {
    assert.deepEqual(middle(['g']), []);
  });
});

// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
// assertArraysEqual(middle(["a", "b", "c", "d", "e", "f", "g"]), ["d"]);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1]), []);