// Funções:

// Área do quadrado:
function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));
console.log(areaQuadrado(5));

// --//--

// PI:
function pi() {
  return 3.14;
}

console.log(pi());

// --//--

/* IMC: 
Peso e altura são os parâmetros */
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

console.log(imc(80, 1.8)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.7)); // 60 e 1.70 são os argumentos

// --//--

// Cor favorita:
function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}

console.log(corFavorita("verde")); // retorna 'Você não gosta de nada'

// --//--

// Argumentos podem ser funções:
// Callback -> funções que ocorrem após algum evento
addEventListener("click", function () {
  console.log("Clicou");
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// --//--

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(80, 1.8); // retorna o imc
console.log(imc2(80, 1.8)); // retorna o imc e undefined

// --//--

// Verifica idade:
function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.
console.log(terceiraIdade(70));

// --//--

//Escopo léxico
var profissao = "Front-End Developer";

function dados() {
  var nome = "Rodrigo";
  var idade = 30;
  function outrosDados() {
    var endereco = "Tatuí";
    var idade = 31;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'Rodrigo, 31, Tatuí, Front-End Developer'
// outrosDados(); // retorna um erro

// --//--
