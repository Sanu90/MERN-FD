const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.params);

  res.end(`This is ${req.url}`);
  // res.s
  //   console.log("req", req.url);
  //   if (req.url === "/") {
  //     //res.write("hey\n");
  //     res.end(`This is Home page, ${req.statusCode}`);
  //   } else {
  //     res.end(`This is ${req.url}`);
  //   }
});

server.listen(1000, () => {
  console.log("Server @1000");
});
