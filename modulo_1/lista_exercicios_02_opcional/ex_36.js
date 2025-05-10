/* 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR". */

const { validarInteiro } = require('../helpers.js')

let gabarito = []
let jogadores = []

function contarAcertos(arr) {
  let acertos = 0
  arr.forEach((resposta, i) => {
    if (resposta === gabarito[i]) {
      acertos += 1
    }
  })

  return acertos
}

for (let i = 1; i <= 13; i++) {
  let resposta = validarInteiro(`Resposta ${i} do gabarito: `)
  gabarito.push(resposta)
}

console.log("-----------------------------")
console.log("--- Registro de jogadores ---")
for (let i = 1; i <= 100; i++) {
  let jogador = {
    numero_cartao: undefined,
    respostas: []
  }

  jogador.numero_cartao = validarInteiro(`Número do cartão do ${i}º jogador: `)
  
  for (let j = 1; j <= 13; j++) {
    let resposta = validarInteiro(`Resposta ${j}: `)
    jogador.respostas.push(resposta)
  }

  jogadores.push(jogador)
  console.log("-----------------------------")
}

console.log("--- Resultado das apostas ---")
jogadores.forEach(jogador => {
  let acertos = contarAcertos(jogador.respostas)
  console.log(`Jogador de cartão número ${jogador.numero_cartao}:`)
  console.log(`${acertos} acertos`)

  if (acertos === 13) {
    console.log("Parabéns, tu foi o GANHADOR")
  }

  console.log("-----")
})