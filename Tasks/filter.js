// Filter array by type name
'use strict';
const filterByType = (arr, type) => {
  const indicesToRemove = [];
  arr.forEach((element, index) => {
    if (typeof arr[index] !== type) {
      indicesToRemove.unshift(index);
    }
  });

  indicesToRemove.forEach((index) => arr.splice(index, 1));
  return arr;
};

module.exports = filterByType;
