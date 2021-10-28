//Ejercicio 3 - Sanchez Nieva Santiago

const list1 = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

const greeting = (array)=>{
    array.forEach((item, i)=>{ array[i].greeting = `Hi, ${array[i].firstName}, what do you like the most about ${array[i].language}?`;});
    return array;
}
console.log(greeting(list1));


























