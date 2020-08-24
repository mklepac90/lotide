const assertEqual = require('../assertEqual');
const tail = require('../tail');


const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
console.log(words);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');



