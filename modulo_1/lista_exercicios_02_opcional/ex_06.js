/* 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado. */

const prompt = require('prompt-sync')();
const { validarOpcao } = require('../helpers.js')

while (true) {
  let tentativaUsuario = Number(prompt("Estou pensando em um número entre 1 e 5... tente adivinhar: "))
  let numeroSorteado = Math.floor(Math.random() * 5) + 1

  if (tentativaUsuario === numeroSorteado) {
    console.log("Parabéns, você acertou!")
  } else {
    console.log("Não foi dessa vez...")
  }

  let res = validarOpcao("Deseja jogar novamente? [S/N] ", ["s", "n"])

  console.log("-----------------------")

  if (res === "n") {
    break
  }
}