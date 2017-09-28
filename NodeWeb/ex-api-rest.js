const express = require('express');

const contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  id: 123,
}, {
  prenom: 'Jean',
  nom: 'Dupont',
  id: 456,
}];

const app = express();
// Middleware de log
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware authenticate
app.use('/api', (req, res, next) => {
  // '123' correspond à token enregistrer
  // par une page de login dans une base
  if (req.headers.authorization === '123') {
    return next();
  }
  
  res.statusCode = 401;
  res.json({
    msg: 'Unauthorized access',
  });
});

// GET /api/contacts -> retourner en JSON
// tout le tableau
app.get('/api/contacts', (req, res) => {
  res.json(contacts);
});

// GET /api/contacts/123 -> retourner en JSON
// le contact 123
app.get('/api/contacts/:id', (req, res) => {
  const id = Number(req.params.id);

  const contact = contacts.find(c => c.id === id);
  // const contact = _.find(contacts, {id});

  if (!contact) {
    req.notFoundReason = 'Contact not found';
    return next();
  }

  res.json(contact);
});

// DELETE /api/contacts/123 -> retourner en JSON
// le contact 123 supprimé et le supprimer
app.delete('/api/contacts/:id', (req, res) => {
  const id = Number(req.params.id);
  
  const contact = contacts.find(c => c.id === id);
  // const contact = _.find(contacts, {id});

  if (!contact) {
    req.notFoundReason = 'Contact not found';
    return next();
  }

  contacts.splice(contacts.indexOf(contact), 1);

  res.json(contact);
});

app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: req.notFoundReason || 'Not Found',
  });
})

app.listen(1234, () => {
  console.log('server started');
});