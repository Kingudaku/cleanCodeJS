// Gracias al hoisting se puede ejecutar una función antes de su declaración:
greet(); 
function greet() {
  let greeting = "Hello World";
  console.log(greeting);
}

// Al asignar la declaración en memoria es como si subiera la función al principio de su ámbito.
function greet() {
  let greeting = "Hello World";
  console.log(greeting);
}
greet();

// El hoisting puede generar comportamientos inesperados
var greet = "Hello";
(function () {
  console.log(greet); 
  var greet = "Hi";
  console.log(greet); 
})();

// Por lo tanto el comportamiento de este código sería equivalente a reescribirlo de esta forma:
var greet = "Hello";
(function () {
  var greet;
  console.log(greet); 
  greet = "Hi";
  console.log(greet); 
})();
