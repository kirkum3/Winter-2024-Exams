// Return an array without duplicates

const distinct = (data) => {
  const uniqueSet = new Set();
  const resultArray = [];
  data.forEach((item) => {
    if (!uniqueSet.has(item)) {
      uniqueSet.add(item);
      resultArray.push(item);
    }
  });
  return resultArray.filter  (x => typeof x === 'number');
};

module.exports = distinct;
