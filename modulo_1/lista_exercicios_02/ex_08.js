/* 8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total. */

let vendas = [
  {
    cliente: "dora",
    total: 25
  },{
    cliente: "barbie",
    total: 10
  },{
    cliente: "mika",
    total: 30
  },{
    cliente: "mika",
    total: 10
  },{
    cliente: "dora",
    total: 35
  },
]

let clientes = vendas.reduce((acc, venda) => {
  // se já existir um valor daquele cliente, somamos a ele, se for o primeiro, somamos com zero
  return {...acc, [venda.cliente]: (acc[venda.cliente] || 0) + venda.total}
}, {})

console.log(clientes)