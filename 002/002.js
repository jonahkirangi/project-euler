// Create fibonacci array beginning with the first two elements
var fib = [1, 2];
var sum = 0;

// Add new elements to fibonacci sequence
// Ensure that the final fibonacci element does not exceed 4 million
for (i = 0; fib[fib.length - 1] < 4000000; i++) {
  fib.push((fib[fib.length - 1]) + (fib[fib.length - 2]));


  // Find the sum of the even valued fibonacci elements
  if ((fib[fib.length - 1]) % 2 === 0) {
    sum += fib[fib.length - 1];
  }
}

console.log(fib);
