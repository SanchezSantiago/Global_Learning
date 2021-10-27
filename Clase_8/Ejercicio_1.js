//Ejercicio 1 - Sanchez Nieva Santiago
const list = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

  const sameLanguage = (array) => array.every(item => item.language === array[0].language);

console.log(sameLanguage(list));
 

 

