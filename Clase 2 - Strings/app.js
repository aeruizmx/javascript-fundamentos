var nombre = 'Andrés', apellido = 'Ruiz'
var nombreEnMayusculas = nombre.toUpperCase();
console.log(nombreEnMayusculas)

var apellidoEnMayusculas = apellido.toLowerCase();
console.log(apellidoEnMayusculas)

var primeraLetraDelNombre = nombre.charAt(0)
console.log(primeraLetraDelNombre)

var cantidadDeLetrasDelNombre = nombre.length;
console.log(cantidadDeLetrasDelNombre)

var nombreCompleto = nombre + ' ' + apellido
console.log(nombreCompleto)

nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
console.log(nombreCompleto)

var str = nombre.charAt(1) + nombre.charAt(2)
console.log(str)
var str = nombre.substr(1,2)
console.log(str)

console.log('Desafío: Encuentra la última letra de su nombre')
var ultimaLetraNombre = nombre.charAt(nombre.length-1)
console.log(ultimaLetraNombre)
