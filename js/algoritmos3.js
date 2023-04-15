const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

/* Ejercicio 2 */
const a3e2 = () => {
  /* esto nos da la hora del sistema */
  let systemTime = new Date();
  let hour = systemTime.getHours();
  /* Pedimos el nombre al usuario */
  let userName = prompt("What's your name?");
  /* los saludos predefinidos */
  const greeting = {
    morning: "Good Morning",
    afternoon: "Good Afternoon",
    evening: "Good Evening",
  };
  /* los if con los horarios y saludo correspondiente */
  if (hour >= 5 && hour <= 11) {
    alert(`${greeting.morning}, ${userName}!`);
  } else if (hour >= 12 && hour <= 17) {
    alert(`${greeting.afternoon}, ${userName}!`);
  } else {
    alert(`${greeting.evening}, ${userName}!`);
  }
};

/* Ejercicio 3 */
const e3a3 = () => {
  const randomHexGenerator = () => {
    let colorGenerator = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + colorGenerator.slice(0, 6);
  };

  let hexCodes = [];
  for (let i = 0; i < 10; i++) {
    let codes = randomHexGenerator();
    hexCodes.push(codes);
  }
  console.log(hexCodes);

  let randomIndex = Math.floor(Math.random() * hexCodes.length);
  let randomCodeSelector = hexCodes[randomIndex];
  console.log(randomCodeSelector);

  console.log("%cHello World!", "color: " + randomCodeSelector);
};

/* Ejercicio 5 */
const a5e3 = () => {
  let userQuestion = parseInt(prompt("¿Cuántas matrículas quieres generar?"));
  for (let i = 0; i < userQuestion; i++) {
    let randomNumber = Math.floor(Math.random() * 10000);
    let numberGenerator = randomNumber.toString().padStart(4, "0");
    function letterGenerator() {
      let letterGenerated = "";
      let characters = "BCDFGHJKLMNPRSTVWXYZ";
      let charactersLength = characters.length;
      let counter = 0;
      while (counter < 3) {
        letterGenerated += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter++;
      }
      return letterGenerated;
    }
    console.log(numberGenerator + letterGenerator());
  }
};

/* Ejercicio 7 */
const a3e7 = () => {
  let numerosAleatorios = [];
  for (let i = 0; i < 100; i++) {
    let numAleatorio = randomNumbers(500, 0);
    numerosAleatorios.push(numAleatorio);
  }
  console.log(numerosAleatorios);
  let pares = numerosAleatorios.filter(function (num) {
    return num % 2 == 0;
  });
  console.log(pares);
  let orden = pares.sort((a, b) => b - a);
  console.log(orden);
};

/* Ejercicio 8 */
const e8a3 = () => {
  function generateMoves() {
    let suits = ["clubs", "hearts", "spades", "diamonds"];
    let cards = [
      "ACE",
      "KING",
      "QUEEN",
      "JACK",
      "10",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
    ];

    function randomCard() {
      let randomCardNumber = Math.random();
      let randomCardIndex = Math.floor(randomCardNumber * cards.length);
      let randomCardOutput = cards[randomCardIndex];
      return randomCardOutput;
    }

    function randomSuit() {
      let randomSuitNumber = Math.random();
      let randomSuitIndex = Math.floor(randomSuitNumber * suits.length);
      let randomSuitOutput = suits[randomSuitIndex];
      return randomSuitOutput;
    }

    let playerSuit = randomSuit();
    let playerCard = randomCard();
    let playerMove = `${playerCard} of ${playerSuit}`;

    let houseSuit = randomSuit();
    let houseCard = randomCard();
    let houseMove = `${houseCard} of ${houseSuit}`;

    return {
      playerMove: playerMove,
      houseMove: houseMove,
    };
  }

  let initialBalance = 500;
  console.log(`Player initial balance: ${initialBalance}`);
  let newBalance = initialBalance;
  let playerBet;
  let question;
  let game = true;

  do {
    playerBet = parseInt(prompt("Introduce your bet:"));
    console.log(`Player bet is: ${playerBet}`);

    if (playerBet > newBalance) {
      console.log("Your bet exceeds your balance");
      game = false;
    } else if (playerBet <= newBalance) {
      console.log(`Money in the bank: ${newBalance}`);

      let moves = generateMoves();
      console.log(`Player rolls: ${moves.playerMove}`);
      console.log(`House rolls: ${moves.houseMove}`);

      if (moves.playerMove > moves.houseMove) {
        console.log("Player wins this move");
        newBalance += playerBet;
        console.log(`Player wins`);
        console.log(`Money in the bank: ${newBalance}`);
      } else if (moves.playerMove < moves.houseMove) {
        console.log("The house wins this move");
        newBalance = newBalance - playerBet;
        if (newBalance <= 0) {
          console.log("You don't have enough money to bet");
          break;
        }
        console.log(`Player loses ${playerBet}`);
        console.log(`Money in the bank: ${newBalance}`);
      } else if (moves.playerMove == moves.houseMove) {
        console.log("Draw!");
        console.log(`Money in the bank: ${newBalance}`);
      }

      question = prompt("Do you want to play another move?: (y/n)");
      if (question === "y") {
        game = false;
      } else if (question === "n") {
        console.log(`Your actual balance is ${newBalance}`);
        console.log("Benefits: " + (newBalance - initialBalance));
        game = true;
      }
    }
  } while (game == false);
};
