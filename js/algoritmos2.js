const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

/* Ejercicio 1 */
const e1a2 = () => {
  let word = "palindrome";
  console.log(Array.from(word));
};

/* Ejercicio 2 */

e2a2 = () => {
  let quote = "No lemon, no melon";
  console.log(quote);

  // he creado una función con mi código que convierte una frase
  // en un array, invierte el orden de las letras y las vuelve a
  // convertir en un string, sin comas separando los elementos.

  function letterReverse() {
    let arrayQuote = Array.from(quote);
    console.log(arrayQuote);

    let reverse = arrayQuote.reverse();
    console.log(reverse);

    let solution = reverse.join("");
    console.log(solution);
  }

  letterReverse();
};

/* Ejercicio 3 */
const e3a2 = () => {
  let asterisk = "****";

  for (let countdown = 0; countdown < 4; countdown++) {
    console.log("");
    console.log(asterisk);
  }
};

 //Ejercicio 4, algoritmos 2//

const e4a2 =() => {
  //Pongo una variable (por cada dia de la semana) que sera de array y dentro tiene la temperatura maxima y minima de cada dia//
                    
  let dom = [26, 14];
  let sab = [29, 15];
  let vie = [21, 13];
  let jue = [25, 16];
  let mie = [26, 13];
  let mar = [26, 13];
  let lun = [25, 13];
//Hago otra variable que se llama arrays para que cuando ponga solo el nombre de la variable anterior ya sepa lo que hay en ese array// 
let arrays = [dom, sab, vie, jue, mie, mar, lun];
//Pongo otra variable que se llama totalSum y su valor es de 0, ahi estara la suma de cada dia de la semana//
let totalSum = 0;
//Hago bucle for que recorre la variable arrays del primer dia al ultuimo dia //
for (let start = 0; start<arrays.length; start++){
//Dentro sumo la temperatura maxima y minima de cada dia, se guarda en la variable sum //
  let sum = arrays[start][0] + arrays[start][1];
//Para calcular la media divido la suma anterior que se llama sum entre 2//
  let mean = sum/2;
//Aqui agrupo la suma de las temperaturas medias de cada dia//
  totalSum += mean;
}
//Fuera del bucle hago una variable que se llama totalMean (de media) que sera igual a la suma de todo entre 7 para hacer la media de los 7 dias //
let totalMean = totalSum / 7;
console.log("Aqui te muestro la temperatura media de los ultimos 7 días:");
console.log(totalMean);
}
e4a2();

/* Ejercicio 5 */
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
        }
      });
      console.log(replaceChars);
    }
    let capitalizePrompt = prompt("Capitalize? (y/n)").toLowerCase();
    if (capitalizePrompt === "y") {
      objetos.capitalize = true;
      capitalize = input.replace(/\b\w/g, function (letters) {
        return letters.toUpperCase();
      });
      console.log(capitalize);
    }
    let spacesPrompt = prompt(
      "Replace spaces with commas? (y/n)"
    ).toLowerCase();
    if (spacesPrompt === "y") {
      objetos.replaceSpaces = true;
      replaceSpaces = input.replace(/\s+/g, ",");
      console.log(replaceSpaces);
    }
  }
  stringManager(input);
  console.log(`${arraystring.length} words and ${input.length} chars`);
  console.timeEnd();
};
a2e5();

/* Ejercicio 6 */
const e6a2 = () => {
  const all = () => {
    console.log("Welcome to text statistics program");
    let phrase = prompt("Write here your sentence");
    console.log(phrase);

    let completeLength = phrase.length;
    console.log(`Length: ${completeLength} characters`);

    let noSpaces = phrase.replace(/\s+/g, "").length;
    console.log(`Length without white spaces: ${noSpaces}`);

    let words = phrase.split(" ");
    let wordsNumber = words.length;
    console.log(`Words: ${wordsNumber}`);

    let phraseArray = phrase.split(" ");
    let unWords = new Set(phraseArray);
    let countUnWords = unWords.size;
    console.log(`Unique Words: ${countUnWords}`);

    let unWordsPercentage = (countUnWords / wordsNumber) * 100;
    console.log(`Unique Words(%): ${unWordsPercentage}%`);

    function getShortestWord() {
      let shortest = 0;
      for (let i = 0; i < phraseArray.length; i++) {
        if (phraseArray[i].length < phraseArray[shortest].length) {
          shortest = i;
        }
      }
      return phraseArray[shortest];
    }

    let shortest = getShortestWord();
    console.log(`Shortest Word: ${shortest}`);

    function findLongestWord() {
      var longest = "";

      phraseArray.forEach(function (phraseArray) {
        if (phraseArray.length > longest.length) {
          longest = phraseArray;
        }
      });

      return longest;
    }

    let longest = findLongestWord();
    console.log(`Longest Word: ${longest}`);
  };

  all();
};

/* Ejercicio 7 */

e7a2 = () => {
  let max = 10;
  let min = 0;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(random);
  let answer;
  let tries = 1;

  // Mientras los intentos sean igual o menor que 3, el código sigue funcionando.
  while (tries <= 3) {
    answer = parseInt(prompt("Please, guess the random number."));
    if (answer == random) {
      // si la respuesta y el número random coinciden, mostramos You win! y el break. detiene nuestro código.
      console.log("YOU WIN!!!");
      break;
    } else {
      // si el número no coincide, nuestro código continúa:
      if (3 - tries > 0) {
        // si el número de intentos es mayor que 0, continúa y
        // mostramos en consola los intentos restantes:
        console.log(`You have ${3 - tries} attempts left.`);
      } else {
        // en caso de que el número de intentos sea 0:
        console.log("Sorry, Good luck in love.");
      }
      tries++; //para que cada vez que nuestro código pasa por aquí,
      // se le sume 1 a tries.
    }
  }
};

/* Ejercicio 8 */
const e8a2 = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function generatePassword() {
    let length = parseInt(prompt("Quantity of characters: (min 8, max 16)"));

    if (isNaN(length) || length < 8 || length > 16) {
      alert(
        "Password lenght is not correct. Password will have 8 characters by default."
      );
      length = 8;
    }

    let includeLowercase = confirm("Lowercase?");
    let includeUppercase = confirm("Capital case?");
    let includeNumbers = confirm("Numbers?");
    let includeSymbols = confirm("Signs?");

    if (
      !includeLowercase &&
      !includeUppercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      alert(
        "You have to choose at least one option. The password will be generated with lowercase letters only."
      );
      includeLowercase = true;
    }

    let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numberChars = "0123456789";
    let symbolChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let possibleChars = "";
    if (includeLowercase) {
      possibleChars += lowercaseChars;
    }
    if (includeUppercase) {
      possibleChars += uppercaseChars;
    }
    if (includeNumbers) {
      possibleChars += numberChars;
    }
    if (includeSymbols) {
      possibleChars += symbolChars;
    }

    let password = "";
    let lastChar = "";
    for (let i = 0; i < length; i++) {
      let char = possibleChars.charAt(
        getRandomInt(0, possibleChars.length - 1)
      );
      while (char === lastChar) {
        char = possibleChars.charAt(getRandomInt(0, possibleChars.length - 1));
      }
      password += char;
      lastChar = char;
    }

    alert("Your password is: " + password);
  }
  generatePassword();
};
