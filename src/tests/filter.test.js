import filter from '../filter.js';

const strArray = ['a', 'b', 'c', 'd', 'e'];
const numArray = [1, 2, 3, 4, 5];
const booleanArray = [true, true, false, true];

const fixedTestDate = new Date(2022, 2, 3);
const dateArray = [
  new Date(2024, 1, 1),
  new Date(2023, 1, 1),
  fixedTestDate,
  new Date(2021, 1, 1),
  new Date(2020, 1, 1),
];

describe('filter', () => {
  it('should filter by comparing strings', () => {
    expect(filter(strArray, (value) => value > 'b')).toStrictEqual([
      'c',
      'd',
      'e',
    ]);
    expect(filter(strArray, (value) => value <= 'b')).toStrictEqual(['a', 'b']);
    expect(filter(strArray, (value) => value === 'b')).toStrictEqual(['b']);
    expect(filter(strArray, (value) => value !== 'b')).toStrictEqual([
      'a',
      'c',
      'd',
      'e',
    ]);
  });

  it('should filter by comparing numbers', () => {
    expect(filter(numArray, (value) => value > 2)).toStrictEqual([3, 4, 5]);
    expect(filter(numArray, (value) => value <= 2)).toStrictEqual([1, 2]);
    expect(filter(numArray, (value) => value === 2)).toStrictEqual([2]);
    expect(filter(numArray, (value) => value !== 2)).toStrictEqual([
      1, 3, 4, 5,
    ]);
  });

  it('should filter by comparing booleans', () => {
    expect(filter(booleanArray, (value) => value)).toStrictEqual([
      true,
      true,
      true,
    ]);
    expect(filter(booleanArray, (value) => !value)).toStrictEqual([false]);
    expect(filter(booleanArray, (value) => value > true)).toStrictEqual([[]]);
    expect(filter(booleanArray, (value) => value < true)).toStrictEqual([
      false,
    ]);
  });

  it('should filter by comparing dates', () => {
    expect(filter(dateArray, (value) => value > fixedTestDate)).toStrictEqual([
      new Date(2024, 1, 1),
      new Date(2023, 1, 1),
    ]);
    expect(filter(dateArray, (value) => value < fixedTestDate)).toStrictEqual([
      new Date(2021, 1, 1),
      new Date(2020, 1, 1),
    ]);

    expect(filter(dateArray, (value) => value == fixedTestDate)).toEqual([
      fixedTestDate,
    ]);
    expect(filter(dateArray, (value) => value != fixedTestDate)).toStrictEqual([
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
