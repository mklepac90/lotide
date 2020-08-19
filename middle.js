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

const middle = function(array) {
  let midArray = [];
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      // array with even number of items
      midArray.push(Math.floor(array.length / 2));
      midArray.push(Math.floor((array.length / 2) + 1));
    } else if (array.length % 2 !== 0) {
      // array with odd number of items
      midArray.push(Math.floor((array.length / 2) + 1));
    }  
  }
  // console.log(midArray);
  return midArray;
};

/*
middle([1]); // []
middle([1, 2]); // []
middle([1,2,3,4,5]); // 3
middle([1,2,3,4,5,6]); // 3, 4
middle([1,2,3,4,5,6,7]); // 4
middle([1,2,3,4,5,6,7,8]); // 4, 5
*/

assertArraysEqual(eqArrays(middle([1,2,3,4,5]), [3]));
assertArraysEqual(eqArrays(middle([1,2,3,4,5,6]), [3,4]));
assertArraysEqual(eqArrays(middle([1,2,3,4,5,6,7]), [4]));
assertArraysEqual(eqArrays(middle([1,2,3,4,5,6,7,8]), [4,5]));
