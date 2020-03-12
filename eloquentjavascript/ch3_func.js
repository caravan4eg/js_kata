function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`Коров: ${zeroPad(cows, 3)}`);
  console.log(`Цыплят: ${zeroPad(chickens, 3)}`);
  console.log(`Поросят: ${zeroPad(pigs, 3)}`);
}

printFarmInventory(5, 100, 77);
