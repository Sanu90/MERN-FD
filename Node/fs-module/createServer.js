// create a server using node.js

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("This is written in browser page");
  res.end("Ended");
  console.log("hey");
});

server.listen(1110, () => {
  console.log("Server up");
});
