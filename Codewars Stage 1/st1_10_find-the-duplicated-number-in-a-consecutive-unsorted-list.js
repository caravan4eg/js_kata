// https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript

function findDup( arr ){
    arr = arr.sort();
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == arr[i+1]){
            return arr[i];
        }
    }
}
console.log(findDup([1,3,2,5,4,5,7,6]));
