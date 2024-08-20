console.log("Script de Exercicios:");

// Exercício 1
// Crie uma função para verificar se um valor é Truthy.

console.log("Exercício 1: ");
function isTruthy(valor) {
  return !!valor;
}

console.log(isTruthy(10));

// Exercício 2
// Crie uma função matemática que retorne o perímetro de um quadrado.
// lembrando: perímetro é a soma dos quatro lados do quadrado

console.log("Exercício 2: ");
function perimetroQuadrado(lado) {
  return lado * 4;
}

console.log(perimetroQuadrado(5));

// Exercício 3
// Crie uma função que retorne o seu nome completo, ela deve possuir os parâmetros: nome e sobrenome
console.log("Exercício 3: ");
function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}
console.log(nomeCompleto("Rodrigo", "Junqueira"));

// Exercício 4
// Crie uma função que verifica se um número é par
console.log("Exercício 4: ");
function isEven(numero) {
  if (numero % 2 == 0) {
    console.log("É Par");
  } else {
    console.log("É ímpar");
  }
}

isEven(5);

// Exercício 5
// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
console.log("Exercício 5: ");

function tipoDeDado(dado) {
  return typeof dado;
}
console.log(tipoDeDado(23));

// Exercício 6
// addEventListener é uma função nativa do JavaScript o primeiro parâmetro é o evento que ocorre e o segundo o Callback utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.
console.log("Exercício 6: ");

addEventListener("scroll", function () {
  console.log("Rodrigo Junqueira");
});

// Exercício 7
// Corrija o erro abaixo
// function precisoVisitar(paisesVisitados) {
//   var totalPaises = 193;
//   return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
// }
// function jaVisitei(paisesVisitados) {
//   return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
// }
// precisoVisitar(20);
// jaVisitei(20);

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
