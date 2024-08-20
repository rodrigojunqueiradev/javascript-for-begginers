//Arrays
var videoGames = ["Switch", "PS4", "XBox"];

console.log(videoGames[0]);
console.log(videoGames[1]);
console.log(videoGames[2]);

//Alguns métodos e propriedades de uma array
console.log(videoGames);
console.log(videoGames.length);

videoGames.pop(); // Remove o último item e retorna ele

console.log(videoGames);
console.log(videoGames.length);

videoGames.push("Xbox"); // Adiciona ao final da array
console.log(videoGames);
console.log(videoGames.length);

videoGames.push("3DS");
console.log(videoGames);
console.log(videoGames.length);

// FOR LOOP
console.log("for loop:");
console.log("for (início;condição;incremento){}");

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

// WHILE LOOP
console.log("While Loop:");

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//Arrays e Loops
console.log("Arrays e Loops");

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

console.log("Usando break:");
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}

// forEach

videoGames.forEach(function (item) {
  console.log(item);
});
