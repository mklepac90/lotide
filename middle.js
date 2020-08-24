const middle = function(array) {
  if (array.length === 0) {
    return undefined
  };
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

module.exports = middle;


