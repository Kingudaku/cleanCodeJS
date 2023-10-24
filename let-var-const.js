// var
var age = 28;
{
  console.log("Valor dentro del bloque", age); 
  var age = 29;
}

console.log("Valor fuera del bloque", age); 
age = age * 2;
console.log("Valor cambiado", age); 

// let
let age = 28;
{
  console.log("Valor dentro del bloque", age);
  let age = 29;
}

console.log("Valor fuera del bloque", age); 
age = age * 2;
console.log("Valor cambiado", age); 

// const
const PI = 3.14159;
PI = PI * 2; 
console.log("Valor cambiado", PI); 
