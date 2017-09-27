const append = (container, elt) => {
  container.appendChild(elt);
};

const prepend = (container, elt) => {
  if (container.children.length) {
    container.insertBefore(elt, container.firstElementChild);
  }
  else {
    container.appendChild(elt);
  }
};

export { append, prepend }