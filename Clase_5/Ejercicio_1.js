//Ejercicio 1 - Santiago Sanchez Nieva

const frutas = ['Manzana','Pera','Banana','Melon','Kiwi'];
const numeros = [1, 2, 3, 4, 5];

const deleteFirstElement = (array) => {array.shift(); return array;};

console.log(deleteFirstElement(frutas));
console.log(deleteFirstElement(numeros));
