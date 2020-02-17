var andres = {
  nombre: 'Andres',
  apellido: 'Ruiz',
  altura: 1.85,
  cantidadDeLibros: 100
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86,
  cantidadDeLibros: 120
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomezz',
  altura: 1.85,
  cantidadDeLibros: 10
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.72,
  cantidadDeLibros: 87
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56,
  cantidadDeLibros: 20
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76,
  cantidadDeLibros: 200
}
const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => altura <= 1.8
const pasarAlturaACms = persona => {
  return {
    ...persona,
    altura: persona.altura * 100
  }
}
var personas = [andres, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)

var personasCms = personas.map(pasarAlturaACms)

/* 
for ( var i = 0; i < personas.length; i++){
  acum = acum + personas[i].cantidadDeLibros
}
 */
const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros
var totalDeLibros = personas.reduce(reducer, 0)
console.log(`En total tienen ${totalDeLibros} libros`)