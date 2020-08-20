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
assertArraysEqual(letterPositions("hello").h, [0]); // pass
assertArraysEqual(result1['h'], [0]); // pass
assertArraysEqual(result1['h'], [1]); // fail
assertArraysEqual(result1['e'], [1]); // pass
assertArraysEqual(result1['l'], [2, 3]); // pass
assertArraysEqual(result1['o'], [4]); // pass
