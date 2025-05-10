/* 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos */

let matriz = []

for (let i = 1; i <= 7; i++) {
  matriz[i] = []

  for (let j = 1; j <= 7; j++) {
    if (i === j) {
      matriz[i][j] = 1
    } else {
      matriz[i][j] = 0
    }
  }

}

console.table(matriz)