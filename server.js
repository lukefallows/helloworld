/*server.js*/
const http = require('http');
const url = require('url');
const hostname = 'localhost';
const port = 3000;
const server = http.createServer(function(req, res) {
  const parsedURL = url.parse(req.url, true);
  const name = parsedURL.query.name || 'Stranger';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h1>Hello ${name}</h1>`);
});
server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});

