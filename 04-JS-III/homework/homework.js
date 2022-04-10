// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
    return array.shift();
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
    return array.pop();
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
    let i = 0;
    if (array.length > 1){
        do{
        array[i] = array[i]+1;
        i++;
        }
        while (i < array.length)
        return array
    }
    else {return array}
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
    array.push(elemento);
    return array
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
    array.unshift(elemento)
    return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
    let a='';
    let b='';
    for (let i=0; i<palabras.length; i++){
        a+=palabras[i]
        a+=' '
    }
    for (let j=0; j < a.length-1; j++){
        b+= a[j]
    }
    return b
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
    n = array.length
    cont = 0;
    for (i=0; i<n; i++){
        if (array[i] === elemento){
            cont +=1
        }
    }
    if (cont > 0){
        return true
    } else {return false}

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
    cont = 0
    for (let i = 0; i < numeros.length; i++){
        cont += numeros[i]
    }
    return cont
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
    let cont = 0;
    let n = resultadosTest.length
    for (let i = 0; i < n; i++){
        cont += resultadosTest[i]
    }
    return cont/n
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
    let cont = 0;
    let aux =[];
    while (cont == 0){
        cont = 1;
        for (let i=0; i<numeros.length; i++){
            if (numeros[i] > numeros[i+1]){
                aux = numeros[i+1];
                numeros[i+1] = numeros[i];
                numeros[i] = aux;
                cont = 0;
            }
        }
    }
    return numeros[numeros.length-1]
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
a = 1;
  if (arguments.length === 0){
      return 0
  }else if (arguments.length === 1){
      return arguments[0]
  }
  else{
  for (let i=0; i < arguments.length; i++){
      a *= arguments[i]
  }
  return a;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
    let a = 0;
    for (let i=0; i < arreglo.length; i++){
        if(arreglo[i] > 18){
            a+=1
        } else {a+=0}
    }
    return a;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
    if (numeroDeDia == 1 || numeroDeDia == 7){
        return 'Es fin de semana'
    }else if (numeroDeDia == 2 || 
        numeroDeDia == 3 || 
        numeroDeDia == 4 || 
        numeroDeDia == 5|| 
        numeroDeDia == 6){
        return 'Es dia Laboral'
    }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
    let entero = n.toString()
    if (entero[0] === '9'){
        return true
    } else {return false}  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
    cont = 0;
    j = 0;
    n = arreglo.length
    while (arreglo[j] === arreglo[j+1]){
        cont++;
        j++;
    }
    if (cont+1 === n){
        return true
    } else {return false}
    console.log(cont)
    console.log(n)
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
    let k = []
    for (let i = 0; i<array.length; i++){
        if (array[i] === 'Enero' || 
            array[i] === 'Marzo' || array[i] ==='Noviembre'){
            k.push(array[i])
        }
    }
    if (k.length === 3){
        return k
    }
    else {return 'No se encontraron los meses pedidos'}
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
    let nuevoArray = []
    let n = array.length
    for (i=0; i<n; i++){
        if (array[i] > 100){
            nuevoArray.push(array[i])
        }
    }
    return nuevoArray
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
    nuenu = numero;
    cont = [];
    veri = 0;
    for (i=0; i<10; i++){
        cont.push(nuenu = nuenu+2)
        if (i === nuenu){
            veri +=1
        }
    }
    if (veri === 1){
        return 'Se interrumpió la ejecución'
    }else {return cont}
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
    nuenu = numero;
    cont = [];
    for (i = 0; i<10; i++){
        if (i === 5){
            continue
        }
        cont.push(nuenu += 2)
    }
    return cont
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
