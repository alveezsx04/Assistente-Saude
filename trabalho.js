import * as funcoes from './funcao.js'

funcoes.ApresentarPrograma();

let nome = funcoes.PerguntarNome();
let dados = funcoes.PedirDados(nome);
await funcoes.CalcularIMC(dados, nome);

let sair = false;
while (!sair) {
    await funcoes.ApresentarMenu();
    let escolha = await funcoes.ColetarEscolha();

    if (escolha === 1) {
        await funcoes.ApresentarFuncao(1);
    } else if (escolha === 2) {
        await funcoes.ApresentarFuncao(2);
    }
    else if (escolha === 3) {
        await funcoes.ApresentarFuncao(3, dados)
        
    }
    else if (escolha === 0) {
        sair = true;
        console.log("Saindo do programa. Até logo!");
    } else {
        console.log("Escolha inválida. Tente novamente.");
    }
}