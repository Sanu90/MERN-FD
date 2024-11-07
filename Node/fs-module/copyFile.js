const fs = require("fs");

fs.copyFile("./one.txt", "./two.txt", (error) => {
  if (error) {
    console.log("error copying file", error);
  } else {
    console.log("File copied");
  }
});
