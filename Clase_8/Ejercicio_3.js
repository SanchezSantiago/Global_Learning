//Ejercicio 3 - Sanchez Nieva Santiago

const list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

list1.map((item, i) => list1[i].userName = `${item.firstName}${item.lastName}${2021 - item.age}`.toLowerCase());

 console.log(list1);

