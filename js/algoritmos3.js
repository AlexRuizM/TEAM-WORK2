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
// dniUser sea igual al dniCheck, e, DNI será válido.

dniArray.push(letter);
dniValid = dniArray.join("");
/* console.log(dniCheck); */


if (dniValid == dniUser) {
  console.log("Valid DNI.");
} else {
  console.log("The data entered is wrong."); 
} 
 
};

e4a3();