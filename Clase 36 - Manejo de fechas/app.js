function diasEntreFechas(fecha1, fecha2) {
  const unDia = 1000 * 60 * 60 * 24
  const diferencia = Math.abs(fecha1 - fecha2)
  return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(1987,7,19)
console.log(diasEntreFechas(hoy,nacimiento))
console.log(diasEntreFechas(hoy,nacimiento)/365)
