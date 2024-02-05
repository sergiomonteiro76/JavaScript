//Verificar se um triângulo é equilátero, isósceles ou escaleno:
// Variáveis
const lado1 = 5;
const lado2 = 5;
const lado3 = 6;

// Verificar tipo de triângulo
if (lado1 === lado2 && lado2 === lado3) {
  console.log("Triângulo equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  console.log("Triângulo isósceles");
} else {
  console.log("Triângulo escaleno");
}