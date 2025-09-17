function characters(str){
    if(str.length < 3){
        return str;
    }


const ending = str.slice(-3);
const word = str.slice(0, -3);
return ending + word;
}

console.log(characters("Python"))
console.log(characters("JavaScript"))
console.log(characters("Hi"))