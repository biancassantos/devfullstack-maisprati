/* 49. Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. */

function categorizarTransacoes(arr) {
  let obj = {}

  arr.forEach(transacao => {
    if (!obj[transacao.categoria]) {
      obj[transacao.categoria] = []
      obj[`subtotal_${transacao.categoria}`] = transacao.valor
    } else {
      obj[`subtotal_${transacao.categoria}`] += transacao.valor
    }

    obj[transacao.categoria].push(transacao)  
  })

  return obj
}


let transacoes = [
  {
    id: 1,
    valor: 19.90,
    data: "01-03-2025",
    categoria: "streaming"
  },{
    id: 2,
    valor: 11.99,
    data: "03-04-2025",
    categoria: "streaming"
  },{
    id: 3,
    valor: 100,
    data: "01-05-2025",
    categoria: "alimentacao"
  },{
    id: 4,
    valor: 80,
    data: "01-05-2025",
    categoria: "vestuario"
  },{
    id: 5,
    valor: 34.90,
    data: "02-05-2025",
    categoria: "vestuario"
  },{
    id: 6,
    valor: 58,
    data: "03-05-2025",
    categoria: "lazer"
  },
]

console.log(categorizarTransacoes(transacoes))