const assert = require('chai').assert;
const tail = require('../tail');
// const assertEqual = require('../tail');

// assertEqual(tail(["Hello", "Lighthouse", "Labs", "aaa", "bbb"]), ["Lighthouse", "Labs", "aaa", "bbb"]);
// assertEqual(result, );
describe("#tail", function() {
  it("return ['Lighthouse', 'Labs', 'aaa', 'bbb'] for ['Hello', 'Lighthouse', 'Labs', 'aaa', 'bbb']", function() {
    const result = tail(['Hello', 'Lighthouse', 'Labs', 'aaa', 'bbb']);
    assert.deepEqual(result, ['Lighthouse', 'Labs', 'aaa', 'bbb']);
  })

  it ("returns [1,2,3] of [4,1,2,3]", function() {
    const result = tail([4, 1, 2, 3]);
    assert.deepEqual(result, [1, 2, 3]);
  })
});