
const logClosure = function(msg) {
  return function() {
    console.log(msg);
  };
};

const hello = logClosure('Hello');
hello();

// Dans 1 sec :
// 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

for (var i = 0; i < 3; i++) {
  setTimeout(logClosure(i), 1000);
}
