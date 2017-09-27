'use strict';

const nbs = [2, 3, 4];

console.log(nbs.map(nb => nb * 2).join(' - '));

const contacts = [{
  id: 1,
  prenom: 'Romain',
  nom: 'Bohdanowicz',
  adresse: {
    ville: 'France'
  }
}, {
  id: 2,
  prenom: 'Jean',
  nom: 'Dupont',
  adresse: {
    ville: 'Belgique'
  }
}];

console.log(contacts.map(c => c.prenom).join(' - '));
console.log(
  contacts
    .filter(c => c.adresse.ville === 'France')
    .map(c => c.prenom)
    .join(' - ')
);

// rxJS, Reactive Programming (utilisé dans Angular)
// Application de ce principe sur des events
// class Observable


console.log(nbs.reduce((acc, nb) => acc + nb, 0));
