// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/javascript
// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.

function distinct(a) {
    arr = [];
    for(let i=0; i<a.length; i++){
        if (!arr.includes(a[i])){
            arr.push(a[i]);
        }

    }
  return arr;
}

a = [1,1,2,3,4,5,5]
console.log(distinct(a));
