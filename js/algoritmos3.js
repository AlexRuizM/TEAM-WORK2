e4a3 = () => {
  // Lo primero que necesitamos es que el usuario introduzca su DNI:
  let dniUser = prompt("DNI Identification: ");
  /*   console.log(dniUser); */
  // Para poder validar el DNI, tenemos que quitarle la letra del final
  // y dejar solo el número. Para ello vamos a convertir dniUser
  // en un array y le vamos a quitar el último elemento:

  let dniArray = Array.from(dniUser);
  dniArray.pop();
  /*   console.log(dniArray); */

  // Ahora necesitamos que dniArray vuelva a ser un número o string:

  let dniNumber = dniArray.join("");
  /*   console.log(dniNumber); */

  // Para validar el DNI tenemos que conseguir el resto de dividir el
  // número entre 23:

  let dniResto = dniNumber % 23;
  /*   console.log(dniResto); */

  // Una vez que tenemos el resto, hay que comprobar a qué letra de la tabla
  // corresponde. Si el número (dniResto) coincide con su letra, el dni es válido.

  let letter;

  switch (dniResto) {
    case 0:
      letter = "T";
      break;
    case 1:
      letter = "R";
      break;
    case 2:
      letter = "W";
      break;
    case 3:
      letter = "A";
      break;
    case 4:
      letter = "G";
      break;
    case 5:
      letter = "M";
      break;
    case 6:
      letter = "Y";
      break;
    case 7:
      letter = "F";
      break;
    case 8:
      letter = "P";
      break;
    case 9:
      letter = "D";
      break;
    case 10:
      letter = "X";
      break;
    case 11:
      letter = "B";
      break;
    case 12:
      letter = "N";
      break;
    case 13:
      letter = "J";
      break;
    case 14:
      letter = "Z";
      break;
    case 15:
      letter = "S";
      break;
    case 16:
      letter = "Q";
      break;
    case 17:
      letter = "V";
      break;
    case 18:
      letter = "H";
      break;
    case 19:
      letter = "L";
      break;
    case 20:
      letter = "C";
      break;
    case 21:
      letter = "K";
      break;
    case 22:
      letter = "E";
      break;
  }

  /* console.log(letter); */
  // Una vez que tenemos la letra que corresponde al resto, tenemos
  // que compararlo con el DNI original del usuario. Para ello vamos a
  // poner la letra obtenida al final de nuestro dniArray. En caso de que el
  // dniUser sea igual al dniCheck, el DNI será válido.

  dniArray.push(letter);
  dniValid = dniArray.join("");
  /* console.log(dniCheck); */

  if (dniValid == dniUser) {
    console.log("Valid DNI.");
  } else {
    console.log("The data entered is wrong.");
  }
};

e9a3 = () => {
  // Quiero un programa que cifre o descifre un mensaje y muestre el contrario por la consola. Tiene que ser una función con dos parámetros, el primero para indicar si hay que cifrar o descifrar, y el segundo para el mensaje.
  // Tengo que usar unicode y ASCII table. ASCII (American Standard Code for Information Interchange). En esa tabla, cada letra del alfabeto tiene un valor numérico.

  // 1º Creamos una función cuyo parámetro es el mensaje que queremos cifrar.
  // 2º Establecemos una variable que almacenará el resultado: encrypted.
  // 3º Creamos un bucle for que recorra el mensaje.
  // 4º Creamos una variable que almacene el mensaje, cambiando cada una de las letras o símbolos por su correspondiente valor numérico en la tabla ASCII, y le sumamos 3 posiciones (he añadido la variable rule para poder modificar el número de posiciones).
  // 5º Nuestra variable encrypted ahora es igual a un string formado con los valores numéricos de la tabla ASCII. Sale un mensaje cifrado porque cada letra se ha desplazado 3 posiciones en la tabla y probablemente ya no tiene sentido el mensaje.
  // 6º Pedimos a la función que nos devuelva la variable encrypted.
  // 7º Repetimos el proceso a la inversa en otra función para descifrar en lugar de cifrar.

  function encrypt(message) {
    let encrypted = "";
    rule = 3;
    for (let start = 0; start < message.length; start++) {
      let code = message[start].charCodeAt(0) + rule;
      encrypted += String.fromCharCode(code);
    }
    return encrypted;
  }
  function decrypt(message) {
    let decrypted = "";
    rule = 3;
    for (let start = 0; start < message.length; start++) {
      let decode = message[start].charCodeAt(0) - rule;
      decrypted += String.fromCharCode(decode);
    }
    return decrypted;
  }

  // Ya tenemos una función para cifrar y otra para descifrar. Ahora tenemos que crear una función con 2 parámetros. El primero para indicar si hay que cifrar o descifrar el mensaje (true or false). El segundo para el texto o mensaje.

  function cesarEncryption(cipher, message) {
    let result = "";
    if (cipher == true) {
      result = encrypt(message);
    } else {
      result = decrypt(message);
    }
    return result;
  }

/* let message = "Hola Mundo!";
let cipher = true;  */
/* let message = "Krod#Pxqgr$";
let cipher = false;  */

  console.log(cesarEncryption(cipher, message));
};

