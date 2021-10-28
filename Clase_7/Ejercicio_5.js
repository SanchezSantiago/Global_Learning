//Ejercicio 5 - Sanchez Nieva Santiago

const list1 = [
  { firstName: 'Mark', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', country: 'Norway', continent: 'Europe', age: 19, language: 'Python' }
];

function whichCountryAndLanguage(language){
  const value = list1.find(function(item, i){return list1[i].language == language});
  if(value){
    console.log(`${value.firstName} was the first ${value.language} developer in the conference`)
  }
  else{
    console.log(`There are no ${language} developers in the conference`);
  }
}


whichCountryAndLanguage('Python');
whichCountryAndLanguage('C#');


















