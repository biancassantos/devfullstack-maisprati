/* 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades. */

function combinarInventario(inventario1, inventario2) {
  let novoInventario = inventario1

  for (k in inventario2) {
    if (!novoInventario[k]) {
      novoInventario[k] = inventario2[k]
    } else {
      novoInventario[k] += inventario2[k]
    }
  }

  return novoInventario
}

let inventarioLojaA = {
  notebook: 20,
  fone: 15,
  teclado: 21,
  mouse: 7
}

let inventarioLojaB = {
  fone: 8,
  monitor: 10,
  mouse: 4
}

console.log(combinarInventario(inventarioLojaA, inventarioLojaB))