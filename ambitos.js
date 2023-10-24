// Ámbito global
let greeting = "Hello World";
function greet() {
  console.log(greeting);
}
greet(); 

// Ámbito local o de función
function greet() {
  let greeting = "Hello World";
  console.log(greeting);
}
greet(); 
console.log(greeting); 

// Ámbito de bloque
{
  let greeting = "Hello World";
  var lang = "English";
  console.log(greeting);
}
console.log(lang);
console.log(greeting); 

//> Ámbito estático o dinámico
const age = 28;
function printAge() {
  console.log(age);
}
function mainApp() {
  const age = 26;
  printAge();
}
mainApp(); 
