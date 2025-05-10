/* 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Kmh-1,exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida. */

const prompt = require('prompt-sync')();

let velocidade = Number(prompt("Informe a velocidade do carro [Km/h]: "))

if (Number.isFinite(velocidade)) {

  if (velocidade > 80) {
    let quantidadeAcima = Math.ceil(velocidade - 80)
    let multa = (quantidadeAcima * 5).toFixed(2)

    console.log(`Você ultrapassou o limite da velocidade permitida. O valor da multa a ser paga é R$ ${multa}`)

  } else {
    console.log("OK")
  }

} else {
  console.log("Valor inválido.")
}