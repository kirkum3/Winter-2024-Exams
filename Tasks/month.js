// Get month number
'use strict';
const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonthIndex = (inputString) => {
  const lowercasedInput = inputString.toLowerCase();
  const index = months.findIndex(month => lowercasedInput.startsWith(month));
  return index !== -1 ? index + 1 : -1;
};

module.exports = getMonthIndex;
