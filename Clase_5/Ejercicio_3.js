//Ejercicio 3 - Sanchez Nieva Santiago

var array_Num = [0, 1, 2, 3, 4, 5];

function addNumber(num, array){

    array.forEach(function(item, i){array[i] += num});
    
    }


console.log("\t*****Funcion no aplicada*****");
console.log(array_Num);

console.log("\n\t*****Funcion aplicada*****");
addNumber(20, array_Num);
console.log(array_Num);
