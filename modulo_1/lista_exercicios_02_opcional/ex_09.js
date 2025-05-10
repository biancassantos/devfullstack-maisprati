/* 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário */

const { validarNumero, validarOpcao } = require('../helpers.js')

let res
let totalSalarioHomens = 0
let totalSalarioMulheres = 0

let sexos = ["f", "m"]
let opcoes = ["s", "n"]

do {
  let salario = validarNumero("Informe o salário do funcionário: R$ ")
  let sexo = validarOpcao("Informe o sexo do funcionário: [F/M] ", sexos)

  if (sexo === "m") {
    totalSalarioHomens += salario
  } else {
    totalSalarioMulheres += salario
  }

  res = validarOpcao("Deseja continuar? [S/N] ", opcoes)

  console.log("--------------------------------")

} while (res != "n")

console.log(`O total de salário pago aos homens é R$ ${totalSalarioHomens.toFixed(2)}`)
console.log(`O total de salário pago às mulheres é R$ ${totalSalarioMulheres.toFixed(2)}`)