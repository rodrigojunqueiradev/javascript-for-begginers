// Exercício 1:
console.log("Exercício 1: ");
// Por qual motivo o código abaixo retorna com erros?
// {
//   var cor = "preto";
//   const marca = "Fiat";
//   let portas = 4;
// }
// console.log(var, marca, portas);

{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;
  console.log(cor, marca, portas);
}

// Exercício 2:
console.log("Exercício 2: ");
// Como corrigir o erro abaixo?
// function somarDois(x) {
//   const dois = 2;
//   return x + dois;
// }
// function dividirDois(x) {
//   return x + dois;
// }
// somarDois(4);
// dividirDois(6);

const dois = 2;
function somarDois(x) {
  return (x += dois);
}
function dividirDois(x) {
  return (x /= dois);
}
console.log(somarDois(4));
console.log(dividirDois(6));

//Exercício 3:
console.log("Exercício 3: ");

// O que fazer para total retornar 500?
// var numero = 50;

// for(var numero = 0; numero < 10; numero++) {
//   console.log(numero);
// }

// const total = 10 * numero;
// console.log(total);

const numero = 50;

for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
