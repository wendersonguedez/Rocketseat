// var é global (todo corpo do código) e, também local (escopo)
// var x;
console.log("> existe x antes do bloco?", x);

{
  // Escopo visivel.
  var x = 0;
}
console.log("> existe x depoois do bloco?", x);

// ------------------------------------------------------------------
let y = 1; // Definindo valor de y em escopo global.
// const y = 1; const não pode ter seu valor atualizado em outro momento de qualquer escopo.

// console.log("> existe y antes do bloco?", y);

{
  y = 0; // Valor de y atualizado dentro de escopo local, reflete em escopo global.
  // const y = 0; Única maneira de alterar o valor de uma const é criando outra em seu escopo.
  console.log("> existe y?", y);
}

console.log("> existe y depois do bloco?", y);
