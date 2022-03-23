/*
    Argumentos e parâmetros
*/

/*----------------------------------------------------------------------------------
Funções podem ser declaradas dentro de variáveis. Essas funções não tem um nome, com isso são chamadas de function expression ou function anonymous.

    const mult = function() {
        console.log(numberOne * numberTwo);
    };
----------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------
Recebendo os argumentos que foram passados ao executar a função. na função, esses argumentos são parâmetros.*/

const sum = function (numberOne, numberTwo) {
  console.log(numberOne + numberTwo);
};
//----------------------------------------------------------------------------------

/*----------------------------------------------------------------------------------
Executando a função acima e passando argumentos para ela.*/

sum(2, 3);
/*--------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------
caso queira executar algum dos parâmetros fora do escopo da função, irá gerar um erro de referência, pois ele só pode ser acessado dentro da função em que foi criado.

    console.log(numberOne);
--------------------------------------------------------------------------------- */
