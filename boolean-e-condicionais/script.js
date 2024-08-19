var possuiGraduacao = true;
var possuiDoutorado = true;
console.log(possuiGraduacao);
console.log(possuiDoutorado);

if (possuiGraduacao) {
  console.log("Possui graduação");
} else {
  console.log("Não possui graduação");
}

if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}

// Falsy
// if(false)
// if(0) // ou -0
// if(NaN)
// if(null)
// if(undefined)
// if('') // ou "" ou ``

// Truthy
// if(true)
// if(1)
// if(' ')
// if('andre')
// if(-5)
// if({})

// Operador lógico de negação
// if(!true) // false
// if(!1) // false
// if(!'') // true
// if(!undefined) // true
// if(!!' ') // true
// if(!!'') // false

// Operadores de comparação
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10; // true
10 >= 11; // false

10 == "10"; // true
10 == 10; // true
10 === "10"; // false
10 === 10; // true
10 != 15; // true
10 != "10"; // false
10 !== "10"; // true

true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

// switch
var corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  default:
    console.log("Feche os olhos");
}
