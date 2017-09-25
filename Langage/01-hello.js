/**
 * Additionne deux nombres
 * @param {number} a Le premier nombre
 * @param {number} b Le deuxième nombre
 * @returns {number} La somme
 */
const addition = (a, b) => a + b;

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(addition(i, i));
  }
}
