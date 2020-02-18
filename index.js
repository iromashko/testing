module.exports = {
  forEach(array, fn) {
    for (let index in array) {
      fn(array[index], index);
    }
  },
  map(array, fn) {
    for (let i = 0; i < array.length; i++) {
      array[i] = fn(array[i]);
    }
    return array;
  }
};
