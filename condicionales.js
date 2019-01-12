
//condiciones y condicionales//
//if (variable > === u otras cosas) console.log (acción o información)//

var nombre;
var edad;
var dia;
var mes;

nombre = prompt('Ingresa tu nombre', '')
if (nombre == 'Rocío') {
    document.write (nombre, ', eres increíble.')
}
else {
    document.write (nombre, ', también sos copada.')
}

edad = prompt('Ingresa tu edad', '')
if (edad >30){
    document.write ('<br/> ¡Estás en la mejor edad!')
}

dia = prompt('Ingresá el día de tu nacimiento')
mes = prompt('Ingresá el mes de tu nacimiento')
if (dia==2, mes==6) {
    document.write ('<br/> Sos la persona más perfecta del mundo.')
} else {
    document.write ('<br> No sos tan cope como Toti, pero sos buena onda.')
}
if (dia==18, mes==11) {
    document.write ('<br/>¡', nombre, ', sos la princesa Vanellope!')
}

//ejercicio en clase//

var password1;
var password2;
password1 = prompt('Ingrese la contraseña numérica: ','');
password1 = parseInt (password1);
password2 = prompt('Repita la contraseña numérica: ','');
password2 = parseInt (password2);

if ( password1 == password2) {
    document.write('<br/><br/>Son iguales');
} else if(password1 > password2) {
    document.write('<br/><br/>La contraseña 1 es mayor a la contraseña 2');
} else {
    document.write ('<br/><br/>La contraseña 2 es mayor a la 1');
}