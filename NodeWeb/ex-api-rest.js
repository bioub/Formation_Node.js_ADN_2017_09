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

// GET /api/contacts/123 -> retourner en JSON
// le contact 123

// DELETE /api/contacts/123 -> retourner en JSON
// le contact 123 supprimé et le supprimer

app.listen(1234, () => {
  console.log('server started');
});