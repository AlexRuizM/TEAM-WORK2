


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

    console.log("Aqui te dejo el valor minimo y maximo de los numero que has eleguido :");

    console.log(`min value: ${minValue}`);

    console.log(`max value: ${maxValue}`);
   
  };
  
  e1a3();




  //Ejercico 6 algoritmos 3//

  const e6a3 = () => {

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
  e6a3();

