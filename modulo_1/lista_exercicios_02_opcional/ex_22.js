/* 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos.
Faça uma função que leia esses dados para um número não determinado de pessoas e retorne: 
a média de salário da população, 
a média do número de filhos, 
o maior salário e 
o percentual de pessoas com salário até R$ 350,00. */

const { validarInteiro, validarNumero, validarOpcao } = require('../helpers.js')

let quantidadePessoas = 0
let somaSalarios = 0
let somaFilhos = 0
let maiorSalario
let quantidadeSalarioAte350 = 0

let opcoes = ["s", "n"]

while (true) {
  let salario = validarNumero("Informe o salário: R$ ")
  let filhos = validarInteiro("Informe a quantidade de filhos: ")

  quantidadePessoas++
  somaSalarios += salario
  somaFilhos += filhos

  if (!maiorSalario || salario > maiorSalario) {
    maiorSalario = salario
  }

  if (salario <= 350) {
    quantidadeSalarioAte350++
  }

  let res = validarOpcao("Deseja fazer mais um registro? [S/N] ", opcoes)

  console.log("-----------------------")

  if (res === "n") {
    break
  }
}

let mediaSalarios = (somaSalarios / quantidadePessoas).toFixed(2)
let mediaFilhos = Math.round(somaFilhos / quantidadePessoas)
let percentutalSalarios = ((quantidadeSalarioAte350 / quantidadePessoas) * 100).toFixed(1)

console.log(`A média de salários da população é R$ ${mediaSalarios}`)
console.log(`A média de filhos da população é ${mediaFilhos}`)
console.log(`O maior salário informado foi R$ ${maiorSalario.toFixed(2)}`)
console.log(`O percentual de habitantes com salário até R$ 350,00 é ${percentutalSalarios}%`)