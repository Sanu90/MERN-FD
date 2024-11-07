const http = require("http");

const a = http.createServer((req, res) => {
  console.log("req", req.url);
  if (req.url === "/") {
    //res.write("hey\n");
    res.end("This is Home page");
  } else {
    res.end(`This is ${req.url}`);
  }
});

a.listen(1000, () => {
  console.log("Server @1000");
});
