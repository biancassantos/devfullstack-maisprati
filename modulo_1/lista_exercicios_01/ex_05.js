/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

const prompt = require('prompt-sync')();

let peso = Number(prompt("Informe seu peso: "))
let altura = Number(prompt("Informe sua altura: "))
let calculo = peso / (altura * altura)
let imc = calculo.toFixed(2)

if (imc < 18.5) {
  console.log(`Seu IMC é ${imc}, você está abaixo do peso.`)
} else if (imc <= 24.9) {
  console.log(`Seu IMC é ${imc}, você está com o peso normal.`)
} else if (imc <= 29.9) {
  console.log(`Seu IMC é ${imc}, você está com sobrepeso.`)
} else if (imc <= 34.9) {
  console.log(`Seu IMC é ${imc}, você está com obesidade grau 1.`)
} else if (imc <= 39.9) {
  console.log(`Seu IMC é ${imc}, você está com obesidade grau 2.`)
} else if (imc >= 40) {
  console.log(`Seu IMC é ${imc}, você está com obesidade extrema.`)
} else {
  console.log("Valores inválidos")
}