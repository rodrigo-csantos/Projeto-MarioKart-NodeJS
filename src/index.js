const readline = require('readline-sync')
const { MARIO, LUIGI, PEACH, YOSHI, BOWSER, DK } = require('./players')

async function rollDice() {
    return  Math.floor(Math.random() * 6) + 1
}

async function getRandomBlock() {
    let random = Math.random()
    let result
    switch (true) {
        case random < 0.33:
            result = "RETA"
            break
        case random < 0.66:
            result = "CURVA"
            break

        default:
            result = "CONFRONTO"
    }
    return result
}

async function logRollResult(characterName, block, diceResult, attribute) {
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`)
        // sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`);
        //rolar dados
        let diceResult1 = await rollDice()
        let diceResult2 = await rollDice()

        //teste de habilidade
        let totalTestSkill1 = 0
        let totalTestSkill2 = 0

        if (block === "RETA") {
            totalTestSkill1 = diceResult1 + character1.VELOCIDADE
            totalTestSkill2 = diceResult2 + character2.VELOCIDADE

            await logRollResult(character1.NOME, "velocidade", diceResult1, character1.VELOCIDADE)
            await logRollResult(character2.NOME, "velocidade", diceResult2, character2.VELOCIDADE)
        }
        if (block === "CURVA") {
            totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
            totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE

            await logRollResult(character1.NOME, "manobrabilidade", diceResult1, character1.MANOBRABILIDADE)
            await logRollResult(character2.NOME, "manobrabilidade", diceResult2, character2.MANOBRABILIDADE)
        }

        if (block === "CONFRONTO") {
            let powerResult1 = diceResult1 + character1.PODER
            let powerResult2 = diceResult2 + character2.PODER

            console.log(`${character1.NOME} confrontou ${character2.NOME}! 🥊`);

            await logRollResult(character1.NOME, "poder", diceResult1, character1.PODER)
            await logRollResult(character2.NOME, "poder", diceResult2, character2.PODER)

            if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
                console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`);
                character2.PONTOS--
            }

            if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
                console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`);
                character1.PONTOS--
            }
            
            console.log(powerResult2 === powerResult1 ? 'Confronto empatado, nenhum ponto foi perdido' : '')
        }

        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.NOME} marcou 1 ponto!`);
            character1.PONTOS++
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.NOME} marcou 1 ponto!`);
            character2.PONTOS++
        }

        console.log('---------------------------------------------------');
    }
}

async function declareWinner(character1, character2) {
    console.log("Resultado final:");
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);
  
    if (character1.PONTOS > character2.PONTOS)
      console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
    else if (character2.PONTOS > character1.PONTOS)
      console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
    else console.log("A corrida terminou em empate");
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


(async function main() {
    
    const {player1, player2} = await selectPlayer()

    console.log(
    `🏁 🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`
    )
    await playRaceEngine(player1, player2)
    await declareWinner(player1, player2)
})()

