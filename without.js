const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  let sourceCopy = source.slice();
  for (let item of itemsToRemove) {
    if (sourceCopy.includes(item)) {
      let pos = sourceCopy.indexOf(item);
      sourceCopy.splice(pos, 1);
    }
  }
  return sourceCopy;
};

const words = ["hello", "world", "lighthouse"];
let result = without(words, ["lighthouse", 'hello'])

// console.log(without(words, ["lighthouse"]));
// console.log(without(words, ["lighthouse", 'hello']));
// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log(without(['M', 'i', 'k', 'e'], ['M']));

assertArraysEqual(words, ["hello", "world", "lighthouse"]); // pass
assertArraysEqual(result, words) // fail

module.exports = without;

