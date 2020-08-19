const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
const abc = { a: "1", b: "2", c: "3"};
const yz = { y: "3", z: "4"};
const zy = { z: "3", y: "4"};

// console.log(eqObjects(ab, ba));
// console.log(eqObjects(ab, abc));
// console.log(eqObjects(yz, zy));


assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual((eqObjects(cd, dc)), true); // => true
assertEqual((eqObjects(cd, cd2)), false); // => false
