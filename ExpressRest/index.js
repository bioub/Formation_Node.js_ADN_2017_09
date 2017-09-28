const http = require('http');
//const https = require('https');
const app = require('./app');

const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.on('error', (err) => {
  // TODO log des erreurs
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// NODE_ENV === 'production'
//https.createServer(app, {cert: ''});