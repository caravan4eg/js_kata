function min_usual(a, b) {
    return a < b ? a : b
}

let min_arrow = (a, b) => {return a < b ? a : b}

console.log(min_arrow(99, 100));
console.log(min_usual(99, 100));
