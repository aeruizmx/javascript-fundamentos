const andres = {
  nombre: 'Andres',
  apellido: 'Ruiz',
  edad: 32
}

const yesika = {
  nombre: 'Yesika',
  apellido: 'Cortez',
  edad: 32
}

function saludar(saludo = 'Hola') {
  console.log(`${saludo}, mi nombre es ${this.nombre}`)
}

/* const saludarAAndres = saludar.bind(andres)
const saludarAYesika = saludar.bind(yesika) */
//setTimeout(saludar.bind(andres, 'Hola che'), 1000)

//saludar.call(andres, 'Hola desde call')

saludar.apply(andres, ['Holi desde apply'])