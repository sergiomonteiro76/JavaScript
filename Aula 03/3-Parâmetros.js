function calcularArea(base, altura) {
  return base * altura;
}

// Diferentes valores passados como parâmetros
const areaRetangulo = calcularArea(5, 4);
const areaTriangulo = calcularArea(3, 6) / 2;

console.log(`Área do retângulo: ${areaRetangulo}`); // Saída: Área do retângulo: 20
console.log(`Área do triângulo: ${areaTriangulo}`); // Saída: Área do triângulo: 9
