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
//RETO
function imprimirSiEsMayorDeEdad(persona) {
  if( persona.edad > 17 ){
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}
imprimirSiEsMayorDeEdad(andres)
imprimirProfesiones(andres)

