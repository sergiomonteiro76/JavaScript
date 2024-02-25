function calcularMedia(notas) {
  let soma = 0;
  for (const nota of notas) {
    soma += nota;
  }
  return soma / notas.length;
}

const notas = [7, 8, 9, 10];
const media = calcularMedia(notas);

console.log(`Média: ${media}`); // Saída: Média: 8.5
