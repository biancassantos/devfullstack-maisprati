/* 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas. */

const prompt = require('prompt-sync')();

let distancia = Number(prompt("Qual distância deseja percorrer? [Km] "))

let precoKm = distancia > 200 ? 0.45 : 0.5
let precoPassagem = (distancia * precoKm).toFixed(2)

if (Number.isFinite(distancia)) {
  console.log(`O preço da passagem é R$ ${precoPassagem}`)
} else {
  console.log("Distância inválida.")
}