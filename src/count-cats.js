module.exports = function countCats(array) {
  let counter = 0;
  for (let value of array) {
    for (let val of value) {
      if (val == "^^") counter++;
    }
  }
  return counter;
};

