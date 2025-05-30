/* 9. Conversão Entre Formatos
Escreva duas funções:
- paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.
- objetoParaPares(obj) faz o inverso, retornando um array de pares. */

function paresParaObjeto(pares) {
  let obj = {}
  pares.forEach(par => obj[par[0]] = par[1])
  return obj
}

function objetoParaPares(obj) {
  let arr = []
  for (let [k, v] of Object.entries(obj)) {
    arr.push([k, v])
  }
  return arr
}

let pets = [["fred", 9], ["jack", 8], ["shakira", 10]]
let frutas = {
  uva: 6,
  abacaxi: 5,
  tangerina: 10,
  ameixa: 8
}

console.log(paresParaObjeto(pets))
console.log(objetoParaPares(frutas))