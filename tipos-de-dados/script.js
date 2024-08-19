var nome = "Rodrigo"; // String
var idade = 31; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

console.log(nome);
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof possuiFaculdade);
console.log(typeof time);
console.log(typeof comida);
console.log(typeof simbolo);
console.log(typeof novoObjeto);

// String
var sobrenome = "Junqueira";
var nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);

var perfilCompleto = nome + " " + sobrenome + " " + "tem " + idade + " anos.";
console.log(perfilCompleto);
