console.log("start");

setTimeout(function () {
  console.log("SetTimeout");
}, 100);

let response = fetch("https://jsonplaceholder.typicode.com/posts").then(() => {
  console.log("Fetch");
});

console.log("end");
