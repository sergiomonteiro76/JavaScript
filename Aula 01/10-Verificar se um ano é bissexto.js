// Verificar se um ano é bissexto:
// Variável
const ano = 2024;

// Verificar se é bissexto
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log("O ano", ano, "é bissexto.");
} else {
  console.log("O ano", ano, "não é bissexto.");
}