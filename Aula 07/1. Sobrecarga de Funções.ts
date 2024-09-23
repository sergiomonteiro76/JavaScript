// Sobrecarga da função
function formatarEntrada(entrada: string): string;
function formatarEntrada(entrada: number): string;

// Implementação da função
function formatarEntrada(entrada: string | number): string {
    if (typeof entrada === "string") {
        return entrada.trim().toUpperCase();
    } else {
        return entrada.toFixed(2);
    }
}

// Exemplos de chamadas
console.log(formatarEntrada("   TypeScript   ")); // "TYPESCRIPT"
console.log(formatarEntrada(123.456));            // "123.46"
