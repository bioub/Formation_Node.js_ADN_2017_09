global.prenom = 'Jean';

const contact = {
  prenom: 'Romain',
};

const hello = function(p1, p2) {
  return `Bonjour ${p1}, ${p2} je m'appelle ${this.prenom}`;
};

// Bonjour Paul, Pierre je m'appelle Jean
// en mode strict : TypeError: Cannot read property 'prenom' of undefined
console.log(hello('Paul', 'Pierre'));

// Bonjour Paul, Pierre je m'appelle Romain
console.log(hello.call(contact, 'Paul', 'Pierre'));

// Bonjour Paul, Pierre je m'appelle Romain
console.log(hello.apply(contact, ['Paul', 'Pierre']));


const helloContact = hello.bind(contact);
// Bonjour Paul, Pierre je m'appelle Romain
console.log(helloContact('Paul', 'Pierre'));

// Exemple d'utilisation (pas génial pour V8)
const sum = function() {
  return Array.prototype.reduce.call(arguments, (acc, nb) => acc + nb);
};

console.log(sum(1, 2, 3, 4)); // 10
