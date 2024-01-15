// Split an array into two parts
'use strict';
let splitArray = (index, array) => {
  const begin = array.slice(0, index);
  const remaining = array.slice(index);

  return [begin, remaining];
};

module.exports = splitArray;
