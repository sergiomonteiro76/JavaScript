// Variável no escopo global
let nome = "João";

function saudacao() {
  // Variável no escopo local da função
  let sobrenome = "Silva";

  console.log(`Olá, ${nome} ${sobrenome}!`);
}

saudacao(); // Saída: Olá, João Silva!

console.log(sobrenome); // Erro: sobrenome não está definido no escopo global
