const express = require('express');

const contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  id: 123,
}, {
  prenom: 'Jean',
  nom: 'Dupont',
  id: 456,
}]

const app = express();

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
    res.statusCode = 404;
    return res.json({
      msg: 'Contact not found',
    });
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
    res.statusCode = 404;
    return res.json({
      msg: 'Contact not found',
    });
  }

  contacts.splice(contacts.indexOf(contact), 1);

  res.json(contact);
});


app.listen(1234, () => {
  console.log('server started');
});