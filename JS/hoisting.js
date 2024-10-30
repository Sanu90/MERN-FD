console.log(a); // undefined bcz of hoisting
var a = 10;

console.log(b, c); // Reference error as bcz of TDZ

let b = 9;
const c = 10;
