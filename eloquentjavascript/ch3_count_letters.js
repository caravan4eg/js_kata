function countBs(string, char) {
    let counter = 0;
    for(let i=0; i<string.length; i++){
        if (string[i] == 'B'){
            counter += 1;
        }
    }
    return counter;
}

function countChar(string, char) {
    let counter = 0;
    for(let i=0; i<string.length; i++){
        if (string[i] == char){
            counter += 1;
        }
    }
    return counter;
}



string = 'bjkhkafjh.aBlk;Blklk;qeiqiuruhBB'
char = 'B'
console.log('There\'re', countBs(string), 'big "B" in string.');
console.log('There\'re', countChar(string, char), `${char}`, 'in string.');
