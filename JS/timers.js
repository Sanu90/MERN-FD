// Logs 'Hi' for 5sec and then stops it.
let clearID = setInterval(() => {
  console.log("Hi");
}, 1000);

setTimeout(() => {
  clearInterval(clearID);
  console.log("The end");
}, 6000);
