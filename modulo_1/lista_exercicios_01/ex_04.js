/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')();

let opcao = prompt("Escolha uma opção [pedra/papel/tesoura]: ")

switch (opcao) {
  case "pedra":
    console.log("🪨")
    break

  case "papel":
    console.log("📄")
    break

  case "tesoura":
    console.log("✂️")
    break

  default:
    console.log("Desculpe, não temos emoji para essa opção.")
}