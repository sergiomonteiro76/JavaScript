function calcularMedia(notas) {
  if (!Array.isArray(notas)) {
    throw new TypeError("Parâmetro 'notas' deve ser um array!");
  }
  if (notas.length === 0) {
    throw new Error("O array 'notas' está vazio!");
  }
  // ... código para calcular a média
}

try {
  const media = calcularMedia([]);
} catch (error) {
  console.log(error.message);
}
