e2a2 = () => {
  let quote = "No lemon, no melon";
  console.log(quote);

  // he creado una función con mi código que convierte una frase
  // en un array, invierte el orden de las letras y las vuelve a
  // convertir en un string sin comas separando los elementos.

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




