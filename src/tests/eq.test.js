import eq from '../eq.js';

const stringA = 'a';
const stringB = 'b';

const numberA = 1;
const numberB = 2;

const bigIntA = BigInt(1);
const bigIntB = BigInt(2);

const booleanA = true;
const booleanB = false;

const symbolA = Symbol('a');
const symbolB = Symbol('b');

const objectA = { a: 1 };
const objectB = { a: 2 };
const objectC = { c: 2 };
const objectD = { d: 1 };

const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

const dateA = new Date('2023-01-01');
const dateB = new Date('2023-01-02');
const dateC = new Date('2023-02-01');
const dateD = new Date('2024-01-01');

const stringDataType = new String(1);
const numberDataType = new Number(1);
const bigIntDataType = BigInt(1);
const booleanDataType = new Boolean(1);
const symbolDataType = Symbol(1);
const objectDataType = new Object(1);
const arrayDataType = new Array(1);
const dateDataType = new Date(1);

describe('eq', () => {
  it('should determine that strings are equal', () => {
    expect(eq(stringA, stringA)).toBe(true);
  });

  it('should determine that strings are not equal', () => {
    expect(eq(stringA, stringB)).toBe(false);
  });

  it('should determine that numbers are equal', () => {
    expect(eq(numberA, numberA)).toBe(true);
  });

  it('should determine that numbers are not equal', () => {
    expect(eq(numberA, numberB)).toBe(false);
  });

  it('should determine that bigInts are equal', () => {
    expect(eq(bigIntA, bigIntA)).toBe(true);
  });

  it('should determine that bigInts are not equal', () => {
    expect(eq(bigIntA, bigIntB)).toBe(false);
  });

  it('should determine that booleans are equal', () => {
    expect(eq(booleanA, booleanA)).toBe(true);
  });

  it('should determine that booleans are not equal', () => {
    expect(eq(booleanA, booleanB)).toBe(false);
  });

  it('should determine that symbols are equal', () => {
    expect(eq(symbolA, symbolA)).toBe(true);
  });

  it('should determine that symbols are not equal', () => {
    expect(eq(symbolA, symbolB)).toBe(false);
  });

  it('should determine that objects are equal', () => {
    expect(eq(objectA, objectA)).toBe(true);
  });

  it('should determine that objects are not equal', () => {
    expect(eq(objectA, objectB)).toBe(false);
    expect(eq(objectA, objectC)).toBe(false);
    expect(eq(objectA, objectD)).toBe(false);
  });

  it('should determine that arrays are equal', () => {
    expect(eq(arrayA, arrayA)).toBe(true);
  });

  it('should determine that arrays are not equal', () => {
    expect(eq(arrayA, arrayB)).toBe(false);
  });

  it('should determine that dates are equal', () => {
    expect(eq(dateA, dateA)).toBe(true);
  });

  it('should determine that dates are not equal', () => {
    expect(eq(dateA, dateB)).toBe(false);
    expect(eq(dateA, dateC)).toBe(false);
    expect(eq(dateA, dateD)).toBe(false);
  });

  it('should determine that undefineds are equal', () => {
    expect(eq(undefined, undefined)).toBe(true);
  });

  it('should determine that nulls are equal', () => {
    expect(eq(null, null)).toBe(true);
  });

  it('should determine that nans are equal', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

  it('should determine that datatypes are loose equal', () => {
    expect(eq(stringDataType, bigIntDataType)).toBe(true);
    expect(eq(numberDataType, bigIntDataType)).toBe(true);
    expect(eq(bigIntDataType, booleanDataType)).toBe(true);
    expect(eq(bigIntDataType, objectDataType)).toBe(true);

    expect(eq(undefined, null)).toBe(true);
  });

  it('should determine that datatypes are not equal', () => {
    expect(eq(stringDataType, numberDataType)).toBe(false);
    expect(eq(stringDataType, booleanDataType)).toBe(false);
    expect(eq(stringDataType, symbolDataType)).toBe(false);
    expect(eq(stringDataType, objectDataType)).toBe(false);
    expect(eq(stringDataType, arrayDataType)).toBe(false);
    expect(eq(stringDataType, dateDataType)).toBe(false);
    expect(eq(stringDataType, undefined)).toBe(false);
    expect(eq(stringDataType, null)).toBe(false);
    expect(eq(stringDataType, NaN)).toBe(false);

    expect(eq(numberDataType, booleanDataType)).toBe(false);
    expect(eq(numberDataType, symbolDataType)).toBe(false);
    expect(eq(numberDataType, objectDataType)).toBe(false);
    expect(eq(numberDataType, arrayDataType)).toBe(false);
    expect(eq(numberDataType, dateDataType)).toBe(false);
    expect(eq(numberDataType, undefined)).toBe(false);
    expect(eq(numberDataType, null)).toBe(false);
    expect(eq(numberDataType, NaN)).toBe(false);

    expect(eq(bigIntDataType, symbolDataType)).toBe(false);
    expect(eq(bigIntDataType, arrayDataType)).toBe(false);
    expect(eq(bigIntDataType, dateDataType)).toBe(false);
    expect(eq(bigIntDataType, undefined)).toBe(false);
    expect(eq(bigIntDataType, null)).toBe(false);
    expect(eq(bigIntDataType, NaN)).toBe(false);

    expect(eq(booleanDataType, symbolDataType)).toBe(false);
    expect(eq(booleanDataType, objectDataType)).toBe(false);
    expect(eq(booleanDataType, arrayDataType)).toBe(false);
    expect(eq(booleanDataType, dateDataType)).toBe(false);
    expect(eq(booleanDataType, undefined)).toBe(false);
    expect(eq(booleanDataType, null)).toBe(false);
    expect(eq(booleanDataType, NaN)).toBe(false);

    expect(eq(symbolDataType, objectDataType)).toBe(false);
    expect(eq(symbolDataType, arrayDataType)).toBe(false);
    expect(eq(symbolDataType, dateDataType)).toBe(false);
    expect(eq(symbolDataType, undefined)).toBe(false);
    expect(eq(symbolDataType, null)).toBe(false);
    expect(eq(symbolDataType, NaN)).toBe(false);

    expect(eq(objectDataType, arrayDataType)).toBe(false);
    expect(eq(objectDataType, dateDataType)).toBe(false);
    expect(eq(objectDataType, undefined)).toBe(false);
    expect(eq(objectDataType, null)).toBe(false);
    expect(eq(objectDataType, NaN)).toBe(false);

    expect(eq(arrayDataType, dateDataType)).toBe(false);
    expect(eq(arrayDataType, undefined)).toBe(false);
    expect(eq(arrayDataType, null)).toBe(false);
    expect(eq(arrayDataType, NaN)).toBe(false);

    expect(eq(dateDataType, undefined)).toBe(false);
    expect(eq(dateDataType, null)).toBe(false);
    expect(eq(dateDataType, NaN)).toBe(false);

    expect(eq(undefined, NaN)).toBe(false);

    expect(eq(null, NaN)).toBe(false);
  });
});
