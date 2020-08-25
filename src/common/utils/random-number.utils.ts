export const generateRandomNumber = (length: number): number => {
  if (length <= 0) return NaN;

  const minValue = 1 * Math.pow(10, length);
  const maxValue = 9 * Math.pow(10, length);
  return Math.floor(minValue + Math.random() * maxValue);
};
