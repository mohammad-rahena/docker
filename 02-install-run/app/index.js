const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
  res.end('Hello from Docker Node App!');
};

const server = http.createServer(requestHandler);
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
