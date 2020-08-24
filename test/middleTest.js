// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// assertArraysEqual(middle([1,2,3,4,5]), [3]); // pass
// assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]); // pass
// assertArraysEqual(middle([1,2,3,4,5,6,7]), [4]); // pass
// assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4,5]); // pass
// assertArraysEqual(middle([1,2,3,4,5,6,7,8]), [4,5,6]); // fail

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it ("returns [3]", () => {
    assert.deepEqual(middle([1,2,3,4,5]), [3]);
  });

  it ("returns [4,5]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8]), [4,5]);
  });

  it ("returns undefined", () => {
    assert.deepEqual(middle([], undefined));

  });
});

