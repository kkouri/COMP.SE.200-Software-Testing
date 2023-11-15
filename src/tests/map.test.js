import map from '../map.js';

function square(n) {
  return n * n;
}

describe('map', () => {
  it('should iterate array values with given function', () => {
    expect(map([4, 8], square)).toStrictEqual([16, 64]);
  });
});
