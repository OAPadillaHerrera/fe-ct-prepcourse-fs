/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   return Object.entries (objeto);

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var objeto = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, ñ: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0};

   var nuevoobjeto = {};

   for (let i = 0; i < string.length; i++) {

      if (objeto.hasOwnProperty(string [i])) {

         objeto [string [i]] = objeto [string [i]] + 1;

      } else {

         objeto [string [i]] = 1;

      }

   }

for (prop in objeto) {

   if (objeto [prop] > 0) {

      nuevoobjeto [prop] = objeto [prop];

   }

}

return nuevoobjeto;  

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var min = '';

   var may = '';

   for (i = 0; i < string.length; i++) {      

      if (string [i] === string [i].toUpperCase ()) {

         may = may + string [i];

      } else {

         min = min + string [i];

      }
      
   }

   return (may + min);  

}


function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var arreglo = frase.split (' ');

   var nuevoarreglo = [];
   
   for (let i = 0; i <arreglo.length; i++) {
      
      nuevoarreglo [i] = arreglo [i].split ('').reverse ().join ('');
     
   }

   return (nuevoarreglo.join (" "));

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   var cadena = numero.toString ();

   var cadena1 = cadena.split ("");

   var cadena2 = cadena.split ("").reverse ();

   var longitud = 0;    

      for (let i = 0; i < cadena.length; i++) {          
         
         if (cadena1 [i] === cadena2 [i]) {

            longitud = longitud + 1;

         }

      }

   if (longitud === cadena.length) {

      return ("Es capicua");

   } else {

      return ("No es capicua");

   }   

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

  var array = string.split ("");

  var array1 = [];

  var array2 = [];

  var array3 = [];

    
   for (let i = 0; i < array.length; i++) {
      
      if (array [i] !== "a") {
    
      array1 [i] = (array [i]);

      }

   }
   
         
   for (let i = 0; i < array1.length; i++) {

      if (array1 [i] !== "b") {
       
         array2 [i] = (array1 [i]);
   
      }
   
   } 
      
      
   for (let i = 0; i < array2.length; i++) {

      if (array2 [i] !== "c") {
       
         array3 [i] = (array2 [i]);
   
      }
   
   } 
      
   return (array3.join (""));

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
  
   arrayOfStrings.sort (function (a, b) {
   
   return (a.length - b.length);

  });

  return (arrayOfStrings);

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:   
    
   var array3 = array1.concat (array2); 
 
   var dupArray = [];
 
   var provArray = array3.sort ();     
 
   for (let i = 0; i < array2.length; i++) {
 
     if (provArray [i + 1] === provArray [i]) {
 
       dupArray.push (provArray [i]);
 
     }
 
   }
   
   return (dupArray);   

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
