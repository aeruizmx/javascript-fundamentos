function Persona (nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}
Persona.prototype.soyAlto = function () {
  if(this.altura > 1.8){
    console.log(`Mido ${this.altura}, soy alto :)`)
  }else{
    console.log(`Mido ${this.altura}, no soy alto :/`)
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