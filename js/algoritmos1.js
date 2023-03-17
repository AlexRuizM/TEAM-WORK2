const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

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


