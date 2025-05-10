/* 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica. */

/* Regras de Negócio:
- Um hotel só pode aceitar reservas se houver quartos disponíveis.
- As reservas devem ser identificadas por um ID único e associadas a um único hotel. */

let hoteis = [
  {
    id: 1,
    nome: "Grand Hotel Budapest",
    cidade: "Lutz",
    quartos_totais: 20,
    quartos_disponiveis: 1
  },{
    id: 2,
    nome: "Copacabana Palace",
    cidade: "Rio de Janeiro",
    quartos_totais: 10,
    quartos_disponiveis: 4
  }
]

let reservas = []

function menu() {
  console.log("---------------------------")
  console.log("    Sistema de reservas    ")
  console.log("---------------------------")
  console.log("Escolha a opção desejada:")
  console.log("1- Adicionar um hotel")
  console.log("2- Buscar hotel por cidade")
  console.log("3- Fazer uma reserva")
  console.log("4- Cancelar reserva")
  console.log("5- Listar reservas")
  console.log("---------------------------")
}

function readOption() {
  let opcao = Number(prompt("Opção desejada:"))

  while (!Number.isInteger(opcao) || opcao < 1 || opcao > 5) {
    console.error("Opção inválida")
    opcao = Number(prompt("Opção desejada:"))
  }

  switch (opcao) {
    case 1:
      addHotel()
      break

    case 2:
      searchHotels()
      break

    case 3:
      makeReservation()
      break

    case 4:
      cancelReservation()
      break

    case 5:
      listReservations()
      break
  }
}

// Helper functions
function checkId(arr, id) {
  return arr.some(item => item.id === id)
}

function validateInteger(msg) {
  let num = Number(prompt(msg))

  while (!Number.isInteger(num) || num < 0) {
    console.error("Valor inválido.")
    num = Number(prompt(msg))
  }

  return num
}

function validateString(msg) {
  let str = prompt(msg)

  while (!str) {
    console.error("Este campo não pode ficar em branco.")
    str = prompt(msg)
  }

  return str
}

function checkEndOfSession() {
  let continuar = confirm("Clique em 'OK' para realizar mais ações ou 'Cancelar' para finalizar sua sessão.")
  if (continuar) readOption()
}


// Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
function addHotel() {
  let id = validateInteger("ID do hotel:")
  let hotelExiste = checkId(hoteis, id)

  while (hotelExiste || !id) {
    if (!id) {
      console.error("O ID não pode ser nulo.")
    } else {
      console.error("Um hotel com esse ID já existe. Tente outro.")
    }

    id = validateInteger("ID do hotel:")
    hotelExiste = checkId(hoteis, id)
  }

  let nome = validateString("Nome do hotel:")
  let cidade = validateString("Cidade:")
  let quartos_totais = validateInteger("Quartos totais:")

  while (quartos_totais < 1) {
    console.error("O hotel precisa possuir pelo menos 1 quarto.")
    quartos_totais = validateInteger("Quartos totais:")
  }

  let quartos_disponiveis = validateInteger("Quartos disponíveis:")

  while (quartos_disponiveis > quartos_totais) {
    console.error("A quantidade de quartos disponíveis não pode ser maior que a quantidade de quartos totais.")
    quartos_disponiveis = validateInteger("Quartos disponíveis:")
  }

  let hotel = {
    id,
    nome,
    cidade,
    quartos_totais,
    quartos_disponiveis
  }

  hoteis.push(hotel)
  console.log("Hotel adicionado com sucesso!")
  checkEndOfSession()
}

// Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
function searchHotels() {
  let cidade = validateString("Qual cidade deseja consultar?")

  console.log("--------------------------------")
  console.log(`Hotéis disponíveis em ${cidade}:`)
  console.log("--------------------------------")
  hoteis.forEach(hotel => {
    if (hotel.cidade.toLowerCase() === cidade.toLowerCase() && hotel.quartos_disponiveis > 0) {
      console.log(hotel.nome)
    }
  })

  checkEndOfSession()
}

// Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
function makeReservation() {
  let id = validateInteger("ID da reserva:") // id_reserva, nome simplificado para utilizar a função checkId
  let reservaExiste = checkId(reservas, id)

  while (reservaExiste || !id) {
    if (!id) {
      console.error("O ID não pode ser nulo.")
    } else {
      console.error("Uma reserva com esse ID já existe. Tente outro.")
    }
    
    id = validateInteger("ID da reserva:")
    reservaExiste = checkId(reservas, id)
  }

  let id_hotel = validateInteger("ID do hotel:")
  let hotelExiste = checkId(hoteis, id_hotel)
  let hotelSelecionado = hoteis.find(hotel => hotel.id === id_hotel)

  while (!hotelExiste) {
    console.error("ID não encontrado no sistema.")
    id_hotel = validateInteger("ID do hotel:")
    hotelExiste = checkId(hoteis, id_hotel)
    hotelSelecionado = hoteis.find(hotel => hotel.id === id_hotel)  
  }

  if (hotelSelecionado.quartos_disponiveis < 1) {
    let continuar = confirm("O hotel selecionado não possui quartos disponíveis. Clique em 'OK' para fazer reserva em outro hotel ou 'Cancelar' para sair do processo de reserva.")

    if (continuar) {
      makeReservation()
      return
    }

  } else {
    let nome_cliente = validateString("Nome do cliente:")

    let reserva = {
      id,
      id_hotel,
      nome_cliente
    }

    reservas.push(reserva)
    hotelSelecionado["quartos_disponiveis"] = hotelSelecionado["quartos_disponiveis"] - 1

    console.log("Reserva realizada com sucesso!")
  }
  
  checkEndOfSession()
}

// Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
function cancelReservation() {
  let id = validateInteger("ID da reserva:")
  let reservaExiste = checkId(reservas, id)

  if (!reservaExiste) {
    console.error("Reserva não encontrada no sistema.")
    
  } else {
    let reservaCancelada = reservas.find(reserva => reserva.id === id)
    let idHotelCancelado = reservaCancelada.id_hotel
    let hotelCancelado = hoteis.find(hotel => hotel.id === idHotelCancelado)
    hotelCancelado["quartos_disponiveis"] = hotelCancelado["quartos_disponiveis"] + 1

    reservas = reservas.filter(reserva => reserva.id != id)
    console.log("Reserva cancelada com sucesso.")
  }

  checkEndOfSession()
}

// Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
function listReservations() {
  console.log("---------------------")
  console.log("  Lista de reservas  ")
  console.log("---------------------")

  reservas.forEach(reserva => {
    let idHotel = reserva.id_hotel
    let hotelReserva = hoteis.find(hotel => hotel.id === idHotel)

    console.log(`Reserva #${reserva.id}`)
    console.log(`Hotel: ${hotelReserva.nome}`)
    console.log(`Cidade: ${hotelReserva.cidade}`)
    console.log(`Cliente: ${reserva.nome_cliente}`)
    console.log("---------------------")
  })

  checkEndOfSession()
}

// Início do programa
menu()

let iniciar = confirm("Bem-vindo(a) ao Sistema de Reservas de Hotéis! Deseja começar sua sessão?")
if (iniciar) readOption()


/* Desafios Adicionais (Opcionais):
- Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
- Gerar relatórios de ocupação para um hotel.
- Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel. */