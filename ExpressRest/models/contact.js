const contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  id: 123,
}, {
  prenom: 'Jean',
  nom: 'Dupont',
  id: 456,
}];

exports.getList = () => contacts;
exports.get = (id) => contacts.find(c => c.id === Number(id));