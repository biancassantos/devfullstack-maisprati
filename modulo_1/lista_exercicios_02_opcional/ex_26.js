/* 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto P[1..3,1..5]. */

let a = [
  [3, 7, 1, 9, 0],
  [5, 2, 8, 4, 6],
  [1, 0, 3, 7, 2]
]

let b = [ // Inverti a B pra conseguir fazer o produto pq não sei se foi erro de digitação 🤠
  [2, 1, 7],
  [1, 0, 3],
  [9, 4, 1],
  [0, 2, 3],
  [4, 1, 1]
]

let p = []

/* 
- Primeira linha x primeira coluna
a[0][0] x b[0][0]
a[0][1] x b[1][0]
a[0][2] x b[2][0]
a[0][3] x b[3][0]
a[0][4] x b[4][0]

- Primeira linha x segunda coluna
a[0][0] x b[0][1]
a[0][1] x b[1][1]
a[0][2] x b[2][1]
a[0][3] x b[3][1]
a[0][4] x b[4][1]
*/

for (let linha = 0; linha < 3; linha++) { // linhas da A
  p[linha] = []

  for (let coluna = 0; coluna < 3; coluna++) { // colunas da B
    let somaColuna = 0

    for (let i = 0; i < 5; i++) { // linhas da B
      let produto = a[linha][i] * b[i][coluna]
      somaColuna += produto
    }

    p[linha].push(somaColuna)
  }
}

console.table(p)