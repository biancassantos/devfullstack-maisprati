/* 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.)*/

const { validarInteiro } = require('../helpers.js')

let resultado = []

function consultarQuina(arr) {
  let acertos = 0
  arr.forEach((resposta, i) => {
    if (resposta === resultado[i]) {
      acertos += 1
    }
  })

  return acertos === 5
}

for (let i = 1; i <= 5; i++) {
  let valor = validarInteiro(`${i}º valor do resultado: `)
  resultado.push(valor)
}

console.log("-----------------")
console.log("---- Apostas ----")
for (let i = 1; i <= 50; i++) {
  let aposta = []

  console.log(`Aposta ${i}:`)
  
  for (let j = 1; j <= 5; j++) {
    let valor = validarInteiro(`${j}º valor: `)
    aposta.push(valor)
  }

  let quina = consultarQuina(aposta)

  if (quina) console.log("***Ganhador!")

  console.log("-----------------")
}