/* 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS). */

let funcionarios = [
  {
    matricula: 1,
    nome: "Bianca",
    salario_bruto: 10000
  },{
    matricula: 2,
    nome: "Mia",
    salario_bruto: 3300
  },{
    matricula: 3,
    nome: "Lucas",
    salario_bruto: 2500
  },{
    matricula: 4,
    nome: "Sofia",
    salario_bruto: 4100
  },{
    matricula: 5,
    nome: "Felipe",
    salario_bruto: 3000
  },{
    matricula: 6,
    nome: "Olivia",
    salario_bruto: 5000
  },{
    matricula: 7,
    nome: "Laura",
    salario_bruto: 2900
  },{
    matricula: 8,
    nome: "Oliver",
    salario_bruto: 5000
  }
]

function calcularDeducao(salario) {
  let desconto = 0.12
  return salario * desconto
}

console.log("- Lista de funcionários -")
console.log("--------------------------")

funcionarios.forEach(funcionario => {
  let deducao = calcularDeducao(funcionario.salario_bruto)
  let salarioLiquido = funcionario.salario_bruto - deducao

  console.log(`Matrícula: ${funcionario.matricula}`)
  console.log(`Nome: ${funcionario.nome}`)
  console.log(`Salário bruto: R$ ${funcionario.salario_bruto.toFixed(2)}`)
  console.log(`Dedução INSS: R$ ${deducao.toFixed(2)}`)
  console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`)
  console.log("--------------------------")
})