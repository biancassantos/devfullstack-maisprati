/* 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário. */

const { validarOpcao } = require('../helpers.js')

let gabarito = []
let alternativas = ["a", "b", "c", "d"]

function contarAcertos(arr) {
  let acertos = 0
  arr.forEach((resposta, i) => {
    if (resposta === gabarito[i]) {
      acertos += 1
    }
  })

  return acertos
}

for (let i = 1; i <= 20; i++) {
  let resposta = validarOpcao(`Resposta ${i} do gabarito: `, alternativas)
  gabarito.push(resposta)
}

console.log("------------------------------------")
console.log("- Consulta de resultado dos alunos -")
for (let i = 1; i <= 50; i++) {
  let respostasAluno = []

  console.log(`Respostas do ${i}º aluno:`)
  
  for (let j = 1; j <= 20; j++) {
    let resposta = validarOpcao(`Resposta ${j}: `, alternativas)
    respostasAluno.push(resposta)
  }

  let resultado = contarAcertos(respostasAluno)

  console.log("-------------------")
  console.log(`Aluno ${i}: ${resultado} acertos`)
  if (resultado >= 12) {
    console.log("Situação: APROVADO")
  } else {
    console.log("Situação: REPROVADO")
  }

  console.log("-----------------------------")
}