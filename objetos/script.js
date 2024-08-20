// Objetos: Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.
var pessoa = {
  nome: "Rodrigo",
  idade: 31,
  profissao: "Front-End Developer",
  possuiFaculdade: true,
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);
console.log(pessoa.possuiFaculdade);

// Métodos: É uma propriedade que possui uma função no local do seu valor.
// Podemos abreviar area: function () {} por area() {}
var quadrado = {
  lados: 4,
  //   area: function (lado) {
  area(lado) {
    return lado * lado;
  },
  //   perimetro: function (lado) {
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

//Objetos servem para organizar o código em pequenas partes reutilizáveis
console.log(Math.PI);
console.log(Math.random());

var pi = Math.PI;
console.log(pi);

// Um objeto é criado utilizando as chaves

var carro = {};
console.log(typeof carro);

//
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

var bg = menu.backgroundColor; // '#84E'
console.log(bg);

menu.backgroundColor = "#000";
console.log(menu.backgroundColor); // '#000'

// Adicionar propriedades e métodos
var menu2 = {
  width: 800,
};

console.log(menu2);

menu2.height = 50;
menu2.position = "fixed";

console.log(menu2);

// Palavra chave this
// this irá fazer uma referência ao próprio objeto.
var height = 120;
var menu3 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

console.log(menu3.metadeHeight());

//
var menu4 = {
  width: 800,
};

console.log(menu4.hasOwnProperty("width")); // true
console.log(menu4.hasOwnProperty("height")); // false

// TUDO É OBJETO

var nomeMeu = "Rodrigo";

console.log(nomeMeu.length);
