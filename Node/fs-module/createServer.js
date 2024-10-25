// // create a server using node.js

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   console.log("hey", req.url);

//   let date1 = new Date().toString();
//   let date2 = Date.now();
//   if (req.url == "/") {
//     fs.appendFile("./newFile.txt", `\n ${date1}+ ${date2}`, (err) => {
//       if (err) {
//         console.log("Error happened", err);
//       } else {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.write(`${date1} ${date2} is written in log file\n`);
//         res.end("Ended");
//         console.log("hey");
//       }
//     });
//   } else {
//     res.end("Sorry, Log is not maintained for this path.");
//   }
// });

// server.listen(1110, () => {
//   console.log("Server up");
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("hey", req.url);
//   const url = req.url;
//   console.log(url.length);

//   if ((req, url == "/")) {
//     res.end("This is home page");
//   } else {
//     res.end(`This is ${url} page`);
//   }

//   //   res.write("Hello\n");
//   //   res.end("End");
// });

// server.listen(1990, () => console.log("server @1990"));

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(1);
  if (req.url == "/") {
    fs.readFile("./newFile.txt", "utf-8", (err, data) => {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("2, data is-->", data);
        res.end("Data is read");
        console.log(4);
      }
    });
  }
  console.log(3);
});

server.listen(2299, () => {
  console.log("Server up");
});
