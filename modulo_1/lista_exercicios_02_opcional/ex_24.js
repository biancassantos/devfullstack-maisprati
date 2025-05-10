/* 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M. */

let matriz = [
  [2, 3, 1, 6, 7, -1, 0, -2],
  [9, 1, -8, 3, 4, 1, 6, 2],
  [-6, 7, -5, 0, 2, 8, 5, 9],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [7, -1, 0, -5, 8, 3, 4, 2],
  [8, 3, -4, 1, 0, -6, -5, 1]
]

let c = []

for (let i = 0; i < matriz.length; i++) {
  let quantidadeNegativos = 0

  for (let j = 0; j < matriz[0].length; j++) {
    if (matriz[i][j] < 0) {
      quantidadeNegativos += 1
    }
  }

  c.push(quantidadeNegativos)
}

console.table(matriz)
console.table(c)