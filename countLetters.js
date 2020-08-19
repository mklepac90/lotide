const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {

  let letterCount = {};

  for (let letter of string) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  return letterCount;

};

/*
console.log(countLetters("Michael"));
console.log(countLetters("LHL"));
console.log(countLetters("Lighthouse Labs"));
*/

const result2 = countLetters("LHL");
const result3 = countLetters("Lighthouse Labs");
const result4 = countLetters("Lighthouse Labs lighthouse");

assertEqual(result3["s"], 2); // true
assertEqual(result2["L"], 2); // true
assertEqual(result4["l"], 3); // false
assertEqual(result4["l"], 1); // true