const filtrarMaiores = (valores: number[], limite: number): number[] =>
  valores.filter((valor) => valor > limite);

console.log(filtrarMaiores([10, 20, 30, 40], 25)); // Saída: [30, 40]
