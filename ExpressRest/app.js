const express = require('express');
const routesContact = require('./routes/contacts');

const app = express();


app.use('/api/contacts', routesContact);




module.exports = app;