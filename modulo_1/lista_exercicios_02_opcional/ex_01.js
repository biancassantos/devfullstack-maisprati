/* 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias. */

const prompt = require('prompt-sync')();

let quantidadeCigarros = Number(prompt("Quantos cigarros você fuma por dia? "))
let quantidadeAnos = Number(prompt("Há quantos anos você fuma? "))

let minutosPerdidosDia = quantidadeCigarros * 10
let diasFumados = quantidadeAnos * 365
let minutosEmUmDia = 1440

let diasPerdidos = Math.round((minutosPerdidosDia * diasFumados) / minutosEmUmDia)

if (diasPerdidos) {
  console.log(`Você já perdeu, aproximadamente, ${diasPerdidos} dias de vida.`)
} else {
  console.log("Valores inválidos.")
}