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

}


let moneda = prompt("Escriba qué conversión quiere realizar: Dólar americano, Yen japonés, Libra esterlina o Franco suizo.")
let cantidad = prompt("Escriba la cantidad a convertir (en euros:)")

switch (moneda) {
    case "value":
        console.log("message");
        break;
    case "value":
        console.log("message");
        break;

    default:
        console.log("message");
        break;
}
