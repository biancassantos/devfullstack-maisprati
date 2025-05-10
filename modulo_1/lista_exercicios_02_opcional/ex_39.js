/* 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B */

const { validarNumero } = require('../helpers.js')

let arrOriginal = []
let arrCompacto = []

for (let i = 1; i <= 100; i++) {
  let val = validarNumero(`Digite o ${i} valor: `)
  arrOriginal.push(val)
}

arrOriginal.forEach(val => {
  if (val > 0) {
    arrCompacto.push(val)
  }
})

console.table(arrOriginal)
console.table(arrCompacto)