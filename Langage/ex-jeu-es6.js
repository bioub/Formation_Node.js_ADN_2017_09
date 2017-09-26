// 1 - Method properties
const Random = {
  get() {
    return Math.random();
  },

  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },

  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require('readline');

// 2 - class plutot que function + proto
class Jeu {
  constructor(options = {}) {
    // 3 - options default value
    //options = options || {};

    // 4 - destructurer l'objet avec defaut value
    // const min = options.min || 0;
    // const max = (options.max !== undefined) ? options.max : 100;
    const {
      min = 0,
      max = 100,
    } = options;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this._entierAlea = Random.getIntInclusive(min, max);
    this._essais = [];
  }

  jouer() {
    if (this._essais.length) {
      // 5 - template string
      console.log(`Vous avez déjà joué : ${this._essais.join(' - ')}`);
    }

    this._rl.question('Quel est le nombre ? ', (answer) => {

      // 6 - Number.parseInt et Number.isNaN
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
        console.log('Il faut saisir un nombre');
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Gagné');
      this._rl.close();
    });
  }
}

const jeu = new Jeu();
jeu.jouer();
