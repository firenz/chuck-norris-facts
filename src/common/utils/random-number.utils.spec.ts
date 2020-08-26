import { generateRandomNumber } from './random-number.utils';

describe('Random Number specs', () => {
  it('should return NaN when given 0 as length', () => {
    const numberLength = 0;
    const number = generateRandomNumber(numberLength);

    expect(number).toBe(NaN);
  });
  it('should return NaN when given a negative number as length', () => {
    const numberLength = -1;
    const number = generateRandomNumber(numberLength);

    expect(number).toBe(NaN);
  });
  it('should return a number of same length as given parameter', () => {
    const numberLength = 4;
    const number = generateRandomNumber(numberLength);
    // First it makes a conversion to string and then it splits
    const digits = ('' + number).split('');

    expect(digits.length).toEqual(numberLength);
  });
});
