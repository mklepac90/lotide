const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(eqArrays) {
  if (eqArrays) {
    console.log('🟢🟢🟢 Assertion Passed: Arrays Equal');
  } else {
    console.log('🔴🔴🔴 Assertion Failed: Arrays Not Equal');
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
console.log(without(words, ["lighthouse"]));
console.log(without(words, ["lighthouse", 'hello']));
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(['M', 'i', 'k', 'e'], ['M']));
assertArraysEqual(eqArrays(words, ["hello", "world", "lighthouse"]));
