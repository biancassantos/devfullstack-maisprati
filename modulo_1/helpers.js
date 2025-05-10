const prompt = require('prompt-sync')();

function validarInteiro(msg) {
  let valor = Number(prompt(msg))

  while (!Number.isInteger(valor)) {
    console.log("Valor inválido.")
    valor = Number(prompt(msg))
  }

  return valor
}

function validarNumero(msg) {
  let valor = Number(prompt(msg))

  while (!Number.isFinite(valor)) {
    console.log("Valor inválido.")
    valor = Number(prompt(msg))
  }

  return valor
}

function validarOpcao(msg, arr) {
  let opcao = prompt(msg).toLowerCase()

  while (!arr.includes(opcao)) {
    console.log("Opção inválida.")
    opcao = prompt(msg).toLowerCase()
  }

  return opcao
}

module.exports = { validarInteiro, validarNumero, validarOpcao }