//Ejercicio 2 - Sanchez Nieva Santiago

const list = [
    { firstName: 'Noah', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Carla', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Maria', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Ramiro', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ];
  var count = 0;
  
    list.forEach(function(item, i){
      
        if(list[i].continent == 'Europe'){
            count++;
        }
    });

console.log("Hay",count,"personas de Europa");










  /*var count = 0;
    for (let i = 0; i < list.length; i++) {
        if(list[i].continent == 'Europe'){
            count++;
        }        
    }

    console.log("Hay",count,"personas de Europa.");*/


























