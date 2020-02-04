var andres = {
  nombre : 'Andrés',
  apellido : 'Ruiz',
  edad : 32
}

var dario = {
  nombre : 'Dario',
  apellido : 'Susnisky',
  edad : 27
}


function imprimirNombreEnMayusculas(persona){
  // var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(andres)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({ nombre : 'Maria'})
//imprimirNombreEnMayusculas({ apellido : 'Torres' })

//Reto
function imprimirNombreYEdad(persona){
  var {nombre, edad} = persona
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(andres)
imprimirNombreYEdad(dario)