/* 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados. */

const prompt = require('prompt-sync')();

let nomes = []

for (let i = 1; i <= 7; i++) {
  let nome = prompt(`Informe o ${i}º nome: `)
  nomes.push(nome)
}

console.log("--------------------")

nomes.reverse().forEach(nome => {
  console.log(nome)
})