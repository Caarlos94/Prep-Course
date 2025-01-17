// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = [];
  array = Object.entries(objeto)
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let obj = {};

  for(let i = 0; i < string.length; i++){
    if(!obj[string[i]]){
      obj[string[i]] = 0;
    }  
    obj[string[i]] += 1;
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  str = "";
  for(let letra of s) {
    if(/[A-Z]/.test(letra))
    	str += letra
  }
   for(let letra of s) {
    if(/[a-z]/.test(letra))
    	str += letra
  }
  return str
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
	str = str.split("").reverse().join("");
  str2 = str.split(" ").reverse().join(" ")
  
  return str2;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if(numero === undefined) return console.warn("No hay un valor numérico");
	let b = "";
	let a = numero + "";
	for(i = 1; i < a.length + 1; i++) {
    b = b + a[a.length - i]
  }
  if (a === b) return "Es capicua"
  else	return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  if(!cadena) return console.warn ("No ingresaste ningun texto");  //Validación	
  
  let nuevaCadena = "";
	nuevaCadena = cadena.replace(new RegExp("[abc]","ig"),"");

	return nuevaCadena
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  if(!arr) return console.warn ("No ingresaste ningun arreglo");  //Validación
  if(!(arr instanceof Array)) return console.warn(`${arr} no es un arreglo`);
  if(arr.length === 0) return console.warn("El arreglo está vacio");
  
  return arr.sort((a,b) => {
    return a.length - b.length
  })
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  newArr = [];
  for(let number of arreglo1) {
    for(let num of arreglo2) {
      if(number === num) newArr.push(number)
    }
  }
  return newArr
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

