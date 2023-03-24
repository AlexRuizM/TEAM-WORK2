
    //Ejercicio 3, algoritmos 1//
    
    const e3a1 = () => {
      //Hago una variable con el nombre temperatura y con el prompt le preguntará al usuario cual es la temperatura//
      let temperatura = prompt("¿Cual es la temperatura exterior?");
    //en el if con el isNAN le digo que si la temperatura que pone el usuario NO es un numero, debera poner que tiene que poner un valor numerico (eso lo hago con el alert)//
      if (isNaN(temperatura)){

        alert("Debe poner un valor numerico");
    //si la temperatura es menor que 15 saldra por consola "Warm up"//
      } else if (temperatura < 15) {

        alert("Warm up")
    //pero si es mayor o igual que 15 y menor o igual que 25 saldra por consola "Enjoy the weather!"//
      } else if (temperatura >= 15 && temperatura <= 25) {

        alert("Enjoy the weather!");
    //Y si la temperatura es mayor que 25 saldra por consola "Cool down"//
      } else if (temperatura >25) {
         
    alert("Cool down")


      }

      
    }
    
    //e3a1(); 


//Ejercicio 8 algoritmos  1//

const e8a1 = () =>{
//Creo una constante que se llama calcu, tippo objeto por eso pongo {}, dentro hago las funciones que quiero //
const calcu = {



  suma: function (num1, num2){

    let resultado = num1 + num2;

    return resultado;
  },

  resta: function (num1, num2){

    let resultado = num1 - num2;

    return resultado;
  },

  multi: function (num1, num2){

    let resultado = num1 * num2;

    return resultado;
  },

  divi: function (num1, num2){

    let resultado = num1 / num2;

    return resultado;
  },
operation: -1,
  options: ["suma", "reata", "multi", "divi"],

num1: undefined, 
num2: undefined,
};
console.log("CALCULADORA");










}

e8a1();











//Ejercicio 8, algoritmos 1//


    const e6a1 = () => {

      const loginData = {
  
        email: "tolkien@lordofrings.com",
        password: "aNBR6ZeWPY",
        attempts: 3
  
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
    }
    
   //e6a1();  