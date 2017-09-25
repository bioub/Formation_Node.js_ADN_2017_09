
setTimeout(function() {
  console.log('1 sec');
}, 1000);

Array.prototype.forEachAsync = function(cb) {
  for (var i = 0; i < this.length; i++) {
    process.nextTick(cb, this[i], i, this);
  }
};

['Romain', 'Jean'].forEachAsync(p => console.log(p));

console.log('after setTimeout');
