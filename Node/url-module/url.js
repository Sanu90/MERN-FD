// // URL parse

// const http = require("http");
// const url = require("url");

// const server = http.createServer((req, res) => {
//   console.log("req", req.url, req.upgrade);

//   //   const myURL = url.parse(req.url, true);
//   //   console.log("URL-->", myURL);
//   //   console.log("myURL.query", myURL.query);
//   //   console.log("myURL.pathname", myURL.pathname);

//   res.end(
//     "Hello"
//     // `Hello, your search results for ${myURL.query.q} is not available now.`
//   );
// });

// server.listen(1118, () => console.log("Server running"));

//using URL class//
const { URL } = require("url");
const myURL = new URL("http://example.com/path?product=book&price=20");
console.log("myURL-->", myURL);
console.log(myURL.protocol);
console.log(myURL.host);
console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.searchParams.get("product"));
console.log(myURL.searchParams.get("price"));

// using parse method //
// const url = require("url");
// const myURL = url.parse("http://example.com/path?product=book&price=20", true);
// console.log(myURL.protocol);
// console.log("\n", myURL.hostname);
// console.log("\n", myURL.pathname);
// console.log("\n", myURL.search);
// console.log("\n", myURL.query.product, "--->", myURL.query.price);
