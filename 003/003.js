var i = 1;

function largestPrime(n) {
  while (i < n) {
    if (n % i === 0) {
      n /= i;
    }

    i++;
  }

  console.log(n);
}

largestPrime(600851475143);
