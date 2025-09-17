function isInRange(number, min, max){
    return number > min && number < max;
}


function angle_Type(angle) {
if (isInRange(angle, 0, 90)) {
    return("Acute angle");
}
else if (isInRange(angle, 90, 180)) {
   return("Obtuse angle");
}
else if (angle === 90) {
    return("Right angle");
}   
else if (angle === 180) {
    return("Straight angle");

} 
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))


// function isInRange(number, min, max) {
//   return number > min && number < max; // exclusive range
// }

// function angle_Type(angle) {
//   if (angle === 90) {
//     return "Right angle";
//   } else if (angle === 180) {
//     return "Straight angle";
//   } else if (isInRange(angle, 0, 90)) {
//     return "Acute angle";
//   } else if (isInRange(angle, 90, 180)) {
//     return "Obtuse angle";
//   } else {
//     return "Invalid angle";
//   }
// }

// // Print results
// console.log(angle_Type(47));   // Acute angle
// console.log(angle_Type(90));   // Right angle
// console.log(angle_Type(145));  // Obtuse angle
// console.log(angle_Type(180));  // Straight angle
