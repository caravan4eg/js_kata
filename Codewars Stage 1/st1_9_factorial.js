function factorial(n){
// Calculate the factorial here
  if (n < 0 || n > 12) {
    throw RangeError;
    }
  return n == 0 ? 1 : n * factorial(n-1);

}

console.log(factorial(4))
