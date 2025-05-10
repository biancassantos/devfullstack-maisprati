/* 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array. */

function criarObjeto(arr) {
  let obj = {}

  arr.forEach(item => {
    if (!obj[item]) {
      let arrItem = arr.filter(elemento => elemento === item)
      obj[item] = arrItem.length
    }
  })

  return obj
}

let frutas = ["laranja", "uva", "morango", "uva", "banana", "laranja", "ameixa", "uva"]
console.log(criarObjeto(frutas))