/* 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci. Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

let a = 0
let b = 1

for (let i = 0; i < 9; i++) {
  if (a === 0) {
    console.log(a)
  }

  let c = a + b
  b = a
  a = c
  console.log(c)
}