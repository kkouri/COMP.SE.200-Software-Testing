import map from '../map.js';

const array = [1, 2, 3];
function square(n) {
  return n * n;
}
function getLength(value) {
  return value.length;
}

describe('map', () => {
  it('should iterate array values with given function', () => {
    expect(map([4, 8], square)).toStrictEqual([16, 64]);
    expect(map(array, square)).toStrictEqual([1, 4, 9]);
    expect(map(['foo', 'bar'], getLength)).toStrictEqual([3, 3]);
  });
});

describe('map', () => {
  it('should not modify original array', () => {
    map(array, (n) => n);
    expect(array).toStrictEqual([1, 2, 3]);
  });
});
