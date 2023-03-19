
 //Ejercicio 4, algoritmos 2//


const e4a2 =() => {
                    
  let dom = [26, 14];
  let sab = [29, 15];
  let vie = [21, 13];
  let jue = [25, 16];
  let mie = [26, 13];
  let mar = [26, 13];
  let lun = [25, 13];

let arrays = [dom, sab, vie, jue, mie, mar, lun];

let totalSum = 0;

for (let start = 0; start<arrays.length; start++){
  
  let sum = arrays[start][0] + arrays[start][1];

  let mean = sum/2;

  totalSum += mean;
}

let totalMean = totalSum / 7;

console.log("Aqui te muestro la temperatura media de los ultimos 7 días:");

console.log(totalMean);



}

e4a2();
  
  
  
  
  


