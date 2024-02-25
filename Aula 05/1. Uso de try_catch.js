try {
  // Código que pode gerar erros
  const resultado = divisão(10, 0);
  console.log(resultado); // Erro: divisão por zero
} catch (error) {
  // Tratamento do erro
  console.log(`Erro: ${error.message}`);
}

function divisão(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida!");
  }
  return a / b;
}
