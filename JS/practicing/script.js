//  1. Declare uma variável de nome weight
let weight;

//  2. Que tipo de dado é a variável acima?
// console.log(typeof weight);

/*  
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubcribed: Boolean

let name = "Wenderson";
let age = 21;
let stars = 4.5;
let isSubcribed = true;
*/

/*  
    4. A variável student abaixo é de que tipo de dado?
    
    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 Mostre no console a seguinte mensagem:
        
        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto.
*/

let student = {
  name: "Wenderson Viana",
  age: 20,
  weight: 76.5,
  isSubcribed: true,
};
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`);

/*
    5. Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
*/
let students = [];

/*
    6. Reatribua valor para o array acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colocar o objeto, mas usar o objeto criado e inserir ele no array)
*/

students = [student];
/*
    7. Coloque no console o valor da posição zero do array acima.
*/

console.log(students[0]);

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const john = {
  name: "John",
  age: 23,
  weight: 74.1,
  isSubcribed: false,
};

// students = [student, john];
students[1] = john;
console.log(students);

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode  o código e veja se você acertou.

    console.log(a)
    var a = 1

    Variável a ficar retornar como undefined, pois irá sofrer o hosting, a elevação da sua declaração. Isso faz com que uma variável seja declarada no topo do arquivo.

    console.log(a)
    let a = 1

    Caso fosse uma variável let, daria erro de referência, pois ela não sofre o hosting, como acontece com var
*/
