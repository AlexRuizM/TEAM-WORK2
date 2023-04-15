const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

/* Ejercicio 1 */
const e1a1 = () => {
  let month = new Date(Date.now()).toLocaleString("en", { month: "long" });
  console.log(month);

  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      console.log(`${month} has 31 days`);
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      console.log(`${month} has 30 days`);
      break;
    default:
      console.log("February has 28 days");
      break;
  }
};

/* Ejercicio 2 */

const e2a1 = () => {
  // preguntamos al usuario por un mes a través del prompt:
  let month = prompt("What month are we talking about?");

  /* el programa me da el mensaje de error si el usuario no escribe 
el mes exactamente igual, con la primera letra en mayúscula. 
Para evitar el error quiero convertir la primera letra del string 
a mayúsculas cuando el usuario la escriba en minúsculas: 
    month[0] obtiene el primer caracter del string.
    .toUpperCase() convierte la primera letra en mayúscula.
    .slice(1) devuelve un nuevo string que comienza desde el segundo 
    caracter, es decir, si month = "enero"  month2 = "Enero" */

  let month2 = month[0].toUpperCase() + month.slice(1);

  if (
    month2 == "January" ||
    month2 == "March" ||
    month2 == "May" ||
    month2 == "July" ||
    month2 == "August" ||
    month2 == "October" ||
    month2 == "December"
  ) {
    console.log(month2 + ` has 31 days.`);
  } else if (
    month2 == "April" ||
    month2 == "June" ||
    month2 == "September" ||
    month2 == "November"
  ) {
    console.log(month2 + ` has 30 days.`);
  } else if (month2 == "February") {
    console.log(month2 + ` has 28/29 days (depending on leap year.)`);
  } else {
    alert("That's not a real month!");
  }
};

//Ejercicio 3, algoritmos 1//

const e3a1 = () => {
  //Hago una variable con el nombre temperatura y con el prompt le preguntará al usuario cual es la temperatura//
  let temperatura = prompt("¿Cual es la temperatura exterior?");
  //en el if con el isNAN le digo que si la temperatura que pone el usuario NO es un numero, debera poner que tiene que poner un valor numerico (eso lo hago con el alert)//
  if (isNaN(temperatura)) {
    alert("Debe poner un valor numerico");
    //si la temperatura es menor que 15 saldra por consola "Warm up"//
  } else if (temperatura < 15) {
    alert("Warm up");
    //pero si es mayor o igual que 15 y menor o igual que 25 saldra por consola "Enjoy the weather!"//
  } else if (temperatura >= 15 && temperatura <= 25) {
    alert("Enjoy the weather!");
    //Y si la temperatura es mayor que 25 saldra por consola "Cool down"//
  } else if (temperatura > 25) {
    alert("Cool down");
  }
};
//e3a1();

/* Ejercicio 4 */
const e4a1 = () => {
  let isGreen = false;

  setInterval(() => {
    isGreen = !isGreen;
    if (isGreen) {
      console.log("It's green");
      console.log("Cross the road");
    } else {
      console.log("It's red");
      console.log("Please wait");
    }
  }, 2000);
};

/* Ejercicio 5 */
const a1e5 = () => {
  function convertToFahrenheit(temperatura, escala) {
    switch (escala) {
      case "C":
        temperatura = temperatura * 1.8 + 32;
        break;
      case "F":
        break;
      default:
        console.log("Grados invalidos");
        break;
    }
    console.log(`Esta es la temperatura en grados: ${temperatura}°F`);
    return;
  }
  convertToFahrenheit(-273.15, "C");
  convertToFahrenheit(0, "C");
  convertToFahrenheit(37, "C");
  convertToFahrenheit(100, "C");
};

/* Ejercicio 6 */
const e6a1 = () => {
  let email = "tolkien@lordofrings.com";
  let password = "aNBR6ZeWPY";
  let userEmail = prompt("Write here your email: ");
  let userPassword = prompt("Write your password: ");

  if (userEmail == email && userPassword == password) {
    console.log("Welcome Mr.Tolkien");
  } else {
    console.log("Wrong password or email");
  }
};

