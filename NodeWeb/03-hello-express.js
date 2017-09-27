const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Home');
});

app.all('/hello/:prenom', (req, res) => {
  res.send(`Hello ${req.params.prenom}`);
});

app.all('/redirect-to-google', (req, res) => {
  res.redirect('http://www.google.be/');
});

app.listen(1234, () => {
  console.log('server started');
});