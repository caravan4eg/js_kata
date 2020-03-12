function isEven(num) {
    if (num < 0) {
        num *= -1;
    }
    if (num == 0) {
        return 'Number is even';
        }
    if (num == 1) {
        return 'Number is odd';
    }
    return isEven(num - 2);
}

console.log(isEven(-100));
console.log(isEven(75));
