/* 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade. */

const prompt = require('prompt-sync')();
const { validarInteiro } = require('../helpers.js')

let nomes = []
let idades = []

for (let i = 1; i < 10; i++) {
  let nome = prompt(`Nome da ${i}ª pessoa: `)
  let idade = validarInteiro(`Idade da ${i}ª pessoa: `)

  nomes.push(nome)
  idades.push(idade)

  console.log("---")
}

console.log("Pessoas menores de idade:")

idades.forEach((idade, index) => {
  if (idade < 18) {
    console.log(`${nomes[index]}, ${idade} anos.`)
  }
})