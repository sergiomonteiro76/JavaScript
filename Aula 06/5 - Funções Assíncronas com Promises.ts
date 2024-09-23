function esperar(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function tarefaAssincrona() {
    console.log("Tarefa começando...");
    await esperar(2000); // espera 2 segundos
    console.log("Tarefa concluída após 2 segundos.");
}

tarefaAssincrona();
