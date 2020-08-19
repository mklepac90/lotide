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

const letterPositions = function(sentence) {
  
  let results = {};
  
  for (let letter of sentence) {
    if (letter !== ' ') {
      results[letter] = [];
      for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === letter) {
          results[letter].push(i);
        }
      }
    }
  }
    

  return results;

};

let result1 = letterPositions("hello");
assertArraysEqual(eqArrays(letterPositions("hello").h, [0])); // pass
assertArraysEqual(eqArrays(result1['h'], [0])); // pass
assertArraysEqual(eqArrays(result1['h'], [1])); // fail
assertArraysEqual(eqArrays(result1['e'], [1])); // pass
assertArraysEqual(eqArrays(result1['l'], [2, 3])); // pass
assertArraysEqual(eqArrays(result1['o'], [4])); // pass