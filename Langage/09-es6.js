// REST params
const addition = (...nbs) => nbs.reduce((acc, nb) => acc + nb);
console.log(addition(1, 2, 3, 4)); // 10;

// SPREAD operator
const nbs = [1, 2, 3, 4];
console.log(addition(...nbs)); // 10;

const concat = [...nbs, 5, 6];

// clone tableau
const nbsClonedES3 = nbs.slice(); // ES3
const nbsClonedES6 = [...nbs]; // ES6

// Destructuration

// Tableau
const parts = 'Romain Bohdanowicz'.split(' ');
const prenomES3 = parts[0];
const nomES3 = parts[1];

const [prenomES6, nomES6] = 'Romain Bohdanowicz'.split(' ');

// Objet
const coords = {x: 10, y: 20};
const {x: xES6 = 0, y: yES6 = 0} = coords;
console.log(xES6); // 10;

// Shortand property
const x = 10;
const y = 20;
const coordsES6 = { x, y };
// const {x = 10, y} = coordsES6;
