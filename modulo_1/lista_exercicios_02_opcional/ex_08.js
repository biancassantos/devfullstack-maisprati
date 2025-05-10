/* 8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

const prompt = require('prompt-sync')();

let horasAtividadesMensais = Number(prompt("Informe sua quantidade de horas de atividades físicas no mês: "))

let quantidadePontos = 0
let totalDinheiroGanho = 0

if (Number.isInteger(horasAtividadesMensais)) {
  if (horasAtividadesMensais < 10) {
    quantidadePontos = horasAtividadesMensais * 2
    
  } else if (horasAtividadesMensais <= 20) {
    quantidadePontos = horasAtividadesMensais * 5

  } else {
    quantidadePontos = horasAtividadesMensais * 10
  }

  totalDinheiroGanho = quantidadePontos * 0.05
  console.log(`Você juntou ${quantidadePontos} pontos e ganhou R$ ${totalDinheiroGanho.toFixed(2)}`)

} else {
  console.log("Quantidade inválida.")
}