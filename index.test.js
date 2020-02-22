const { forEach, map } = require('./index.js');
const assert = require('assert');

const test = (desc, fn) => {
  console.log(`----`, desc);
  try {
    fn();
  } catch (error) {
    console.log(error.message);
  }
};

test('Test forEach function', () => {
  let sum = 0;
  forEach([1, 2, 3], value => {
    sum += value;
  });
  assert.strictEqual(sum, 6);
});

test('Test map function', () => {
  const result = map([1, 2, 3], value => {
    return value * 2;
  });
  assert.deepStrictEqual(result, [2, 4, 6]);
});
