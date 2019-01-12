//Clase 1//

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
console.log ("Not: si alguno es false, arroja true", valor1 != valor2)

//clase 2//

var nombre;
nombre = prompt ('Ingrese su nombre: ', '');
//envía un mensaje emergente; es un input de información//

console.log ('Tu nombre es: ', nombre);

var edad;
edad = prompt ('Ingrese su edad: ', '');
console.log ('Tu edad es: ', edad);

console.log(nombre);
document.write('Te llamas ', nombre , '.<br/>');
document.write(' Tienes ');
document.write(edad);
document.write(' años.');
document.write('<br/>');

var numero1;
var numero2;

numero1 = prompt ('Ingresa tu mes de nacimiento: ', '');
numero2 = prompt ('Ingresa tu día de nacimiento', '');
document.write ('Tu fecha de nacimiento es ', numero2, '/', numero1, '.');
document.write ('<br/>');
document.write ('<br/>');
document.write ('<br/>');
document.write ('Por lo tanto, eres insoportable.')

alert ('¡Gracias por operar con nosotres!')

