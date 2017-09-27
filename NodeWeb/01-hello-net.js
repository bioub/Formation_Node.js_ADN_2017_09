const net = require('net');
const server = net.createServer();

server.once('listening', () => {
  console.log('server started');
});

server.on('connection', (socket) => {
  console.log('client connected');
  socket.on('data', (data) => {
    console.log(data.toString());
  });
});

server.on('error', (err) => {
  console.log(err.message);
});

server.once('close', () => {
  console.log('server stopped');
});

server.listen(1234);