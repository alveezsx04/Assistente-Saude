import prompt from 'prompt-sync';
let ler = prompt();

function sleep(milisegundos) {
    return new Promise((ok, nok) => {
        setTimeout(ok, milisegundos);
    })
}

export function ApresentarPrograma() {
    console.log("Bem Vindo ao Programa da Saúde");
    
    console.log("Eu posso te ajudar te indicando alguns cuidados com a sua saúde");
    
    console.log("Como exercícios, alimentação saudável, consumo de água etc.");
    
}

export function PerguntarNome() {
    console.log("Para começar, qual é o seu nome?");
    let nome = ler("Digite seu nome: ");
    return nome;
}

export function PedirDados(nome) {  
    console.log(`Agora ${nome}, vamos coletar algumas informações sobre você.`);
    let dados = {
        idade: Number(ler("Qual sua idade?: ")),
        altura: Number(ler("Qual sua altura em metros?: ")),
        peso: Number(ler("Qual seu peso?: ")),
        genero: ler("Qual seu gênero? (Masculino/Feminino): ")
    };
    return dados;
}

export async function CalcularIMC(dados, nome) {
    let imc = dados.peso / (dados.altura * dados.altura);

    if (imc < 18.5) {
        console.log(`${nome}, Você está abaixo do peso, vamos focar em ganho de massa`);
    } else if (imc < 25) {
        console.log(`${nome}, Parabéns, você está no peso ideal! Vamos manter a forma!`);
    } else if (imc >= 25 && imc <= 29.9) {
        console.log(`${nome}, Você está com sobrepeso, vamos focar em queima de gordura`);
    } else if (imc >= 30) {
        console.log(`${nome}, Você já está no estado de obesidade, treino de emagrecimento e hipertrofia com acompanhamento recomendado`);
    } else {
        console.log(`${nome}, Não consegui calcular seus dados!`);
    }


}

export async function ApresentarMenu() {
  
    console.log("------MENU------")

    console.log("0--Sair do menu--")
    await sleep(200)
    console.log("1--Rotina de Treinos--");
    await sleep(200)
    console.log("2--Contagem para os exercícios--");
    await sleep(200)
    console.log("3--Meta de ingestão de água--");
    await sleep(200)
    console.log("4--Desafio especial--");
    await sleep(200)
    console.log("5--Alimentação saudável--");
   
}

export async function MetaIngestaoAgua (dados) {
    let Ml = 35;
    let totalMl = dados.peso * Ml;
    let totalLitros = (totalMl / 1000)
    

    
    console.log(`
        Sua meta diária de ingestão de água deve ser aproximadamente ${totalMl} ml (${totalLitros} litros) por dia.`);
    await sleep(300)
    console.log("Manter-se hidratado é fundamental para o bom funcionamento do corpo, melhora o desempenho físico, auxilia na digestão e na saúde da pele.");
    await sleep(200)
    console.log("Lembre-se: aumente a ingestão em dias quentes ou durante atividades físicas intensas!");

}


export async function ColetarEscolha() {
    
    console.log("Qual função você quer?");
    let funcao = Number(ler());
    return funcao;
}

export async function ApresentarFuncao(msg, dados) {
    if (msg == 1) {
        
        console.log("Qual o seu foco?");
        await sleep(700);
        console.log("1 - Ganho de massa");
        await sleep(700);
        console.log("2 - Manter a forma");
        await sleep(700);
        console.log("3 - Queima de gordura");
        await sleep(700);
        console.log("4 - Hipertrofia e emagrecimento");
        await sleep(700);
        let escolhaFuncao = Number(ler());

        if (escolhaFuncao == 1) {
            await GanhoMassa();
        } else if (escolhaFuncao === 2) {
            await ManterForma();
        } else if (escolhaFuncao === 3) {
            await QueimaGordura();
        } else if (escolhaFuncao === 4) {
            await Obesidade();
        } else {
            console.log("Função indisponível");
        }
    }

    else if (msg == 2) {

        ApresentarContagem();
        let numeroFinal = pedirNumeroContagem();
        await Contar(numeroFinal)

    }

    else if (msg == 3) {
        MetaIngestaoAgua(dados);
    }
}

