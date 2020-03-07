/*
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/

function list(names){
  //your code here
  if (names.length >=2) {
	  names[names.length-2].name = names[names.length-2].name + ' & ' + names[names.length-1].name;
    names.pop()
    }
  let x = ''
  for (i in names){
    x += names[i].name;
    if (names.length >= 2){
      if (i < names.length-1) {
        x += ', ';
        }
      }
    }
    return x
}
