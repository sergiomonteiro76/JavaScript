function saudar(nome: string, saudacao: string = "Olá"): string {
    return `${saudacao}, ${nome}!`;
}

// Exemplos de uso
console.log(saudar("Maria"));               // "Olá, Maria!"
console.log(saudar("João", "Bom dia"));     // "Bom dia, João!"
