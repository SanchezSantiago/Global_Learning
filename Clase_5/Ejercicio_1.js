//Ejercicio 1 - Santiago Sanchez Nieva

const frutas = ['Manzana','Pera','Banana','Melon','Kiwi'];
const numeros = [1, 2, 3, 4, 5];

function deleteFirstElement(array){
    array.shift();
    console.log(array);
}

console.log("\t*****Funcion no aplicada*****")
console.log(frutas);
console.log(numeros);


//Llamado de las funciones
console.log("\n\t*****Funcion aplicada*****")
deleteFirstElement(frutas);
deleteFirstElement(numeros);
