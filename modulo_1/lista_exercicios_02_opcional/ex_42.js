/* 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays */

function selecionarArrays(obj) {
  let arrays = {}

  for (k in obj) {
    if (Array.isArray(obj[k])) {
      arrays[k] = obj[k]
    }
  }

  return arrays
}

let dados = {
  nome: "Taylor Swift",
  idade: 35,
  albuns: ["folklore", "1989", "reputation"],
  ano_nascimento: 1989,
  gatos: ["Meredith", "Olivia", "Benjamin"],
}

let arrays = selecionarArrays(dados)
console.log(arrays)