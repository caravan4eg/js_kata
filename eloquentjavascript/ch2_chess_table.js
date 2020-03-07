let size = prompt("Size: ");
line = " ";
for (i = 0; i < size; i++) {
  line += "#" + " ";
}

for (i = 0; i < size; i++) {
  if (i % 2 == 0) {
    console.log(line.slice(0, size));
  } else {
    console.log(line.slice(1, size));
  }
}
