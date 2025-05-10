/* 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados. */

const { validarInteiro } = require('../helpers.js')

let numeros = []

for (let i = 1; i <= 10; i++) {
  let num = validarInteiro(`Informe o ${i}º número: `)
  numeros.push(num)
}

console.log("Os números pares informados foram:")

numeros.forEach((numero, index) => {
  if (numero % 2 === 0) {
    console.log(`Número ${numero}, na posição ${index}`)
  }
})