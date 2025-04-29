/* 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for. */

let a = 0
let b = 1

console.log(a)

for (let i = 0; i < 9; i++) {
  c = a + b
  b = a
  a = c
  console.log(c)
}