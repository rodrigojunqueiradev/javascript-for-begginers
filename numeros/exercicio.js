console.log("Exercícios: ");

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var expressao1 = "Expressao1" / 2;
var expressao2 = "Expressao1" * 2;
console.log(expressao1);
console.log(expressao2);

// Somar a string '200' com o número 50 e retornar 250
var somaConcatenada = "200" + 50;
var soma = +"200" + 50;
console.log("Soma concatenada = " + somaConcatenada);
console.log("Soma = " + soma);

// Incremente o número 5 e retorne o seu valor incrementado
var n1 = 5;
var incremento = ++n1;
console.log(incremento);

// Como dividir o peso por 2?
// var numero = "80";
// var unidade = "kg";
// var peso = numero + unidade; // '80kg'
// var pesoPorDois = peso / 2; // NaN (Not a Number)
// console.log(pesoPorDois);

var numero = "80" / 2;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)
console.log(pesoPorDois);
