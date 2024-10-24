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

// Append file synchronous
let currentDate = new Date();
let id = Math.floor(1000 + Math.random() * 9999);
let val = fs.appendFileSync("./newFile.txt", `\n${currentDate}--> ${id}\n`); // \n is used to append data to next line. Else it will be continued where the old data is.

// This is used  to delete a file
// fs.unlink("./newFile.txt", (err) => {
//   if (err) {
//     console.log("error while deleting");
//   } else {
//     console.log("file deleted successfully");
//   }
// });
