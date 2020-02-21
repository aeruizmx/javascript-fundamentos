//ANTES DE UN ARRAY
console.log('Hola mi nombre es andres');
[1,2,3].forEach(n => console.log(n*2))

//ANTES DE UN TEMPLATE STRING
const nombre = 'andres'
console.log('Hola mi nombre es andres');
`${nombre} es un desarrollador`

//DESPUES DE UN RETURN
function calcularDoble(numero) {
  return {
    orginal: numero, 
    doble : numero * 2
  }
}