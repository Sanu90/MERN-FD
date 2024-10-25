// // // const add = require("./arithmetic");

// // // import { add, sub } from "./arithmetic.js";

// // const fs = require("fs");

// // // console.log(add(4, 5));
// // // console.log(sub(90, 90));

// // console.log(fs);

// const fs = require("fs");

// const employeeData = [
//   {
//     name: "srikhar",
//     id: "E12P",
//     age: 43,
//     contact: 9858745108,
//     Gratuity: true,
//   },
//   {
//     name: "girija",
//     id: "Z20P",
//     age: 30,
//     contact: 9855045108,
//     Gratuity: false,
//   },
//   {
//     name: "deepak",
//     id: "J99O",
//     age: 33,
//     contact: 9002575108,
//     Gratuity: false,
//   },
//   {
//     name: "Housad",
//     id: "MM88",
//     age: 28,
//     contact: 9812121108,
//     Gratuity: false,
//   },
// ];

// let ageLessThan30 = employeeData.filter((value) => {
//   return value.age < 30;
// });
// let ageEqualTo30 = employeeData.filter((value) => {
//   return value.age == 30;
// });
// let nameStartsWithD = employeeData.filter((value) => {
//   return value.name.includes("deepak");
// });

// //console.log("ageLessThan30-->", ageLessThan30);

// fs.writeFile("./createObj.txt", JSON.stringify(ageLessThan30), (error) => {
//   if (error) {
//     console.log("error-->", error);
//   } else {
//     console.log("Data written successfully");
//   }
// });

// fs.appendFile(
//   "./createObj.txt",
//   `\n ${JSON.stringify(ageEqualTo30)}\n ${JSON.stringify(nameStartsWithD)}`,
//   (error) => {
//     if (error) {
//       console.log("error", error);
//     } else {
//       console.log("data appended");
//     }
//   }
// );

const os = require("os");
console.log(os.cpus().length);
