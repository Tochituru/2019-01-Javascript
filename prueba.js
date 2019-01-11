console.log("Hola, mundo");

var primerNombre = "Cosa \"la Cosa\" Simpson";

console.log("bienvenide a Js, " + primerNombre);

var numero1 = 42;
var numero2 = 25;
var sonIguales = (numero1 == numero2);

console.log ("== los números son distintos", sonIguales);

numero3 = "42";
var iguales = (numero1 == numero3);
console.log ("== los números son iguales (sin importar el tipo)", iguales);
var iguales = (numero1 === numero3);
console.log ("=== los números son iguales y también el tipo", iguales);


var valor1 = true;
var valor2 = false;

console.log ("and: si ambos son true, arroja true", valor1 && valor2);
console.log ("or: si alguno es true, arroja true", valor1 || valor2)