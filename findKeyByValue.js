const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {

  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  }

};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi"); // pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); // pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy"); // fail