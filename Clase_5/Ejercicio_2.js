//Ejercicio 2 - Sanchez Nieva Santiago
const frutas = ['Manzana','Pera','Banana','Melon','Kiwi'];
const numeros = [0, 1, 2, 3, 4, 5];
const arrayChico = [0, 1, 2, 3];

function deleteLastThreeElement(array){
    if(array.length > 5){
        array.length = array.length - 3;
        console.log(array);
    }
    else{
        console.log("[ERROR]: Solo son admitidos arrays con mas de 5 elementos");
    }
}

console.log("\t*****Funcion no aplicada*****");

console.log(frutas);
console.log(numeros);
console.log(arrayChico);

console.log("\n\t*****Funcion aplicada*****");


deleteLastThreeElement(frutas);
deleteLastThreeElement(numeros);
deleteLastThreeElement(arrayChico);