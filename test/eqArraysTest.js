const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(['M', 'i', 'k', 'e'], ['m', 'i', 'k', 'e']), false);
assertEqual(eqArrays(['M', 'i', 'k', 'e'], ['M', 'i', 'k', 'e']), true);
assertEqual(eqArrays(['M', 'i', 'k', 'e'], ['m', 'i', 'k', 'e']), true);
assertEqual(eqArrays([2, 3], [2, 3, 4]), false);