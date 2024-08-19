console.log("Exercícios: ");

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 31;
var idadeMeuIrmao = 33;

if (minhaIdade > idadeMeuIrmao) {
  console.log("É maior");
} else if (minhaIdade == idadeMeuIrmao) {
  console.log("É igual");
} else {
  console.log("É menor");
}

// Qual valor é retornado na seguinte expressão?
var expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);
console.log(5 - 2 && 5 - " " && 5 - 2);
// R: false

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = "Andre"; //true
var idade = 28; // true
var possuiDoutorado = false; //false
var empregoFuturo; //undefined
var dinheiroNaConta = 0; //true
console.log(nome, idade, possuiDoutorado, empregoFuturo, dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
  console.log("O Brasil tem mais habitantes");
} else if (brasil == china) {
  console.log("O Brasil e a China tem a mesma quantidade de habitantes");
} else {
  console.log("A China tem mais habitantes");
}

// O que irá aparecer no console?
if ("Gato" === "gato" && 5 > 2) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
//R: False

// O que irá aparecer no console?
if ("Gato" === "gato" || 5 > 2) {
  console.log("Gato" && "Cão"); //Condição E sempre retorna a última verdadeira
} else {
  console.log("Falso");
}
//R: Cão
