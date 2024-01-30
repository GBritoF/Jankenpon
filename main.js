const $buttonStonePlayerOne = document.querySelector('.button-move-stone-one')
const $buttonPaperPlayerOne = document.querySelector('.button-move-paper-one')
const $buttonScissorsPlayerOne = document.querySelector('.button-move-scissors-one')

const $buttonStonePlayerTwo = document.querySelector('.button-move-stone-two')
const $buttonPaperPlayerTwo = document.querySelector('.button-move-paper-two')
const $buttonScissorsPlayerTwo = document.querySelector('.button-move-scissors-two')

const $moveBoxOne = document.querySelector('#move-box-one')
const $moveBoxTwo = document.querySelector('#move-box-two')

function handlePaperOneMove() {
    $moveBoxOne.innerHTML = `<img src="./images/paper.png" alt="Imagem papel">`
}

function handleStoneOneMove() {
    $moveBoxOne.innerHTML = `<img src="./images/stone.png" alt="Imagem pedra">`
}

function handleScissorsOneMove() {
    $moveBoxOne.innerHTML = `<img src="./images/scissors.png" alt="Imagem tesoura">`
}

function handlePaperTwoMove() {
    $moveBoxTwo.innerHTML = `<img src="./images/paper.png" alt="Imagem papel">`
}

function handleStoneTwoMove() {
    $moveBoxTwo.innerHTML = `<img src="./images/stone.png" alt="Imagem pedra">`
}

function handleScissorsTwoMove() {
    $moveBoxTwo.innerHTML = `<img src="./images/scissors.png" alt="Imagem tesoura">`
}

$buttonStonePlayerOne.addEventListener('click', handleStoneOneMove)
$buttonPaperPlayerOne.addEventListener('click', handlePaperOneMove)
$buttonScissorsPlayerOne.addEventListener('click', handleScissorsOneMove)

$buttonStonePlayerTwo.addEventListener('click', handleStoneTwoMove)
$buttonPaperPlayerTwo.addEventListener('click', handlePaperTwoMove)
$buttonScissorsPlayerTwo.addEventListener('click', handleScissorsTwoMove)

