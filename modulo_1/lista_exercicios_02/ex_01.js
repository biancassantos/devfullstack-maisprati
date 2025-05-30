/* 1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário. */

function ehDataValida(dia, mes, ano) {
  let bissexto = (ano % 4 === 0 && ano % 100 != 0) || (ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 0)
  let meses31 = [1, 3, 5, 7, 8, 10, 12]

  if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12) {

    if ((dia > 30 && !meses31.includes(mes)) || (dia === 29 && mes === 2 && !bissexto)) {
      return false
    } else {
      return true
    }

  }
  
  return false
}

console.log(ehDataValida(29, 2, 2024))
console.log(ehDataValida(29, 2, 1900))
console.log(ehDataValida(31, 4, 2020))
console.log(ehDataValida(30, 12, 2016))
console.log(ehDataValida(32, 12, 2020))