/* 3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array. */

function extrairUnicas(str) {
  let unicas = []
  let palavras = str.split(" ")

  for (let p of palavras) {
    if (!unicas.includes(p)) unicas.push(p)
  }

  return unicas
}

/* function extrairUnicas(str) { // ----> opção com regex
  let regex = /\b(\w+)(?:\W+\1\b)+/gi
  return str.replace(regex, '$1').split(" ")
} */

console.log(extrairUnicas("olá olá mundo mundo"))
console.log(extrairUnicas("um dois tres tres quatro cinco"))
console.log(extrairUnicas("o céu está azul azul e lindo"))