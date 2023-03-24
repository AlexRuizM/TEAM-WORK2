
 //Ejercicio 4, algoritmos 2//


const e4a2 =() => {
  //Pongo una variable (por cada dia de la semana) que sera de array y dentro tiene la temperatura maxima y minima de cada dia//
                    
  let dom = [26, 14];
  let sab = [29, 15];
  let vie = [21, 13];
  let jue = [25, 16];
  let mie = [26, 13];
  let mar = [26, 13];
  let lun = [25, 13];
//Hago otra variable que se llama arrays para que cuando ponga solo el nombre de la variable anterior ya sepa lo que hay en ese array// 
let arrays = [dom, sab, vie, jue, mie, mar, lun];
//Pongo otra variable que se llama totalSum y su valor es de 0, ahi estara la suma de cada dia de la semana//
let totalSum = 0;
//Hago bucle for que recorre la variable arrays del primer dia al ultuimo dia //
for (let start = 0; start<arrays.length; start++){
//Dentro sumo la temperatura maxima y minima de cada dia, se guarda en la variable sum //
  let sum = arrays[start][0] + arrays[start][1];
//Para calcular la media divido la suma anterior que se llama sum entre 2//
  let mean = sum/2;
//Aqui agrupo la suma de las temperaturas medias de cada dia//
  totalSum += mean;
}
//Fuera del bucle hago una variable que se llama totalMean (de media) que sera igual a la suma de todo entre 7 para hacer la media de los 7 dias //
let totalMean = totalSum / 7;

console.log("Aqui te muestro la temperatura media de los ultimos 7 días:");

console.log(totalMean);



}

e4a2();
  
  
  
  
  


