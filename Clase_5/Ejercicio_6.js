//Ejercicio 6 - Sanchez Nieva Santiago
const numeros = [7, 4, 2, 3];

function minSum(array){
    array.sort(function(a,b){ return a - b});
    let sumMin = Infinity, suma = 0;
    array.forEach(function(item, i){
        suma = array[i] + array[i + 1]
        if(suma < sumMin){
            sumMin = suma;
        }
    })
    console.log(sumMin);
}

minSum(numeros);

