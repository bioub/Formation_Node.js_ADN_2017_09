const prenoms = ['Romain', 'Thomas'];

prenoms.forEach(function(prenom, i) {
  console.log(prenom);
});

Array.prototype.myForEach = function(cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

prenoms.myForEach(function(prenom, i) {
  console.log(prenom);
});

const setTimeoutSync = function(cb, delay) {
  const debut = Date.now();

  while (Date.now() < debut + delay) {}

  cb();
};

setTimeoutSync(function() {
  console.log('1 sec');
}, 1000);

console.log('after Sync');
