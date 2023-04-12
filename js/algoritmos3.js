const randomNumbers = (max, min) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

/* 2. Ejercicio
Escribe un programa que recoge la hora del sistema, 
y al cargar la página pregunta al usuario su
nombre. A continuación, muestra un saludo 
personalizado (alerta) en función de la hora, 
teniendo
en cuenta los siguientes rangos:
• Entre las 5:00 y las 11:59 → 
“Good Morning, {userName}!”
• Entre las 12:00 y las 17:59 → 
“Good Afternoon, {userName}!”
• Entre las 18:00 y las 04:59 → 
“Good Evening, {userName}!”
Los saludos deberán estar predefinidos en un objeto 
con el identificador “greeting”. */

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
console.log(a3e2());
/* 3. Ejercicio 
*/

const a3e3 = () => {
  for (let index = 0; index < 10; index++) {
    let color = /^[0-9A-Z]{6}$/g;
    
  }
  
  
  
};
console.log(a3e3());


/* 7. Ejercicio
Escribe un programa que genera 100 números aleatorios, 
entre 0 y 500, y los almacena en un array.
A continuación filtra todos los números impares, 
ordenando los pares de mayor a menor. */

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
/* console.log(a3e7()); */
