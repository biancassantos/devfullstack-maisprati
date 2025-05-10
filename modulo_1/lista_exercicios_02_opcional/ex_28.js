/* 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

let matriz = [
  [7, 2, 5, 9, 1, 6, 0, 8, 4, 3], // 0,1 / 1,2 / 2,3 / 3,4
  [3, 0, 9, 1, 7, 2, 8, 6, 5, 4],
  [4, 6, 2, 5, 8, 0, 3, 1, 9, 7],
  [1, 7, 6, 3, 4, 9, 2, 0, 8, 5],
  [5, 3, 1, 7, 6, 8, 9, 2, 0, 4],
  [8, 9, 0, 2, 3, 5, 4, 7, 6, 1],
  [0, 4, 3, 6, 2, 7, 5, 9, 1, 8],
  [2, 1, 8, 0, 5, 3, 7, 4, 6, 9],
  [9, 5, 7, 4, 0, 1, 6, 3, 2, 8],
  [6, 8, 4, 1, 9, 0, 3, 5, 7, 2]
] // 1,0 / 2,1 / 3,2

function somarElementos(matriz) {
  let somaElementosAcima = 0
  let somaElementosAbaixo = 0

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {

      if (i != j && i < j) {
        somaElementosAcima += matriz[i][j]
      } else if (i != j && i > j) {
        somaElementosAbaixo += matriz[i][j]
      }

    }
  }

  return [somaElementosAcima, somaElementosAbaixo]
}

let resultado = somarElementos(matriz)
console.log(`A soma dos elementos acima da diagonal principal é: ${resultado[0]}`)
console.log(`A soma dos elementos abaixo da diagonal principal é: ${resultado[1]}`)