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

