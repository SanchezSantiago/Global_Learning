//Ejercicio 2 - Sanchez Nieva Santiago
const list1 = [
  { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
  { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
  { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python'},
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
];

const olderGuest = list1.filter(item => item.age == Math.max(...list1.map(item => item.age)));

console.log(olderGuest);




/*const ageArray = list1.map((item) => item.age);
const olderGuest = list1.filter((item) => item.age == Math.max(...ageArray); */


 

