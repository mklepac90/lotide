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

const eqObjects = function(object1, object2) {

  if ((Object.keys(object1)).length === (Object.keys(object2)).length) {
    for (let key in object1) {
      if (Array.isArray(object1[key]) === true) {
        return eqArrays(object1[key], object2[key]);
      }
      else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;

};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

}

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(cd, dc);
assertObjectsEqual(ab, cd);