// Operadores de atribuição:
var x = 5;
var y = 10;
console.log((x += y)); // x = x + y (15)
console.log((x -= y)); // x = x - y (-5)
console.log((x *= y)); // x = x * y (50)
console.log((x /= y)); // x = x / y (0.5)
console.log((x %= y)); // x = x % y (0)
console.log((x **= y)); // x = x ** y (9765625)

// Operador ternário: abreviação de condicionais com if e else:
// condição ? true : false
var idade = 19;
var podeBeber = idade >= 18 ? "Pode Beber" : "Não pode Beber";
console.log(podeBeber);

// If abreviado:
var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui faculdade");
else console.log("Não possui faculdade");
