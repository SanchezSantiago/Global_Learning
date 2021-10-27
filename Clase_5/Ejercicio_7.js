//Ejercicio 7 - Santiago Sanchez Nieva
const numeros = [9, 5, 10, 2, 24, -1];

function adjacentElementsProduct(array){
  
    let maxProduct = 0, product = 0;
    
    array.forEach(function(item, i){
        
        product = array[i] * array[i + 1];

        if(product > maxProduct){
            maxProduct = product;
        }
    })
    
 
        
        
    
   console.log(maxProduct);
}

adjacentElementsProduct(numeros);

