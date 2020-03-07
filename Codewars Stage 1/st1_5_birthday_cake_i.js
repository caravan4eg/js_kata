
function cake(x, y) {
  let total = 0;

  for (i = 0; i < y.length; i++) {
    if (i % 2 == 0) {
      total += y.charCodeAt(i);   //count sum of ascii of even elements
    } else {
      total += y.charCodeAt(i) - 96;  //add alphabetic position of odd elements
    }
  }
   //is total more than 70%?
   return (total * 100 / x > 70) ? 'Fire!': 'That was close!';

}
