/* 44. Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número. */

function contarStrings(obj) {
  let totalStrings = 0

  for (k in obj) {
    if (typeof obj[k] === "string") {
      totalStrings += 1
    }
  }

  return totalStrings
}

let fruta = {
  id: 1,
  nome: "laranja",
  quantidade: 12,
  categoria: "cítrica"
}

console.log(contarStrings(fruta))