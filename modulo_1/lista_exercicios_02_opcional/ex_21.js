/* 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

const prompt = require('prompt-sync')();

let opcoes = ["m", "f"]

function pesoIdeal(alt, sexo) {
  if (sexo === "m") {
    return 72.7 * alt - 58

  } else {
    return 62.1 * alt - 44.7
  }
}

let altura = Number(prompt("Informe sua altura: [m] "))

while (!Number.isFinite(altura)) {
  console.log("Altura inválida.")
  altura = Number(prompt("Informe sua altura: [m] "))
}

let sexo = prompt("Informe seu sexo: [M/F] ").toLowerCase()

while (!opcoes.includes(sexo)) {
  console.log("Opção inválida.")
  sexo = prompt("Informe seu sexo: [M/F] ").toLowerCase()
}

let resultado = pesoIdeal(altura, sexo)
console.log(`Seu peso ideal é ${resultado.toFixed(1)}kg`)