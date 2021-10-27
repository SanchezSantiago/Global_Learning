//Ejercicio 3 - Sanchez Nieva Santiago

const numeros = [0, 1, 2, 3, 4, 5];

const addNumber = (array, num) => array.forEach((item, i)=>{array[i] += num});
    
addNumber(numeros, 5);
console.log(numeros);

