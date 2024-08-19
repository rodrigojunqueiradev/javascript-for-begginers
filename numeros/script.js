var idade = 31;
var pi = 3.14;
var exp = 2e10; //coloca 10 zeros depois do 2

console.log(idade);
console.log(pi);
console.log(exp);

// Operadores aritméticos
var soma = 100 + 50;
console.log("Soma = " + soma);

var subtracao = 100 - 50;
console.log("Subtração = " + subtracao);

var multiplicacao = 100 * 2;
console.log("Multiplicação = " + multiplicacao);

var divisao = 100 / 2;
console.log("Divisão = " + divisao);

var expoente = 2 ** 10;
console.log("Expoente = " + expoente);

var modulo = 14 % 5;
console.log("Módulo (resto da divisão) = " + modulo);

// Operadores aritméticos com strings
var somaComString = "100" + 50;
console.log("Soma com String de '100' + 50 = " + somaComString);

var subtracaoComString = "100" - 50;
console.log("Subtração com String de '100' - 50 = " + subtracaoComString);

var multiplicacaoComString = "100" * "2";
console.log(
  "Multiplicação com String de '100' * '2' = " + multiplicacaoComString
);

var divisaoComString = "100" / 50;
console.log("Divisão com String de '100' + 50 = " + divisaoComString);

// Ordem de precedência
var total1 = 20 + 5 * 2; // 30
console.log(total1);
var total2 = (20 + 5) * 2; // 50
console.log(total2);
var total3 = (20 / 2) * 5; // 50
console.log(total3);
var total4 = 10 + 10 * 2 + 20 / 2; // 40
console.log(total4);

// Operadores aritméticos unários
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

var frase = "Isso é um teste";
+frase; // NaN
console.log(+frase);
-frase; // NaN
console.log(-frase);

var idade = "31";
+idade; // 31 (número)
console.log(+idade);
-idade; // -31 (número)
console.log(-idade);
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
