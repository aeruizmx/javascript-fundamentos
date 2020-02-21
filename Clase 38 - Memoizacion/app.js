function factorial(numero) {
  if(!this.cache){
    this.cache = {}
  }
  if(this.cache[n]){
    return this.cache[n]
  }
  if(numero === 1){
    return 1
  }
  this.cache[numero] =  numero * factorial( numero - 1 )
  debugger
  return this.cache[numero]
}