function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

const input = "test tes tes t est etsetesteste ";
const output = capitalizeWords(input);
console.log(output); 




