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


function imprimirNombreEnMayusculas({ nombre }){
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(andres)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({ nombre : 'Maria'})
imprimirNombreEnMayusculas({ apellido : 'Torres' })