const express = require('express');
const morgan = require('morgan');
const routesContact = require('./routes/contacts');

const app = express();

app.use(morgan('dev'));
app.use('/api/contacts', routesContact);




module.exports = app;