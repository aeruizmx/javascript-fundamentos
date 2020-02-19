class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn){
    var {nombre, apellido} = this
    console.log(`Hola me llamo ${nombre} ${apellido}`)
    if(fn){
      fn(nombre, apellido, false)
    }
  }
  soyAlto(){
    return this.altura  > 1.8
  }
}

class Desarrollador extends Persona{
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }
  saludar(fn) {
    var {nombre, apellido} = this
    console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollado/a`)
    if(fn){
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if(esDev){
    console.log(`Ah, no sabia que eras developer`)
  }
}



var andres = new Persona('Andres', 'Ruiz', 1.82)
var erika = new Persona('Erika', 'Luna', 1.75)
var arturo = new Desarrollador('Arturo', 'Martinez', 1.56)

andres.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)
