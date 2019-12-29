/**
 * @param {number} n
 * @return {number}
 */

// sieve of Eratosthenes solution
// with improvements on termination condition and iteration
var countPrimes = function(n) {
    if (n < 3) return 0;
    let isPrime = Array(n).fill(true);
    // Loop's ending condition is i * i < n instead of i < sqrt(n)
    // to avoid repeatedly calling an expensive function sqrt().
    for (let i = 2; i * i < n; i++) {
      if (!isPrime[i]) continue;
      for (let j = i * i; j < n; j += i) {
         isPrime[j] = false;
      }
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
      if (isPrime[i]) count++;
    }
    return count;
};

