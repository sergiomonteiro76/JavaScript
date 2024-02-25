// Função construtora pai
function Animal(nome) {
  this.nome = nome;
}

// Método que será sobrescrito nas classes filhas
Animal.prototype.falar = function() {
  console.log("Som genérico de animal");
};

// Função construtora filha
function Cachorro(nome) {
  Animal.call(this, nome); // Chamada à função construtora pai
}

// Sobrescrita do método falar
Cachorro.prototype.falar = function() {
  console.log("Au au!");
};

// Função construtora filha
function Gato(nome) {
  Animal.call(this, nome); // Chamada à função construtora pai
}

// Sobrescrita do método falar
Gato.prototype.falar = function() {
  console.log("Miau!");
};

// Criação de objetos
const cachorro = new Cachorro("Rex");
const gato = new Gato("Mia");

cachorro.falar(); // Saída: Au au!
gato.falar(); // Saída: Miau!
