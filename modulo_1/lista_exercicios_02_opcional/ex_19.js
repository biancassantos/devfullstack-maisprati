/* 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS. */

const prompt = require('prompt-sync')();

let regex = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d):?([0-5]\d)$/);

for (let i = 1; i <= 5; i++) {
  let horario = prompt(`Informe o ${i}º horário: `)

  while(!regex.test(horario)) {
    console.log("Horário inválido.")
    horario = prompt(`Informe o ${i}º horário: `)
  }

  console.log(horario.replaceAll(":", "."))
  console.log("---")
}