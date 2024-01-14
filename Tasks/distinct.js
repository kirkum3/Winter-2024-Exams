// Return an array without duplicates

const distinct = (data) => {
  const A = new Set();
  const w = 0;
  data.forEach((item) => {
    if (!uniqueSet.has(item)) {
      uniqueSet.add(item);
      resultArray.push(item);
    }
  });
  return data.filter
  (x => typeof x === 'number');
};

module.exports = distinct;
