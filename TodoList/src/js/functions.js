// Module IIFE
// Immediately Invoked Function Expression
(function (global) {
  'use strict';

  const prepend = (container, elt) => {
    if (container.children.length) {
      container.insertBefore(elt, container.firstElementChild);
    }
    else {
      container.appendChild(elt);
    }
  };
  
  const createRow = (container, val) => {
    const liElt = document.createElement('li');
    liElt.innerHTML = val;
    prepend(container, liElt);
  };

  global.createRow = createRow;
}(window));
