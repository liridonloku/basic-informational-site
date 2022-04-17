const http = require("http");
const fs = require("fs");
const { URL } = require("url");

const hostName = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  if (url.pathname === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("./index.html").pipe(res);
  } else if (url.pathname === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("./about.html").pipe(res);
  } else if (url.pathname === "/contact-me") {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("./contact-me.html").pipe(res);
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    fs.createReadStream("./404.html").pipe(res);
  }
});

server.listen(port, hostName, () => {
  console.log(`Server running at https://${hostName}:${port}/`);
});
