const fs = require("fs");

// synchronous way: write

// let array = [1, 2, 3, 4, 5, 6];

// const evenNumbers = JSON.stringify(array.filter((value) => value % 2 == 0));
// const oddNumbers = JSON.stringify(array.filter((value) => value % 2 == 1));
// console.log(evenNumbers);

// fs.writeFileSync("./newFile.txt", evenNumbers);
// fs.writeFileSync("./newFile.txt", oddNumbers);

// synchronous way: read

// let readFile = fs.readFileSync("./newFile.txt", "utf-8");
// console.log("Read File-->", readFile);

// Asynchronous: write

// let array = [10, 20, 3, 34, 77, 97, 19];

// let oddNumbers = array.filter((value) => {
//   return value % 2 == 1;
// });

// fs.writeFile("./newFile.txt", JSON.stringify(oddNumbers), (error) => {
//   if (error) {
//     console.log("Error happened in writing file");
//   }
//   console.log("File wrote successfully");
// });

// Asynchronous way read

// fs.readFile("./newFile.txt", "utf-8", (error, data) => {
//   if (error) {
//     console.log("error while reading-->", error);
//   } else {
//     console.log("Data is-->", data);
//   }
// });

