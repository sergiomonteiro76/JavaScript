// Função construtora
function Pessoa(nome) {
  this.nome = nome;
}

// Adicionando um método ao protótipo
Pessoa.prototype.falar = function() {
  console.log(`Olá, meu nome é ${this.nome}!`);
};

// Criação de um novo objeto
const joao = new Pessoa("João Silva");

joao.falar(); // Saída: Olá, meu nome é João Silva!
