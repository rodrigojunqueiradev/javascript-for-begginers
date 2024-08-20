console.log("Exercício 1: ");
// Crie uma array com os anos que o Brasil ganhou a copa 1959, 1962, 1970, 1994, 2002
var brasilGanhouCopa = [1959, 1962, 1970, 1994, 2002];

console.log("Exercício 2: ");
// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilGanhouCopa.forEach(function (item) {
  console.log("O brasil ganhou a copa de " + item);
});

console.log("Exercício 3: ");
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

console.log("Exercício 4: ");
// Coloque a última fruta da array acima em uma variável, sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
