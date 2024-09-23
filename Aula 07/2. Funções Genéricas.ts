// Função genérica com o tipo <T>
function reverterArray<T>(items: T[]): T[] {
    return items.reverse();
}

// Exemplo de uso com diferentes tipos
const numeros = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c", "d"];

console.log(reverterArray(numeros));  // [5, 4, 3, 2, 1]
console.log(reverterArray(strings));  // ["d", "c", "b", "a"]
