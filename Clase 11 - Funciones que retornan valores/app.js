var andres = {
  nombre : 'Andres',
  apellido : 'Ruiz',
  edad : 32,
  ingeniero : true,
  cocinero : false,
  cantante : true,
  dj : false,
  guitarrista : false,
  drone : true
}

var juan = {
  nombre : 'Juan',
  apellido : 'Gomez',
  edad : 13
}

function imprimirProfesiones( persona ) {
  console.log(`${persona.nombre} es :`)
  if(persona.ingeniero){
    console.log('Ingeniero')
  } else {
    console.log('no es Ingeniero')
  }
  if(persona.cocinero){
    console.log('Cocinero')
  }
  if(persona.cantante){
    console.log('cantante')
  }
  if(persona.dj){
    console.log('dj')
  }
  if(persona.guitarrista){
    console.log('guitarrista')
  }
  if(persona.drone){
    console.log('drone')
  }
}

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

//RETO
function imprimirSiEsMayorDeEdad(persona) {
  if( esMayorDeEdad(persona) ){
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}
imprimirSiEsMayorDeEdad(andres)
imprimirProfesiones(andres)

imprimirSiEsMayorDeEdad(juan)

