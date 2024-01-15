// Filter array by type name
'use strict';
const filterByType = (arr, type) => {
  const indicesToRemove = [];
  for (element of arr) {
    index = arr.indexOf(element);
    if (typeof arr[index] !== type) {
      remove.unshift(x);
    }
  }
  for (index of indicesToRemove) arr.splice(index, 1);
  return arr;
};

module.exports = filterByType;
