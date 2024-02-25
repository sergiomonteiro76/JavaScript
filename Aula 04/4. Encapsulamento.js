// Função construtora
function Pessoa(nome) {
  let _idade = 0; // Atributo privado

  this.nome = nome;

  this.getIdade = function() {
    return _idade;
  };

  this.setIdade = function(novaIdade) {
    if (novaIdade >= 0) {
      _idade = novaIdade;
    }
  };
}

// Criação de um novo objeto
const joao = new Pessoa("João Silva");

joao.setIdade(25);

console.log(joao.getIdade()); // Saída: 25
