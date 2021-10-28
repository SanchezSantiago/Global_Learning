//Ejercicio 4 - Sanchez Nieva Santiago

const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];

  function thereIsLanguage(language){
    const value = list.some((item, i) => { return list[i].language == language})
    console.log(value);
    }
    thereIsLanguage('Ruby');

    //INPUT
    /*thereIsLanguage('JavaScript'); -> true
    thereIsLanguage('Python'); -> false
    */
























