const readline = require('readline');
const chalk = require('chalk');
const random = require('./random');

module.exports = class Jeu {
  constructor(options = {}) {
    const {
      min = 0,
      max = 100,
    } = options;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this._entierAlea = random.getRandomIntInclusive(min, max);
    this._essais = [];
  }

  jouer() {
    if (this._essais.length) {
      console.log(chalk.blue(`Vous avez déjà joué : ${this._essais.join(' - ')}`));
    }

    this._rl.question('Quel est le nombre ? ', (answer) => {

      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
        console.log(chalk.red('Il faut saisir un nombre'));
        return this.jouer();
      }

      this._essais.push(entierSaisi);

      if (entierSaisi < this._entierAlea) {
        console.log(chalk.bgCyan.yellow('Trop petit'));
        return this.jouer();
      }

      if (entierSaisi > this._entierAlea) {
        console.log(chalk.bgCyan.yellow('Trop grand'));
        return this.jouer();
      }

      console.log('Gagné');
      this._rl.close();
    });
  }
}