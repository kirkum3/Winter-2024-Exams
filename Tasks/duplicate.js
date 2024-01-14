// Return an array without duplicates
'use strict';
const duplicate = (value, N) => {
  if (N <= 0) {
    return [];
  }
  const result = Array.from({length:N}, () => value);
  return result;
}
module.exports = duplicate;
