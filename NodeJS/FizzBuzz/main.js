for (var i = 1; i < 101; i++) {
  console.log(i % 15 == 0 ? 'Fizz Buzz' :
      (i % 5 == 0 ? 'Buzz' : (i % 3 == 0 ? 'Fizz' : i))); 
} 
