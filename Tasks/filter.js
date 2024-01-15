// Filter array by type name
'use strict';
const filterByType = (arr, type) => {
  remove = [];
  for (C of arr) {
    x = arr.indexOf(C);
    if (typeof arr[x] !== type) {
      remove.unshift(x);
    }
  }
  for (x of remove) arr.splice(x, 1);
  return arr;
};

module.exports = filterByType;
