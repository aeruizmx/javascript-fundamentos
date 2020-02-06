var andres = {
  nombre : 'Andres',
  apellido : 'Ruiz',
  edad : 32,
  peso : 75
}

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} Kg.`)

const INCREMENTO_PESO = .20
const DIAS_DEL_ANO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarDePeso = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++ ) {
  var random = Math.random()
  if( random < 0.25 ){
    aumentarDePeso(andres)
  } else if( random < 0.50) {
    adelgazarDePeso(andres)
  }
}

console.log(`Al final del año ${andres.nombre} pesa ${andres.peso.toFixed(1)} Kg.`)

