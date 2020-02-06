var andres = {
  nombre : 'Andres',
  apellido : 'Ruiz',
  edad : 32,
  peso : 75
}

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarDePeso = persona => persona.peso -= INCREMENTO_PESO
const META = andres.peso - 3
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

console.log(`Al inicio del año ${andres.nombre} pesa ${andres.peso} Kg.`)

var dias = 0
while ( andres.peso > META ) {
  //aumentar de peso
  if (comeMucho()) {
    aumentarDePeso(andres)
  }
  if (realizaDeporte()) {
    adelgazarDePeso(andres)
  }
  dias += 1
}


console.log(`Pasaron ${dias} dias hasta que ${andres.nombre} adelgazó 3 Kg.`)

