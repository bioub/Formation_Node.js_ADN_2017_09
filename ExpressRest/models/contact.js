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
exports.create = (contact) => {
  var nextId = contacts[contacts.length-1].id + 1;

  contact.id = nextId;
  
  contacts.push(contact);

  return contact;
};
exports.remove = (id) => {
  const contact = contacts.find(c => c.id === Number(id));
  
  if (contact) {
    contacts.splice(contacts.indexOf(contact), 1);
  }

  return contact;
};