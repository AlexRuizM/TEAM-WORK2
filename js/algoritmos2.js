const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};
/* 5. Ejercicio
Escribe una función con el nombre “stringManager”, que recibirá 2 parámetros: un string,
introducido por el usuario a través del prompt(), y un segundo parámetro, que será un objeto con las
funciones a realizar. Genera un Lorem50 desde VS Code para probar el ejercicio.
El ejercicio comenzará pidiendo un string al usuario, a través de la función prompt(). A continuación,
mediante un menú de consola, preguntará al usuario las siguientes opciones:
• Replace chars by signs?
• Capitalize?
• Replace spaces with commas?
La primera opción reemplazará de la siguiente forma:
• a→@
• e→3
• i→1
• o→0
• s→$
 */

/* La segunda opción pondrá la primera letra 
de cada palabra en mayúscula, y la tercera 
cambiará los
espacios por comas. No puede haber 2 comas seguidas.
El menú aceptará únicamente y para sí o n para no. 
Almacenará las respuestas en un objeto con las
propiedades: replaceChars, capitalize y replaceSpaces, 
cuyos valores asociados serán booleanos.
La salida del programa deberá mostrar el string 
original, y a continuación el string con cada una de
las modificaciones requeridas. Un ejemplo con todas 
las opciones marcadas como true:
• Lorem ipsum dolor sit amet
• L0r3m 1p$um d0l0r $1t @m3t
• Lorem Ipsum Dolor Sit Amet
• Lorem,ipsum,dolor,sit,amet
** El programa deberá registrar el tiempo de 
realización, es decir, desde que comienza el proceso de
transformación del string hasta que termina. 
Después de los string requeridos, el programa mostrará
las siguientes líneas: **
• 5 words, 25 chars
• work done in 750 miliseconds
*/
const a2e5 = () => {
  let input = prompt(`Introduce tu string`);
  console.log(input);
  let arraystring = input.split(" ");
  console.time();
  function stringManager(input) {
    let objetos = {
      replaceChars: false,
      capitalize: false,
      replaceSpaces: false,
    };
    let replaceCharsprompt = prompt(
      "Replace chars by signs? (y/n)"
    ).toLowerCase();
    if (replaceCharsprompt === "y") {
      objetos.replaceChars = true;
      replaceChars = input.replace(/[aeios]/g, function (charsBySigns) {
        if (charsBySigns === "a") {
          return "@";
        } else if (charsBySigns === "e") {
          return "3";
        } else if (charsBySigns === "i") {
          return "1";
        } else if (charsBySigns === "o") {
          return "0";
        } else if (charsBySigns === "s") {
          return "$";
        };
      });
      console.log(replaceChars);
    };
    let capitalizePrompt = prompt(
      "Capitalize? (y/n)").toLowerCase();
      if (capitalizePrompt === "y") {
        objetos.capitalize = true
        capitalize = input.replace(/\b\w/g, function (letters) {
          return letters.toUpperCase();
        });
        console.log(capitalize);
      };
      let spacesPrompt = prompt(
        "Replace spaces with commas? (y/n)").toLowerCase();
        if (spacesPrompt === "y") {
          objetos.replaceSpaces = true
          replaceSpaces = input.replace(/\s+/g, ",");
          console.log(replaceSpaces);
        };
    };
    stringManager(input);
    console.log(`${arraystring.length} words and ${input.length} chars`);
    console.timeEnd();
};
a2e5();
