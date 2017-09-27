import { prepend } from './dom-helpers';

const createRow = (container, val) => {
  const liElt = document.createElement('li');
  liElt.innerHTML = val;
  prepend(container, liElt);
};

export { createRow }
