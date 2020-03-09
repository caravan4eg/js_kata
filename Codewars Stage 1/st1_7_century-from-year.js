// century-from-year.js
function century(year) {
  // Finish this :)
    // return (year - Math.trunc(year/100)*100 !=0) ? Math.trunc(year/100) + 1: Math.trunc(year/100);
    return Math.ceil(year/100);
}

console.log(century(1705));
