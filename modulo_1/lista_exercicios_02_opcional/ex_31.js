/* 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados. */

const { validarInteiro } = require('../helpers.js')

let matriz = []
let matrizFiltrada = []
let quantidadeValoresIguais = 0

let num = validarInteiro("Informe um número: ")

for (let i = 0; i < 30; i++) {
  matriz[i] = []

  for (let j = 0; j < 30; j++) {
    matriz[i][j] = validarInteiro(`Valor da posição [${i}, ${j}]: `)
  }
}

for (let i = 0; i < 30; i++) {
  matrizFiltrada[i] = []

  for (let j = 0; j < 30; j++) {
    if (matriz[i][j] === num) {
      quantidadeValoresIguais += 1
    } else {
      matrizFiltrada[i].push(matriz[i][j])
    }
  }

}

console.log("Matriz original:")
console.table(matriz)
console.log(`A quantidade de valores iguais à ${num} na matriz é ${quantidadeValoresIguais}.`)
console.log(`A matriz sem o valor ${num}:`)
console.table(matrizFiltrada)