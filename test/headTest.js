// const head = require('../head');
// const assertEqual = require('../assertEqual');

// assertEqual(head([5,6,7]), 5);
// assertEqual(head([8,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "hello");

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", function() {
  it("returns 5 for [5, 6, 7]", function() {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns '5' for ['5']", function() {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", function() {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

});