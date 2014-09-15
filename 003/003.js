var factors = [];
var i = 2;

function largestPrime(n) {
  while (i < n) {
    if (n % i === 0) {
      factors.push(i);

      i++;
    } else {
      return factors;
    }
  }
}

console.log(largestPrime(600851475143));
