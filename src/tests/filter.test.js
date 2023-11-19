import filter from '../filter.js';

describe('filter', () => {
  it('should filter by comparing strings', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    expect(filter(array, (value) => value > 'b')).toStrictEqual([
      'c',
      'd',
      'e',
    ]);
    expect(filter(array, (value) => value <= 'b')).toStrictEqual(['a', 'b']);
    expect(filter(array, (value) => value === 'b')).toStrictEqual(['b']);
    expect(filter(array, (value) => value !== 'b')).toStrictEqual([
      'a',
      'c',
      'd',
      'e',
    ]);
  });

  it('should filter by comparing numbers', () => {
    const array = [1, 2, 3, 4, 5];
    expect(filter(array, (value) => value > 2)).toStrictEqual([3, 4, 5]);
    expect(filter(array, (value) => value <= 2)).toStrictEqual([1, 2]);
    expect(filter(array, (value) => value === 2)).toStrictEqual([2]);
    expect(filter(array, (value) => value !== 2)).toStrictEqual([1, 3, 4, 5]);
  });

  it('should filter by comparing bigints', () => {
    const array = [1n, 2n, 3n, 4n, 5n];
    expect(filter(array, (value) => value > 2n)).toStrictEqual([3n, 4n, 5n]);
    expect(filter(array, (value) => value <= 2n)).toStrictEqual([1n, 2n]);
    expect(filter(array, (value) => value === 2n)).toStrictEqual([2n]);
    expect(filter(array, (value) => value !== 2n)).toStrictEqual([
      1n,
      3n,
      4n,
      5n,
    ]);
  });

  it('should filter by comparing booleans', () => {
    const array = [true, true, false, true];
    expect(filter(array, (value) => value)).toStrictEqual([true, true, true]);
    expect(filter(array, (value) => !value)).toStrictEqual([false]);
    expect(filter(array, (value) => value > true)).toStrictEqual([[]]);
    expect(filter(array, (value) => value < true)).toStrictEqual([false]);
  });

  it('should filter by comparing dates', () => {
    const date = new Date(2022, 2, 3);
    const array = [
      new Date(2024, 1, 1),
      new Date(2023, 1, 1),
      date,
      new Date(2021, 1, 1),
      new Date(2020, 1, 1),
    ];
    expect(filter(array, (value) => value > date)).toStrictEqual([
      new Date(2024, 1, 1),
      new Date(2023, 1, 1),
    ]);
    expect(filter(array, (value) => value < date)).toStrictEqual([
      new Date(2021, 1, 1),
      new Date(2020, 1, 1),
    ]);
    expect(filter(array, (value) => value === date)).toStrictEqual([date]);
    expect(filter(array, (value) => value !== date)).toStrictEqual([
      new Date(2024, 1, 1),
      new Date(2023, 1, 1),
      new Date(2021, 1, 1),
      new Date(2020, 1, 1),
    ]);
  });

  it('should filter undefined values', () => {
    const array = [undefined, undefined, undefined];
    expect(filter(array, (value) => value)).toStrictEqual([[]]);
    expect(filter(array, (value) => !value)).toStrictEqual(array);
  });

  it('should filter null values', () => {
    const array = [null, null, null];
    expect(filter(array, (value) => value)).toStrictEqual([[]]);
    expect(filter(array, (value) => !value)).toStrictEqual(array);
  });

  it('should filter NaN values', () => {
    const array = [NaN, NaN, NaN];
    expect(filter(array, (value) => value)).toStrictEqual([[]]);
    expect(filter(array, (value) => !value)).toStrictEqual(array);
  });
});
