const readline = require('readline-sync')

const MARIO = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0
}

const PEACH = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0
}

const YOSHI = {
    NOME: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0
}

const BOWSER = {
    NOME: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0
}

const LUIGI = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0
}

const DK = {
    NOME: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0
}

async function selectPlayer () {
    const personagem1 = readline.question('Escolha o primeiro personagem: ')
    let player1 

    switch (true) {
        case personagem1 === 'MARIO' || personagem1 === 'Mario' || personagem1 === 'SUPER MARIO' || personagem1 === 'Super Mario' || personagem1 === 'mario':
            player1 = MARIO
            break;
        case personagem1 === 'LUIGI' || personagem1 === 'Luigi' || personagem1 === 'luigi':
            player1 = LUIGI
            break
        case personagem1 === 'PEACH' || personagem1 === 'Peach' || personagem1 === 'PRINCESA PEACH' || personagem1 === 'Psincesa Peach' || personagem1 === 'peach':
            player1 = PEACH
            break;
        case personagem1 === 'YOSHI' || personagem1 === 'Yoshi' || personagem1 === 'yoshi':
            player1 = YOSHI
            break
        case personagem1 === 'BOWSER' || personagem1 === 'Bowser' || personagem1 === 'bowser':
            player1 = BOWSER
            break
        case personagem1 === 'DONKEYKONG' || personagem1 === 'DONKEY KONG' || personagem1 === 'Donkey Kong' || personagem1 === 'donkey kong' || personagem1 === 'donkeykong':
            player1 = DK
            break
        default:
            break;
    }

    const personagem2 = readline.question('Escolha o segundo personagem: ')
    let player2

    switch (true) {
        case personagem2 === 'MARIO' || personagem2 === 'Mario' || personagem2 === 'SUPER MARIO' || personagem2 === 'Super Mario' || personagem2 === 'mario':
            player2 = MARIO
            break;
        case personagem2 === 'LUIGI' || personagem2 === 'Luigi' || personagem2 === 'luigi':
            player2 = LUIGI
            break
        case personagem2 === 'PEACH' || personagem2 === 'Peach' || personagem2 === 'PRINCESA PEACH' || personagem2 === 'Psincesa Peach' || personagem2 === 'peach':
            player2 = PEACH
            break;
        case personagem2 === 'YOSHI' || personagem2 === 'Yoshi' || personagem2 === 'yoshi':
            player2 = YOSHI
            break
        case personagem2 === 'BOWSER' || personagem2 === 'Bowser' || personagem2 === 'bowser':
            player2 = BOWSER
            break
        case personagem2 === 'DONKEYKONG' || personagem2 === 'DONKEY KONG' || personagem2 === 'Donkey Kong' || personagem2 === 'donkey kong' || personagem2 === 'donkeykong':
            player2 = DK
            break
        default:
            break;
    }
    
    return {player1, player2 };
}

module.exports = { 
    selectPlayer
}