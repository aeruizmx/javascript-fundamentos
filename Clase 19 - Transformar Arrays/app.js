var andres = {
  nombre: 'Andres',
  apellido: 'Ruiz',
  altura: 1.85
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomezz',
  altura: 1.85
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.72
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
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
console.log(personasCms)