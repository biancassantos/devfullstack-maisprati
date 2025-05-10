/* 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor. */

function sumarioVendas(arr) {
  let obj = {}

  arr.forEach(venda => {
    if (!obj[venda.vendedor]) {
      obj[venda.vendedor] = venda.valor

    } else {
      obj[venda.vendedor] += venda.valor
    }
  })

  return obj
}

let vendas = [
  {
    vendedor: "Maria",
    valor: 350
  },
  {
    vendedor: "Vitor",
    valor: 200
  },
  {
    vendedor: "Dani",
    valor: 400
  },{
    vendedor: "Maria",
    valor: 125
  },
  {
    vendedor: "Vitor",
    valor: 180
  },
]

console.log(sumarioVendas(vendas))