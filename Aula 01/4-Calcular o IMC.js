//Calcular o IMC (Índice de Massa Corporal):
// Variáveis
const peso = 70;
const altura = 1.75;

// Cálculo do IMC
const imc = peso / (altura * altura);

// Exibir resultado
console.log("O IMC é:", imc);

// Verificar classificação do IMC
if (imc < 18.5) {
  console.log("Abaixo do peso.");
} else if (imc < 25) {
  console.log("Peso normal.");
} else if (imc < 30) {
  console.log("Sobrepeso.");
} else {
  console.log("Obesidade.");
}