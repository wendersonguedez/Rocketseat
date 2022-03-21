/*
Array (vetores)
  * Uma lista
  * Agrupamento de dados

  let person = [
    "Wenderson",
    "Breno",
    "Richard"
  ];
*/

// criando um array
const animals = [
  "Lion",
  "Monkey",
  "Cat",
  "Dog",
  {
    name: "Cow",
    age: 5,
  },
];

// acessando os valores de um array
console.log(animals);

// acessando um valor especifico de um array
console.log(animals[0]);

// Interpolando valores com array
console.log(`${animals[0]} é um animal muito pesado`);

// retornando o total de elementos de um array
console.log(animals.length);

// retorno de um valor inexistente dentro do array ==> undefined
console.log(animals[4]);

// acessando uma propriedade de um objeto criado dentro de um array
console.log(animals[4].name);
