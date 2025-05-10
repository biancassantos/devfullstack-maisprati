/* 47. Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os resultados. */

function transformarObj(obj, cb) {
  let novoObj = {}

  for (k in obj) {
    let item = cb(obj[k])
    novoObj[k] = item
  }

  return novoObj
}

function modificar(value) {
  if (typeof value === "string") {
    return value.toUpperCase()

  } else if (typeof value === "number") {
    return value + (value * 0.15)
    
  } else {
    return value
  }
}

let pessoa = {
  nome: "Louis de Pointe du Lac",
  profissao : "Empresário",
  salario: 10000
}

console.log(transformarObj(pessoa, modificar))