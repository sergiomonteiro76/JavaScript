// Exemplo de código que adiciona um evento de clique a um botão
document.getElementById('meuBotao').addEventListener('click', function() {
    alert('O botão foi clicado!');
});

// Exemplo de código que altera o texto de um elemento HTML
document.getElementById('meuBotao').addEventListener('click', function() {
    var meuParagrafo = document.getElementById('meuParagrafo');
    meuParagrafo.textContent = 'Texto modificado!';
});

// Exemplo de código que altera a cor de fundo de um elemento quando o mouse passa por cima dele
var minhaDiv = document.getElementById('minhaDiv');
minhaDiv.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
});

// Reverte a cor de fundo quando o mouse sai do elemento
minhaDiv.addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});

// Exemplo de código que combina eventos, seleção de elementos, manipulação de conteúdo e estilização dinâmica
minhaDiv.addEventListener('click', function() {
    this.textContent = 'Texto alterado!';
    this.style.backgroundColor = 'lightblue';
});
