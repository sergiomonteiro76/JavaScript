// Função construtora
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// Criação de um novo objeto
const joao = new Pessoa("João Silva", 25);

console.log(joao.nome); // Saída: João Silva
console.log(joao.idade); // Saída: 25
