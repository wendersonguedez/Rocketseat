// Caso uma função não tenha o 'return', ela irá retornar undefined.
const sum = function (numberOne, numberTwo) {
  total = numberOne + numberTwo;
  return total;
};

let numberOne = 30;
let numberTwo = 40;

/*
Caso a variavel total fosse exibida antes da execução da função 'sum', daria erro de referência, pois ela ainda não foi definida.
    console.log(total)
*/

console.log(`o número 1 é ${numberOne}`);
console.log(`o número 2 é ${numberTwo}`);
console.log(`a soma é ${sum(numberOne, numberTwo)}`);

/* 
Variável total já foi definida, o que permite o acesso a ela. Esse acesso só é possível por que não foi definido um tipo para essa variável (var, let ou const). Não é recomendado, pois poderá gerar muitos erros dependendo do porte da aplicação. 
    console.log(total);
*/
