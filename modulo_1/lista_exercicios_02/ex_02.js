/* 2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. */

const { validarInteiro } = require('../helpers.js')

let randomNum = Math.floor(Math.random() * 100) + 1
let tentativas = 1

let palpite = validarInteiro("Pensei em um número entre 1 e 100... tente adivinhar: ")

while (palpite !== randomNum) {
  tentativas += 1
  let dica = palpite > randomNum ? "Mais baixo..." : "Mais alto..."
  console.log(dica)

  palpite = validarInteiro("Tente novamente: ")
}

console.log(`Parabéns, você acertou! Foram necessárias ${tentativas} tentativas.`)