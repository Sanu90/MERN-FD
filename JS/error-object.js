// let err1 = Error("Created using a function call!");
// let err2 = new Error("Created via the new keyword!");

// console.log(err1);
// console.log(err2);

try {
  const error = new Error("Oops..");
  //error.name = "Sanup"; // explicitly changing error name
  //error.message = "podappa"; // explicitly changing error message
  throw error;
} catch (e) {
  console.error(`${e.name}: ${e.message}`);
}
