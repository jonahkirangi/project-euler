// Create fibonacci array beginning with the first two elements
var fibonacci = [1, 2];

// Add new elements to fibonacci sequence
// Ensure that the final fibonacci element does not exceed 4 million
while (fibonacci.slice(-1)[0] < 4000000) {
  fibonacci.push((fibonacci.slice(-1)[0]) + (fibonacci.slice(-2)[0]));
}

console.log(fibonacci);
