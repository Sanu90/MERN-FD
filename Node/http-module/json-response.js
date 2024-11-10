const http = require("http");

const port = 1122;

const server = http.createServer((req, res) => {
  const object = {
    name: "Manohar",
    obj_id: "7pp5gh",
  };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(object));
});

server.listen(port, () => {
  console.log(`Server @${port}`);
});
