//Ejercicio 2 - Sanchez Nieva Santiago
const frutas = ['Manzana','Pera','Banana','Melon','Kiwi','Sandia'];

const deleteLastThreeElement = (array) => {
    if(array.length > 5){ 
    array.length = array.length - 3;
    console.log(array);
    } 
    else {console.log("[Error]: Solo arrays con mas de 5 elementos");}
}

deleteLastThreeElement(frutas);

