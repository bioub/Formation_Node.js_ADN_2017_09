const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.write('Home');
      break;
    case '/html':
      res.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>
      <body>
        
      </body>
      </html>`);
      break;
    case '/hello':
      res.write('Hello');
      break;
    case '/redirect-to-google':
      res.statusCode = 302;
      res.setHeader('Location', 'http://www.google.be/');
      break;
    default:
      res.statusCode = 404;
      res.write('404 Not Found');
  }
  
  res.end();
});

server.listen(1234, () => {
  console.log('server started');
});