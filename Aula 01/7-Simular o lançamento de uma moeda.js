//Simular o lançamento de uma moeda:
// Gerar número aleatório
const numeroAleatorio = Math.random();

// Simular cara ou coroa
if (numeroAleatorio < 0.5) {
  console.log("Cara");
} else {
  console.log("Coroa");
}