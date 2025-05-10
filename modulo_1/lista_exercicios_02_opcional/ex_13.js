/* 13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci. */

let fibonacci = []
let a = 0
let b = 1

for (let i = 0; i < 14; i++) {
  if (a === 0) {
    fibonacci.push(a)
  }

  let c = a + b
  b = a
  a = c

  fibonacci.push(c)
}

console.table(fibonacci)