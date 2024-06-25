const resultadoTotal = document.querySelector('.resultadoTotal')
const humanScore = document.querySelector('#humanScore ')
const botScore = document.querySelector('#botScore')


let botScoreNumber= 0
let humanScoreNumber= 0



const humano = (suaEscolha) => {

    resultJogo(suaEscolha, bot())
}
let min = 0;
let max = 2;

const bot = () => {

    const playBot = ['pedra', 'papel', 'tesoura']
    let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;


    return playBot[numeroAleatorio]
}

const resultJogo = (human, machine) => {

    console.log('humano:' + human + 'machine :' + machine)

    if (human === machine) {

        resultadoTotal.innerHTML = "deu empate!"

    } else if ((human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')) {


            humanScoreNumber++
         humanScore.innerHTML=   humanScoreNumber

        resultadoTotal.innerHTML = "você ganhou!"

    } else {

      botScoreNumber++
      botScore.innerHTML= botScoreNumber
        resultadoTotal.innerHTML = "você perdeu!"

    }

}