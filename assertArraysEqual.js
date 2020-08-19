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

const assertArraysEqual = function(eqArrays) {
  if (eqArrays) {
    console.log('🟢🟢🟢 Assertion Passed: Arrays Equal');
  } else {
    console.log('🔴🔴🔴 Assertion Failed: Arrays Not Equal');
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]));
