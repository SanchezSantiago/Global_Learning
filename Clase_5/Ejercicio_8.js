//Ejercicio 8 - Santiago Sanchez Nieva

const rebaño = ['sheep', 'sheep', 'sheep', 'sheep', 'wolf','sheep'];

function warnTheSheep (array){
    

    let ubicationOfWolf = array.indexOf('wolf');
        
        if(array[ubicationOfWolf + 1] == 'sheep'){
            array.reverse();
            let oveja_cuidado = array.indexOf('wolf');
             console.log("Hey! Oveja numero", oveja_cuidado,", el lobo esta cerca!")
         }
        else{

        console.log("No sigas comiendo ovejas!");

        }

    
}

warnTheSheep(rebaño);
