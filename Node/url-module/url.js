// URL parse

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const myURL = url.parse(req.url, true);
  console.log("URL-->", myURL);
  console.log("myURL.query", myURL.query);
  console.log("myURL.pathname", myURL.pathname);

  res.end(`Hello, your search results for ${myURL.query.query} is not available now.`);
});

server.listen(1118, () => console.log("Server running"));
