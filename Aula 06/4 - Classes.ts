class Animal {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    falar(): void {
        console.log(`${this.nome} está fazendo um som!`);
    }
}

let cachorro = new Animal("Rex");
cachorro.falar();
