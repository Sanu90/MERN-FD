let array = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;

function sumOddNumber(array, i) {
  if (i == array.length - 1) {
    return sum;
  }
  //console.log("sum", sum);

  sum += array[i] % 2 == 1 ? array[i] : 0;

  return sumOddNumber(array, i + 1);
}
console.log(sumOddNumber(array, 0));
