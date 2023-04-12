/*const randomNumbers = (max, min) => {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
};*/

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
