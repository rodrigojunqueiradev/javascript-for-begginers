console.log("Script de Exercícios: ");

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
console.log("Exercício 1:");
var dadosPessoais = {
  nome: "Rodrigo",
  sobrenome: "Junqueira",
  idade: 31,
  profissao: "Front-End Developer",
  cidade: "Tatuí",
};

console.log(dadosPessoais);

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log("Exercício 2");

dadosPessoais.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
console.log(dadosPessoais);

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
console.log("Exercício 3");

console.log(carro);
carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem
console.log("Exercício 4");

var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};
