const http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");
const { URL } = require("url");

const port = 8080;

// const server = http.createServer((req, res) => {
//   const url = new URL(req.url, `http://${req.headers.host}`);
//   res.writeHead(200, { "content-type": "text/html" });
//   switch (url.pathname) {
//     case "/":
//       fs.createReadStream("./index.html").pipe(res);
//       break;
//     case "/about":
//       fs.createReadStream("./about.html").pipe(res);
//       break;
//     case "/contact-me":
//       fs.createReadStream("./contact-me.html").pipe(res);
//       break;
//     default:
//       fs.createReadStream("./404.html").pipe(res);
//       break;
//   }
// });

// server.listen(port, () => {
//   console.log(`Server running`);
// });

app.get("/", (req, res) => {
  fs.createReadStream("./index.html").pipe(res);
});

app.get("/about", (req, res) => {
  fs.createReadStream("./about.html").pipe(res);
});

app.get("/contact-me", (req, res) => {
  fs.createReadStream("./contact-me.html").pipe(res);
});

app.use((req, res, next) => {
  const text = fs.readFileSync("./404.html", { encoding: "utf-8" });
  res.status(404).send(text);
});

app.listen(port, () => {
  console.log("running");
});
