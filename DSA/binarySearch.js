// linear search

// const array=[10,18,17,1,19,8];
// const findValue = 80;

// function linearSearch(array,findValue){
// for(let i=0;i<array.length;i++){
//   if(findValue===array[i]){
//     return `found at index:${i}`;
//   }
// }
// return `not found`;
// }

// console.log(linearSearch(array,findValue));

// Binary search

const array = [1, 8, 10, 17, 18, 19];
const findValue = 8;

function binarySearch(array, findValue) {
  return search(array, findValue, 0, array.length - 1);
}

function search(array, findValue, left, right) {
  if (left > right) {
    return `value not in array`;
  }
  let middle = Math.floor((left + right) / 2);
  if (findValue == array[middle]) {
    return `element at index: ${middle}`;
  }
  if (findValue < array[middle]) {
    return search(array, findValue, left, middle - 1);
  } else {
    return search(array, findValue, middle + 1, right);
  }
}

console.log(binarySearch(array, findValue));
