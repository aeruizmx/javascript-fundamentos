var andres = {
  nombre: 'Andres',
  apellido: 'Ruiz',
  edad: 32
}
/* function esMayorDeEdad(persona) {
  if(persona.edad >= 18){
    var mensaje = 'ES MAYOR DE EDAD'
  }else{
    var mensaje = 'ES MENOR DE EDAD'
  }
  console.log(mensaje)
} */

function esMayorDeEdad(persona) {
  let mensaje
  const MAYORIA_DE_EDAD = 18
  //MAYORIA_DE_EDAD = 21 //ERROR: Assignment to constant variable.
  if(persona.edad >= MAYORIA_DE_EDAD){
    mensaje = 'ES MAYOR DE EDAD'
  }else{
    mensaje = 'ES MENOR DE EDAD'
  }
  console.log(mensaje)
}

//esMayorDeEdad(andres)

for (var index = 0; index < 10; index++) {
  console.log(index)
  
}
console.log(`${index}`)