const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

//Ejercicio 1, algoritmos 3//

const e1a3 = () => {    
    //Pongo parseInt antes del prompt para que lo que ponga el usuario sea un numero//

    let max = parseInt(prompt("Introduzca un valor máximo: "));

    while (isNaN(max)){
      max = (prompt("introduce un numero!"))
    }

    let min = parseInt(prompt("Introduzca un valor mínimo: "));
    
    //Pongo dos bugles while con (isNaN(min)) y (isNaN(max)) para que si el usuario pone cualquier cosa que no sea un numero le salga un mensaje que sea "introduce un numero!"//

    while (isNaN(min)){
      min = (prompt("introduce un numero!"))
    }

    //Pongo randomNumbers y el array vacio para queel usuario pueda poner cualquier numero aleatorio//

    let randomNumbers = [];
    
    //pongo bucle for para que se puedan generar 20 numeros aleatorios//

    for (let start = 0; start < 20; start++) {

      //pongo la variable randomNum (es diferente a la que hay antes del bucle for) para que el usuario ponga tanto en min como en max cualquier numero aleatorio//
      //Math.floor redondea el numero aleatorio//
      //Math.random() me da numero aleatorio entre 0 y 1  luego con * multiplica  este numero por la diferencia entre valor max y min, asi tengo un numero cualquiera entre 0 y la diferencia entre max y min//
      //Cuando pongo el valor min, los numeros se ajustan al los limites max min que ponga el usuario// 

      let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
       
     //randomNumbers.push(randomNum); me almacena los numeros aleatorios para despues tener el valor minimo y el maximo//

      randomNumbers.push(randomNum);
    }

    //Pongo console.log(randomNumbers); para que salgan los 20 numeros aleatorios en la consola//
    
    console.log(randomNumbers);

    //Pongo Math.min(...randomNumbers) y Math.max(...randomNumbers) para que me diga el minimo y el maximo que hay entre los 20 numeros que salen que estan dentro de randomNumbers//
    
    let minValue = Math.min(...randomNumbers);

    let maxValue = Math.max(...randomNumbers);
    
    //Pongo dentro de console.log (`min value: ${minValue}`) y (`max value: ${maxValue}`) para que salga en la consola en numero más pequeño y más grande //

    console.log("Aqui te dejo el valor minimo y maximo de los numero que has elegido :");

    console.log(`min value: ${minValue}`);

    console.log(`max value: ${maxValue}`);
  };
 // e1a3();

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

//Ejercicio 6  algoritmos 3//

const e6a3 =() =>{

//Pongo una variable que que se llama frases y dentro hay un array con todas las frases de canciones famosas//
  let frases = [

    "Yesterday, all my troubles seemed so far away",

    "Don't stop believin', hold on to that feelin'",

    "I will always love you",

    "Like a virgin, touched for the very first time",

    "I wanna dance with somebody, I wanna feel the heat with somebody",

    "I'm a survivor, I'm not gon' give up",

    "I want to hold your hand",

    "We will rock you",

    "Every breath you take, every move you make, I'll be watching you",

    "I'm a genie in a bottle, you gotta rub me the right way",

    "What a wonderful world",

    "I will survive, hey hey",

    "I can't help falling in love with you",

    "All you need is love",

    "I don't want to miss a thing",

    "Cause baby you're a firework, come on show 'em what you're worth" ,

    "My heart will go on and on" ,

    "Eve ry time we touch, I get this feeling" ,

    "It's the eye of the tiger, it's the thrill of the fight" ,

    "I believe I can fly",
  ];

//Hago una funcion que se llama randomnumber que tiene dos parametros (max, min) que me da un numero aleatorio dentro de max, min//
const randomNumber = (max, min) => 
//Pongo Math.floor(Math.random() * (max - min +1)) + min; para que me pueda dar una frase aleatori dentro de las que hay en el array //
Math.floor(Math.random() * (max - min +1)) + min;

//Hago dos variables para especificar que la variable unSegundo sea = 1000, y la variable minuto sea = unSegundo * 60//

let unSegundo = 1000;
let minuto = unSegundo * 60;

let id = setInterval(() => {
  //Hago la variable id que tiene dentro setInterval //
  //El console.log me especifica con el setInterval(que es para comenzar) que quiero sacar de la variable frases una frase random que hay dentro del array//
  console.log(frases[randomNumber(frases.length -1, 0)]);
  //con unSegundo * 10) especifico que como un seg es igual a 1000 quiero que  unSegundo se multiplique por 10 para que se genere una frase aleatoria cada 10seg//
}, unSegundo * 10);
//Con setTimeout le digo que quiero que termine de darme frases aleatorias //
setTimeout(() => {
  clearInterval(id);
}, minuto * 2);
}

