
    //Ejercicio 3, algoritmos 1//
    
    const e3a1 = () => {
      let temperatura = prompt("¿Cual es la temperatura exterior?");
    
      if (isNaN(temperatura)){

        alert("Debe poner un valor numerico");

      } else if (temperatura < 15) {

        alert("Warm up")

      } else if (temperatura >= 15 && temperatura <= 25) {

        alert("Enjoy the weather!");

      } else if (temperatura >25) {
         
    alert("Cool down")


      }

      
    }
    
    e3a1();


//Ejercicio 8, algoritmos 1//


    const e8a1 = () => {

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
    
    e8a1();