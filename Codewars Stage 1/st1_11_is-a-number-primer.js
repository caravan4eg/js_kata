/*
Является ли число простым.
Решение основано на том, что у составного числа есть делитель который дб меньше корня из этого числа
*/

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  let d = 2;
  while (d * d <= num && num % d != 0) {
    d += 1;
  }
  return d * d > num;
}
console.log(isPrime(7));
