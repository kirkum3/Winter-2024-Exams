// Get day number
'use strict';

 const Days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (s) => {
  for (let i= 0; i < Days.length; i++) {
    if (s.startsWith(Days[i])) {
      return i + 1;
    }
  }
  return -1;
};
module.exports = parseDay;