//e6a3();

  //Ejercico 6 algoritmos 3//

 /* const e6a3 = () => {

//Aqui pongo la variable vinos donde dentro hay un array y 20 tipos de vinos con los platos adecuados para acompañar//

  let vinos = [
     //Aqui pongo un array de objeto por eso esta entre {}, dentro hay nombre y comida//

    {nombre: "Cabernet Sauvignon", 
     comida:  "carne roja, especialmente chuletón, costillas y asados."
    },
   

    {nombre: "Merlot",
     comida: "platos de carne roja, cerdo y aves de corral."
    },


    {nombre: "Pinot Noir", 
     comida: "carnes de caza, cordero y platos de salmón."  
    },


    {nombre: "Chardonnay",  
     comida: "platos de mariscos, especialmente camarones y langosta, así como con pollo y cerdo."
    },


    {nombre: "Sauvignon Blanc", 
     comida: "ensaladas, pescado y mariscos."
    },


    {nombre: "Riesling", 
     comida: "comida picante, como la cocina asiática y mexicana."
    },


    {nombre: "Syrah",  
     comida: "cordero y carne de res."
    },


    {nombre: "Zinfandel", 
     comida: "carne a la parrilla, especialmente barbacoa y costillas."
    },


    {nombre: "Malbec", 
     comida: "carne asada, especialmente chuletón y costillas."
    },


    {nombre: "Pinot Grigio", 
     comida: "mariscos, especialmente ostras, y platos de pollo y cerdo."
    },


    {nombre: "Tempranillo",
     comida: "cerdo, ternera y cordero."
    },


    {nombre: "Sangiovese", 
     comida: "pasta con salsa de tomate, pizza y platos de carne roja."
    },


    {nombre: "Vermentino", 
     comida: "pescado y mariscos, especialmente con platos de gambas y mejillones."
    },


    {nombre: "Garnacha",  
     comida: "carne a la parrilla, especialmente chuletón y costillas."
    },


    {nombre: "Chianti",
     comida: "pasta y platos de carne roja, especialmente ternera."
    },


    {nombre: "Viognier", 
     comida: "pollo y cerdo, así como con platos de comida picante."
    },
    

    {nombre: "Nebbiolo", 
     comida: "pasta con salsa de carne y platos de caza."
    },


    {nombre: "Muscadet", 
     comida: "mariscos y pescado, especialmente con ostras y mejillones."
    },
    

    {nombre: "Gewürztraminer", 
     comida: "comida picante, especialmente la cocina asiática y mexicana."
    },


    {nombre: "Cabernet Franc" ,
     comida: "chuletón y costillas."
    },
  ];

//Aqui pongo una funcion que se llama mostrarAleatorio, la funcion me da aleatoriamente un objeto del array vinos//
//Utilizo Math.floor y Math.random para que cuando ponga el console.log me pueda dar un vino y una comida en la consola//

function mostrarAleatorio() {

  let randomVino = vinos [Math.floor(Math.random() * vinos.length)];

  console.log(` ${randomVino.nombre} con:  ${randomVino.comida}`);
};

//Hago una variable y dentro pongo setInterval(entre los parentesis pongo el nombre de la funcion, y cada cuanto tiempo quiero que se ejecute ) tiene que ir en milisegundos//

let interval = setInterval(mostrarAleatorio, 10000);
 
//Pongo setTimeout para detener la funcion motrarAleatorio en el tiempo que yo haya puesto en este caso 2 min (120000 hay que ponerlo en milisegundos)

setTimeout(() => clearInterval(interval), 120000);
 };
  e6a3();*/

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
