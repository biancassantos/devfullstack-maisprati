/* 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias. */

const { validarNumero } = require('../helpers.js')

let pares = []
let impares = []

for (let i = 1; i <= 30; i++) {
  let val = validarNumero(`Informe o ${i}º valor: `)

  if (val % 2 === 0) {
    pares.push(val)
  } else {
    impares.push(val)
  }

  if (pares.length === 5) {
    console.log("Valores pares até o momento:")
    console.log(pares)
    pares = []
  }

  if (impares.length === 5) {
    console.log("Valores ímpares até o momento:")
    console.log(impares)
    impares = []
  }
}

console.log(pares)
console.log(impares)