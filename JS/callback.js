setTimeout(() => {
  console.log("setTimeout");
}, 5000);

function a(b) {
  console.log("A");
}

a(function b() {
  console.log("B");
});
