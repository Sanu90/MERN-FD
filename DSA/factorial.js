let number = 5;

const findFactorial = (number) => {
  if (number < 2) {
    return 1;
  }
  return number * findFactorial(number - 1);
};
console.log(findFactorial(number));
