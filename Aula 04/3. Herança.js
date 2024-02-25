// Função construtora pai
function Pessoa(nome) {
  this.nome = nome;
}

// Função construtora filha que herda de Pessoa
function Funcionario(nome, cargo) {
  Pessoa.call(this, nome); // Chamada à função construtora pai
  this.cargo = cargo;
}

// Criação de um novo objeto
const joao = new Funcionario("João Silva", "Desenvolvedor");

console.log(joao.nome); // Saída: João Silva
console.log(joao.cargo); // Saída: Desenvolvedor
