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
