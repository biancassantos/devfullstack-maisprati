/* 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos. */

function combinarObjetos(obj1, obj2) {
  return {...obj1, ...obj2}
}

let humano = {
  nome: "Lestat de Lioncourt",
  especie: "Humano",
  idade: 34,
}
let vampiro = {
  especie: "Vampiro",
  idade: 265,
  criador: "Magnus"
}

let novoObj = combinarObjetos(humano, vampiro)
console.log(novoObj)