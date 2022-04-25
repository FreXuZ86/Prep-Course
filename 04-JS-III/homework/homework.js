// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let i = 0; i < array.length; i++){
    array[i]++;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let resp = "";
  for(let i = 0; i < palabras.length; i++){
    if(i < palabras.length - 1){
    resp += palabras[i] + " ";
    }else{
      resp += palabras[i];
    }
  }
  return resp;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let resp;
  array.indexOf(elemento) !== -1 ? resp = true : resp = false;
  return resp;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let resp = 0;
  for(let i = 0; i < numeros.length; i++){
    resp += numeros[i];
  }
  return resp;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let resp;
  let sum = 0;
  for(let i = 0; i < resultadosTest.length; i++){
    sum += resultadosTest[i];
  }
  resp = sum / resultadosTest.length;
  return resp;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let resp = numeros[0];
  for(let i = 1; i < numeros.length; i++){
    if(resp < numeros[i]){
      resp = numeros[i];
    }
  }
  return resp;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let resp = 1;  
  if(arguments.length === 0){
    resp = 0;
  }else if(arguments.length === 1){
    resp = arguments[0];
  }else{
    for(let i = 0; i < arguments.length; i++){
      resp *= arguments[i];
    }
  }
  return resp;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let arr18 = arreglo.filter(number => number > 18);
  let resp = arr18.length;
  return resp;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  let resp;
  if(numeroDeDia === 1 || numeroDeDia === 7){
    resp = "Es fin de semana";
  }else{
    resp = "Es dia Laboral";
  }
  return resp;
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let resp;
  if(n.toString().charAt(0) === "9"){
    resp = true;
  }else{
    resp = false;
  }
  return resp;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let resp;
  let temp = 0;
  for(let i = 0; i < arreglo.length; i++){
    if(arreglo[i] === arreglo[i+1]){
      temp++;
    }
  }
  if(temp === 0){
    resp = false;
  }else{
    resp = true;
  }
  return resp;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let resp;
  let arr;
  arr = array.filter(mes => mes === "Enero" || mes === "Marzo" || mes === "Noviembre");
  const indice1 = array.indexOf("Enero");
  const indice2 = array.indexOf("Marzo");
  const indice3 = array.indexOf("Noviembre");
  if(indice1 === -1 || indice2 === -1 || indice3 === -1){
    resp = "No se encontraron los meses pedidos";
  }else{
    resp = arr;
  }
  return resp;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let resp;
  resp = array.filter(num => num > 100);
  return resp;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let resp = [];
  let ind = 1;
  while(ind <= 10){
    if(numero === ind){
      resp = "Se interrumpió la ejecución"
      break;
    }else{numero += 2;
    resp.push(numero);    
    ind++;
    }
  }
  return resp;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let resp = [];
  let ind = 1;
  while(ind <= 10){
    if(ind === 5){
      ind++
      continue;
    }else{numero += 2;
    resp.push(numero);
    ind++;
    }
    
  }
  return resp;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
