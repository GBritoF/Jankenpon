const $buttonStonePlayerOne = document.querySelector('.button-move-stone-one')
const $buttonPaperPlayerOne = document.querySelector('.button-move-paper-one')
const $buttonScissorsPlayerOne = document.querySelector('.button-move-scissors-one')

const $buttonStonePlayerTwo = document.querySelector('.button-move-stone-two')
const $buttonPaperPlayerTwo = document.querySelector('.button-move-paper-two')
const $buttonScissorsPlayerTwo = document.querySelector('.button-move-scissors-two')

const $moveBoxOne = document.querySelector('#move-box-one')
const $moveBoxTwo = document.querySelector('#move-box-two')

const $scorePlayerOne = document.querySelector('.score-player-one')
const $scorePlayerTwo = document.querySelector('.score-player-two')
const $winnerTitle = document.querySelector('.winner-title') 

const $buttonMoveReset = document.querySelector('.button-move-reset')
const $buttonMovePlay = document.querySelector('.button-move-play')

const $buttonPlayAll = document.querySelectorAll('.disabled')

let movePlayerOne = ''
let movePlayerTwo = ''
let winner = ''
let playerOneScore = 0
let playerTwoScore = 0

function setWinner () {
    if(movePlayerOne == '' || movePlayerTwo == '') {
        return
    }

    if(movePlayerOne == 'stone' && movePlayerTwo == 'paper') {
        winner = 2
    } else if (movePlayerOne == 'stone' && movePlayerTwo == 'scissors') {
        winner = 1
    } else if (movePlayerOne == 'paper' && movePlayerTwo == 'stone') {
        winner = 1
    } else if (movePlayerOne == 'paper' && movePlayerTwo == 'scissors') {
        winner = 2
    } else if(movePlayerOne == 'scissors' && movePlayerTwo == 'stone') {
        winner = 2
    } else if (movePlayerOne == 'scissors' && movePlayerTwo == 'stone') {
        winner = 1
    } else if (movePlayerOne == movePlayerTwo) {
        winner = 3
    }
}

function addWinnerScore() {
    if(winner == 1) {
        playerOneScore = playerOneScore + 1
    } else if(winner == 2) {
        playerTwoScore = playerTwoScore + 1
    }
} 

function printWinnerScore() {
    $scorePlayerOne.innerHTML = playerOneScore.toString().padStart(2, '0')
    $scorePlayerTwo.innerHTML = playerTwoScore.toString().padStart(2, '0')

    if(winner == 3) {
        $winnerTitle.textContent = "Empate"
    } else if(winner == 1) {
        $winnerTitle.textContent = "Jogador 1 ganhou!"
    } else if(winner == 2) {
        $winnerTitle.textContent = "Jogador 2 ganhou!"
    }

}

function resetScreen() {
    $moveBoxOne.innerHTML = ''
    $moveBoxTwo.innerHTML = ''
}

function resetMovePlayer() {      
    movePlayerOne = ''
    movePlayerTwo = ''
    winner = ''
}

function handleOneMove(element) {
    $moveBoxOne.innerHTML = `<img src="./images/${element}.png" alt="Imagem ${element}">`
    movePlayerOne = element
    setWinner()
    addWinnerScore()
    printWinnerScore()
    if(winner != 0) {
        setTimeout(resetScreen, 1000)
        resetMovePlayer()
    }
}

function handleTwoMove(element) {
    $moveBoxTwo.innerHTML = `<img src="./images/${element}.png" alt="Imagem ${element}">`
    movePlayerTwo = element
    setWinner()
    addWinnerScore()
    printWinnerScore()
    if(winner != 0) {
        setTimeout(resetScreen, 1000)
        resetMovePlayer()
    }
}

$buttonStonePlayerOne.addEventListener('click', () => {
    handleOneMove('stone')
})

$buttonPaperPlayerOne.addEventListener('click', () => {
    handleOneMove('paper')
})

$buttonScissorsPlayerOne.addEventListener('click', () => {
    handleOneMove('scissors')
})

$buttonStonePlayerTwo.addEventListener('click', () => {
    handleTwoMove('stone')
})

$buttonPaperPlayerTwo.addEventListener('click',  () => {
    handleTwoMove('paper')
})

$buttonScissorsPlayerTwo.addEventListener('click',  () => {
    handleTwoMove('scissors')
})

$buttonMoveReset.addEventListener('click', () => {
    playerOneScore = 0
    playerTwoScore = 0

    $scorePlayerOne.innerHTML = '00'
    $scorePlayerTwo.innerHTML = '00'
})


$buttonMovePlay.addEventListener('click', () => {
    $buttonPlayAll.forEach((e) => {
        e.classList.toggle('disabled')
    })
    if($buttonMovePlay.textContent == 'Iniciar') {
        $buttonMovePlay.classList.add('play-game')
        $buttonMovePlay.textContent = 'Pausar'
    } else if($buttonMovePlay.textContent == 'Pausar') {
        $buttonMovePlay.classList.remove('play-game')
        $buttonMovePlay.textContent = 'Iniciar'
    }
})


