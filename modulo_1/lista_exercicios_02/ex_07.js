/* 7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, …], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort. */

function orderArr(arr) {
  let orderedArr = arr.sort((a, b) => a.preco - b.preco)
  return orderedArr.map(item => item.nome)
}

let produtos = [
  {
    nome: "blusa",
    preco: 30
  },{
    nome: "calça",
    preco: 90
  },{
    nome: "saia",
    preco: 50
  },{
    nome: "sapato",
    preco: 80
  },{
    nome: "meia",
    preco: 20
  },
]

console.log(orderArr(produtos))