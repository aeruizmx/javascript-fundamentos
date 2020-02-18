class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
  }
  soyAlto(){
    return this.altura  > 1.8
  }
}

class Desarrollador extends Persona{
  constructor(nombre, apellido, altura){
    super(nombre, apellido, altura)
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollado/a`)
  }
}



var andres = new Persona('Andres', 'Ruiz', 1.82)
andres.saludar()
andres.soyAlto()
var erika = new Persona('Erika', 'Luna', 1.75)
erika.saludar()
erika.soyAlto()
var arturo = new Persona('Arturo', 'Martinez', 1.56)
arturo.saludar()
arturo.soyAlto()

