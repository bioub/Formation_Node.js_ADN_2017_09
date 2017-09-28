const Router = require('express').Router;
const bodyParser = require('body-parser');
const authenticate = require('../middlewares/authenticate');
const contactsCtrl = require('../controllers/contacts');

const routes = new Router();

// List
routes.get('/', 
  contactsCtrl.list
);

// Add
routes.post('/', 
  authenticate,
  bodyParser.json(),
  contactsCtrl.add,
);

// Show
routes.get('/:id', 
  contactsCtrl.show,
);

// Replace
routes.put('/:id', authenticate, (req, res, next) => {});

// Partial replace
routes.patch('/:id', authenticate, (req, res, next) => {});

// Remove
routes.delete('/:id', 
  authenticate, 
  contactsCtrl.remove,
);

module.exports = routes;