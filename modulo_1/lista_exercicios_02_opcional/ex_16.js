/* 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

let numeros = []

for (let i = 0; i < 20; i++) {
  let numeroAleatorio = Math.floor(Math.random() * 100)
  numeros.push(numeroAleatorio)
}

console.log("Os valores gerados foram:")
console.log(numeros)

let numerosOrdenados = numeros.sort((a, b) => a - b)

console.log("Os valores ordenados:")
console.log(numerosOrdenados)