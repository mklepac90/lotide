// const assertEqual = require('../assertEqual');
// const tail = require('../tail');


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const result = tail(words);
// console.log(words);
// assertEqual(result[0], 'Lighthouse');
// assertEqual(result[1], 'Labs');

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo, Lighthouse, Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  
});



