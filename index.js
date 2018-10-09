var http = require('http');

const host = '0.0.0.0'
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000, host);
console.log(`Server running at http://${host}:3000/`);
