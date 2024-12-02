// console.log(a); // undefined bcz of hoisting
// var a = 10;

// console.log(b, c); // Reference error as bcz of TDZ

// let b = 9;
// const c = 10;


var n=10;
console.log(first)  // undefined
console.log(second)  // undefined

function square(num){
  var ans=num*num;
  return ans;
}

var first  = square(n);
var second = square(5);

console.log(first)  // 100
console.log(second)  // 25

