/* 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura). */

const prompt = require('prompt-sync')();

let opcUsuario
let vitorias = 0
let derrotas = 0
let empates = 0

do {
  console.log("Escolha uma opção para jogar")
  console.log("1 - Pedra")
  console.log("2 - Papel")
  console.log("3 - Tesoura")
  console.log("0 - Encerrar jogo")

  opcUsuario = Number(prompt("[1/2/3/0] >> "))
  let opcComputador = Math.floor(Math.random() * 3) + 1

  if (opcUsuario === 1) {
    if (opcComputador === 1) {
      console.log("Você escolheu pedra e o computador escolheu pedra: empate!")
      empates++

    } else if (opcComputador === 2) {
      console.log("Você escolheu pedra e o computador escolheu papel: derrota!")
      derrotas++

    } else {
      console.log("Você escolheu pedra e o computador escolheu tesoura: vitória!")
      vitorias++
    }

  } else if (opcUsuario === 2) {
    if (opcComputador === 1) {
      console.log("Você escolheu papel e o computador escolheu pedra: vitória!")
      vitorias++

    } else if (opcComputador === 2) {
      console.log("Você escolheu papel e o computador escolheu papel: empate!")
      empates++

    } else {
      console.log("Você escolheu papel e o computador escolheu tesoura: derrota!")
      derrotas++
    }

  } else if (opcUsuario === 3) {
    if (opcComputador === 1) {
      console.log("Você escolheu tesoura e o computador escolheu pedra: derrota!")
      derrotas++

    } else if (opcComputador === 2) {
      console.log("Você escolheu tesoura e o computador escolheu papel: vitória!")
      vitorias++

    } else {
      console.log("Você escolheu tesoura e o computador escolheu tesoura: empate!")
      empates++
    }

  } else if (opcUsuario != 0) {
    console.log("Opção inválida.")
  }

  console.log("-----------------------")
} while (opcUsuario != 0)

console.log("Seus resultados:")
console.log(`${vitorias} vitória(s)`)
console.log(`${derrotas} derrota(s)`)
console.log(`${empates} empate(s)`)