/*const randomNumbers = (max, min) => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
};*/

/* Parte Criss */
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

/* Parte Alex */
/* Teniendo en cuenta las siguientes temperaturas:
• Absolute Zero → -273.15°C
• Freezing point → 0°C
• Body Temperature → 37°C
• Boiling point → 100°C
Escribe un programa que convierta estas 
temperaturas a Fahrenheit (mediante la estructura
switch). ** Buscar la fórmula en Google** */

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
/* console.log(a1e5()); */

/* Investiga el objeto Math, y genera 2 números aleatorios, 
entre 1 y 6, para simular un juego de dados.
Comprueba los resultados obtenidos y muestra 
por consola el ganador. Por ejemplo: “Player 1
wins!”, o “draw”, en caso de empate. */

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
/* console.log(a1e10()); */

