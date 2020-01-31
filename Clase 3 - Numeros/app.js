
var edad = 32
console.log(edad)

edad = edad + 1
console.log(edad)
edad += 1
console.log(edad)

var peso = 75
peso = peso - 2
console.log(peso)
peso -= 2
console.log(peso)

var sandwich = 1
peso = peso + sandwich
console.log(peso)

var jugarFutbol = 3
peso -= jugarFutbol
console.log(peso)

var precioDeVino = 200.3
console.log(precioDeVino)

var total = precioDeVino * 100 * 3 / 100
console.log(total)
var total = Math.round(precioDeVino * 100 * 3) / 100
console.log(total)

var totalStr = total.toFixed(2)
console.log(totalStr)

var total2 = parseFloat(totalStr)
console.log(total2)

var pizza = 8
var personas = 2
var cantidadDePorcionesPersona = pizza / personas
console.log(cantidadDePorcionesPersona)
