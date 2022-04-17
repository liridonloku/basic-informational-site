const http = require("http");
const fs = require("fs");
const { URL } = require("url");

const port = 8080;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  res.writeHead(200, { "content-type": "text/html" });
  switch (url.pathname) {
    case "/":
      fs.createReadStream("./index.html").pipe(res);
      break;
    case "/about":
      fs.createReadStream("./about.html").pipe(res);
      break;
    case "/contact-me":
      fs.createReadStream("./contact-me.html").pipe(res);
      break;
    default:
      fs.createReadStream("./404.html").pipe(res);
      break;
  }
});

server.listen(port, () => {
  console.log(`Server running`);
});
