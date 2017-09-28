const Router = require('express').Router;
const authenticate = require('../middlewares/authenticate');
const contactsCtrl = require('../controllers/contacts');

const routes = new Router();

// List
routes.get('/', 
  contactsCtrl.list
);

// Add
routes.post('/', authenticate, (req, res, next) => {});

// Show
routes.get('/:id', 
  contactsCtrl.show
);

// Replace
routes.put('/:id', authenticate, (req, res, next) => {});

// Partial replace
routes.patch('/:id', authenticate, (req, res, next) => {});

// Remove
routes.delete('/:id', authenticate, (req, res, next) => {});

module.exports = routes;