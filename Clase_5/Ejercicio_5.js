//Ejercicio 5 Sanchez Nieva Santiago
const arrayNum = [1, 1, 1, 1, 1, 2, 1, 1];

function findUniq(array){
   let numDif = array.find((item) =>{ return array.indexOf(item) == array.lastIndexOf(item) })
      
    console.log(numDif);
}

findUniq(arrayNum);

