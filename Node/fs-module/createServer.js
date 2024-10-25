// create a server using node.js

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let date1 = new Date().toString();
  let date2 = Date.now();
  fs.appendFile("./newFile.txt", `\n ${date1}+ ${date2}`, (err) => {
    if (err) {
      console.log("Error happened", err);
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.write(`${date1} ${date2} is written in log file\n`);
      res.end("Ended");
      console.log("hey");
    }
  });
});

server.listen(1110, () => {
  console.log("Server up");
});
