// // console.log("one");

// // setTimeout(() => {
// //   console.log("Two");
// // }, 5000);

// // console.log("Three");

// const clearThis = setInterval(() => {
//   console.log("Sanup");
// }, 1000);

// setTimeout(() => {
//   clearInterval(clearThis);
// }, 6000);

console.log("start"); //1

setTimeout(() => {
  console.log("setTimeout"); //6
}, 1000);

setImmediate(() => {
  console.log("setImmediate"); //5
});

process.nextTick(() => {
  console.log("process.nextTick"); //3
});

Promise.resolve().then(function () {
  //4
  console.log("Promise");
});
console.log("end"); //2

queueMicrotask(() => {
  console.log("queueMicrotask");
});
