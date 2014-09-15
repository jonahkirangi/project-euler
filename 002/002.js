// Create fibonacci array, beginning with the first two elements
var fib = [1, 2];
var evenSum = 0;

// Ensure that the final fibonacci element does not exceed 4 million
for (i = 0; fib[fib.length - 1] < 4000000; i++) {

  // Tally the sum of the even-valued fibonacci elements
  if ((fib[fib.length - 1]) % 2 === 0) {
    evenSum += fib[fib.length - 1];
  }

  // Push new elements to fibonacci sequence
  fib.push((fib[fib.length - 1]) + (fib[fib.length - 2]));
}

console.log(evenSum);