//Ejercicio 6, algoritmos 1//

/*const e6a1 = () => {
  const loginData = {
    email: "tolkien@lordofrings.com",
    password: "aNBR6ZeWPY",
    attempts: 3,
  };

  while (loginData.attempts > 0) {
    const email = prompt("Escribe tu email: ");

    const password = prompt("Escribe tu contraseña: ");

    if (email === loginData.email && password === loginData.password) {
      alert("Welcome Mr.Tolkien");
      break;
    } else {
      alert("Wrong email or password, intentelo  más tarde.");
      loginData.attempts--;
    }
  }
};
//e6a1();
*/

/* Ejercicio 7 */

const e7a1 = () => { 

let moneda = prompt(
  "Escriba qué conversión quiere realizar: Dólar americano, Yen japonés, Libra esterlina o Franco suizo."
);
let cantidad = prompt("Escriba la cantidad a convertir (en euros:)");
let dolar = cantidad * 1.061;
let yen = cantidad * 139.914;
let libra = cantidad * 0.871;
let franco = cantidad * 0.979;

switch (moneda) {
  case "Dólar americano":
    console.log(cantidad, `euros equivalen a `, dolar, ` dólares americanos.`);
    break;
  case "Yen japonés":
    console.log(cantidad, `euros equivalen a `, yen, ` yen japoneses.`);
    break;
  case "Libra esterlina":
    console.log(cantidad, `euros equivalen a `, libra, ` libras esterlinas.`);
    break;
  case "Franco suizo":
    console.log(cantidad, `euros equivalen a `, franco, ` francos suizos.`);
    break;

  default:
    console.log("Por favor, introduzca una conversión válida.");
    break;
}

}

//Ejercicio 8 algoritmos  1//

const e8a1 = () => {
  //Hago tres constantes para pedirle al usuario dos numeros y que operacion quiere hacer
  const num1 = parseFloat(prompt("Introduce un número: "));
  const num2 = parseFloat(prompt("Introsuce un número: "));
  const operacion = prompt(
    "Introduce una operación(suma, resta, multi, divide): "
  );
  //Hago una variable que sera para almacenar todos los resultados
  let resultado;
  //pongo un switch para que se realice la operacion que haya elegido el usuario
  switch (operacion) {
    case "suma":
      resultado = num1 + num2;
      break;
    case "resta":
      resultado = num1 - num2;
      break;
    case "multi":
      resultado = num1 * num2;
      break;
    case "divide":
      resultado = num1 / num2;
      break;
    default:
      console.log("Operacion no valida");
  }
  //Pongo un if para ver si la variable resultado tiene algo, pongo (resultado !== undefined) para que si el 
  //resultado no es undefined(si tiene algo) se ejecuta en el siguiente console.log

  if (resultado !== undefined) {
    console.log(`${operacion} entre ${num1} y ${num2} es: ${resultado}`);
  }
};
//e8a1();

/* Ejercicio 9 */

const e9a1 = () => {
  let document = prompt("Introduzca su DNI/NIE");
  let expresionRegularNie = /^[XT]\d{7}[A-Z]$/;
  let expresionRegularDni = /^\d{8}[A-Z]$/;

  if (expresionRegularDni.test(document)) {
    console.log("El DNI es válido");
  } else if (expresionRegularNie.test(document)) {
    console.log("El NIE es válido");
  } else {
    console.log("introduzca un DNI/NIE válido");
  }
};

/* Ejercicio 10 */

const a1e10 = () => {
  let num1 = randomNumbers(6, 1);
  let num2 = randomNumbers(6, 1);
  console.log(`Nº del Jugador 1: ${num1}`);
  console.log(`Nº del Jugador 2: ${num2}`);
  if (num1 == num2) {
    console.log(`Es un empate!`);
  } else if (num1 > num2) {
    console.log(`Jugador 1 GANASSSSSSS!`);
  } else {
    console.log(`Jugador 2 GANASSSSSSS!`);
  }
};