export async function GanhoMassa() {
    console.log(" Objetivo: Ganho de Massa Muscular");
    await sleep(1000);
    console.log("Treino dividido (ABC):");
    await sleep(1000);

    console.log("\n Dia A – Peito e Tríceps");
    await sleep(500);
    console.log("- Supino reto – 4x10");
    await sleep(300);
    console.log("- Supino inclinado – 3x12");
    await sleep(300);
    console.log("- Tríceps testa – 3x10");
    await sleep(300);
    console.log("- Tríceps banco – 3x12");

    await sleep(800);
    console.log("\n Dia B – Costas e Bíceps");
    await sleep(500);
    console.log("- Puxada frontal – 4x10");
    await sleep(300);
    console.log("- Remada baixa – 3x12");
    await sleep(300);
    console.log("- Rosca direta – 3x10");
    await sleep(300);
    console.log("- Rosca martelo – 3x12");

    await sleep(800);
    console.log("\n Dia C – Pernas e Ombro");
    await sleep(500);
    console.log("- Agachamento – 4x10");
    await sleep(300);
    console.log("- Leg press – 3x12");
    await sleep(300);
    console.log("- Elevação lateral – 3x12");
    await sleep(300);
    console.log("- Desenvolvimento – 3x10");
}

export async function ManterForma() {
    console.log(" Objetivo: Manutenção Física");
    await sleep(1000);
    console.log("Rotina semanal:");

    await sleep(800);
    console.log("\n Segunda-feira – Corpo inteiro leve");
    await sleep(500);
    console.log("- Agachamento livre – 3x15");
    await sleep(300);
    console.log("- Flexão de braço – 3x10");
    await sleep(300);
    console.log("- Prancha – 3x30s");
    await sleep(300);
    console.log("- Polichinelo – 3x30s");

    await sleep(800);
    console.log("\n Quarta-feira – Caminhada + Alongamento");
    await sleep(500);
    console.log("- Caminhada de 40 minutos");
    await sleep(300);
    console.log("- Alongamentos gerais");

    await sleep(800);
    console.log("\n Sexta-feira – Funcional leve");
    await sleep(500);
    console.log("- Corrida no lugar – 3x1min");
    await sleep(300);
    console.log("- Abdominal reto – 3x15");
    await sleep(300);
    console.log("- Agachamento com salto – 3x12");
    await sleep(300);
    console.log("- Subida no banco – 3x10 por perna");
}

export async function QueimaGordura() {
    console.log(" Objetivo: Emagrecimento e definição");
    await sleep(1000);

    console.log("\n Treino HIIT (20 min):");
    await sleep(500);
    console.log("- 30s polichinelo + 30s descanso");
    await sleep(300);
    console.log("- 30s agachamento com salto");
    await sleep(300);
    console.log("- 30s burpees");
    await sleep(300);
    console.log("- 30s corrida parada (repete 3 a 4x)");

    await sleep(800);
    console.log("\n Treino Força com peso corporal:");
    await sleep(500);
    console.log("- Flexão de braço – 3x12");
    await sleep(300);
    console.log("- Agachamento – 3x15");
    await sleep(300);
    console.log("- Prancha – 3x40s");
    await sleep(300);
    console.log("- Abdominal bicicleta – 3x20");

    await sleep(800);
    console.log("\n Caminhada ou corrida leve (40 min)");
}

export async function Obesidade() {
    console.log(" Objetivo: Emagrecimento com segurança");
    await sleep(1000);

    console.log("\n Dia 1 – Caminhada leve (30 min)");
    await sleep(500);
    console.log("- Alongamento antes e depois");
    await sleep(300);
    console.log("- Passos lentos e constantes");

    await sleep(800);
    console.log("\n Dia 2 – Exercícios em casa:");
    await sleep(500);
    console.log("- Sentar e levantar da cadeira – 3x10");
    await sleep(300);
    console.log("- Elevação de pernas sentado – 3x12");
    await sleep(300);
    console.log("- Braços pra cima e pra frente – 3x15");
    await sleep(300);
    console.log("- Prancha na parede – 3x30s");

    await sleep(800);
    console.log("\n Dia 3 – Natação ou hidroginástica (se possível)");
    await sleep(500);
    console.log("- Exercícios de baixo impacto nas articulações");

    await sleep(700);
    console.log("\n⚠️ Consulte sempre um médico ou profissional de saúde!");
}

export function ApresentarContagem () {
    console.log("---PROGRAMA DA CONTAGEM---") 
}

export function pedirNumeroContagem (nmr) {
    console.log(nmr)
    let num = Number(ler())
    return num;
}

export async function Contar(numeroFinal) {
    console.log("Até")
    console.log("Iniciando contagem do exercício...")

    for (let a = 1; a <= numeroFinal; a++) {
        console.log(a)
        await sleep(500);
    }
    console.log("Contagem finalizada! Parabéns, você está no caminho certo!")
}