let array = [1, 2, 3, 4, 5, 6, 7, 9];
let value = 1;

// normal method //

// function binarySearch(array, value) {
//   let left = 0;
//   let right = array.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (value === array[mid]) {
//       console.log("Value found at position");
//       return mid;
//     }
//     if (value > array[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return "not found";
// }

// console.log(binarySearch(array, value));

// using recursion //

function binarySearch(array, value) {
  return search(array, value, 0, array.length - 1);
}

function search(array, value, left, right) {
  if (left > right) {
    return "not found";
  }

  let mid = Math.floor((left + right) / 2);
  if (value === array[mid]) {
    return mid;
  }
  if (value < array[mid]) {
    return search(array, value, 0, mid - 1);
  } else {
    return search(array, value, mid + 1, array.length - 1);
  }
}

console.log(binarySearch(array, value));
