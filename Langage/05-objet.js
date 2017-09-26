const coords = {
  x: 10,
  y: 20,
};

coords.z = 30;

const json = JSON.stringify(coords);
console.log(json);

// ... réseau

const coordsFromJson = JSON.parse(json);

console.log(coordsFromJson.x); // 10

for (let key in coords) {
  if (coords.hasOwnProperty(key)) {
    console.log(key);
    console.log(typeof key);
    console.log(coords[key]);
  }
}

// fonction constructeur avec closure (mauvaise pratique)
function Voiture(marque, modele) {
  this._marque = marque;

  this.getModele = function() {
    return modele;
  };

  this.setModele = function(_modele) {
    modele = _modele;
  };
}

const clio = new Voiture('Renault', 'Clio');
console.log(typeof Voiture); // function
console.log(typeof clio); // object
console.log(clio._marque); // Renault
console.log(clio.getModele()); // Clio
clio.setModele('Espace');
console.log(clio.getModele()); // Espace

const p208 = new Voiture('Peugeot', '208');
const p208bis = p208; // 2 références vers le meme objet
const p208clone = Object.assign({}, p208); // clone de l'objet
console.log(p208.getModele()); // 208

console.log(clio.getModele === p208.getModele); // false

// fonction constructeur avec prototype
function Contact(prenom) {
  this._prenom = prenom;
}

Contact.prototype.hello = function() {
  return `Bonjour je m'appelle ${this._prenom}`;
};

const romain = new Contact('Romain');
console.log(romain._prenom);
console.log(romain.hello());
console.log(romain.hasOwnProperty('_prenom'));
console.log(romain.hasOwnProperty('hello'));
console.log(romain._prenom !== undefined);
console.log(romain.hello !== undefined);

const jean = new Contact('Jean');
console.log(jean.hello());

console.log(jean.hello === romain.hello); // true

// mot clé class === function constructor + prototype

class ContactES6 {
  constructor(options) {
    this._prenom = options.prenom;
  }

  hello() {
    return `Bonjour je m'appelle ${this._prenom}`;
  }
}

const contact = new ContactES6({
  telephone: '0757645576U547'
});

console.log(typeof ContactES6); // function
console.log(typeof ContactES6.prototype.hello); // function

class Formateur extends ContactES6 {
  constructor(options) {
    super(options);
    this._specialite = options.specialite;
  }

  hello() {
    return super.hello() + ', je suis spécialisé en ' + this._specialite;
  }
}

const rom = new Formateur({
  prenom: 'Romain',
  specialite: 'JS',
});

console.log(rom.hello());
