const andres = {
  nombre: 'Andres',
  apellido: 'Ruiz',
  edad: 32
}

//const cumpleanos = persona => persona.edad++

const cumpleanosInmutable = persona => ({
  ...persona,
  edad: persona.edad + 1
})