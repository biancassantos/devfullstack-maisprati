/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

const prompt = require('prompt-sync')();

let nota = Number(prompt("Digite a nota: "))

if (nota < 0 || nota > 10) {
  console.log("Valor fora do limite de notas.")
} else if (nota < 5) {
  console.log("Reprovado")
} else if (nota < 7) {
  console.log("Recuperação")
} else if (nota >= 7) {
  console.log("Aprovado")
} else {
  console.log("Valor inválido")
}