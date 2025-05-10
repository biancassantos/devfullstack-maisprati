/* 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro */

const prompt = require('prompt-sync')();
const { validarNumero } = require('../helpers.js')

let funcionario = {}

funcionario.nome = prompt("Nome do funcionário: ")
funcionario.cargo = prompt("Cargo do funcionário: ")
funcionario.salario = validarNumero("Salário do funcionário: R$ ")

console.log(funcionario)