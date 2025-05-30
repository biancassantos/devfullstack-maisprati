/* 5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo. */

function debounce(fn, delay) {
  let timeoutId

  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

function sayHello(s) {
  console.log(`Olá, após ${s}s.`)
}

let debouncer = debounce(() => sayHello(2), 2000)

debouncer()