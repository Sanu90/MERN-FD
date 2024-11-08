const fs = require("fs");

// fs.writeFile("./createNewFile.txt", "Hello Node.js", "utf-8", (err) => {
//   if (err) {
//     console.log("error in creating file", err);
//   } else {
//     console.log("file created");
//   }
// });

// fs.copyFile("./createNewFile.txt", "./create1.txt", (error) => {
//   if (error) {
//     console.log("error while copying file", error);
//   } else {
//     console.log("file copied successfully");
//   }
// });

fs.unlink("./createObj.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file deleted");
  }
});
