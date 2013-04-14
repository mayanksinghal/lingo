var fib = function(x) {
  var mem = {};
  mem[1] = 1;
  mem[2] = 1;
  var populateTill = function(n) {
    if (mem[n] || n <= 0) {
      return; 
    }
    populateTill(n - 1);    
    mem[n] = mem[n - 1] + mem[n - 2]; 
  };
  populateTill(x);
  return mem[x];
};

console.log(fib(25));
