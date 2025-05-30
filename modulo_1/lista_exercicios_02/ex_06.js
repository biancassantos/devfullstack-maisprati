/* 6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações. */

function memoize(fn) {
  const cache = {}

  return function (...args) {
    const key = JSON.stringify(args)

    if (cache[key]) {
      return cache[key]
    }

    const result = fn.apply(this, args)
    cache[key] = result
    return result
  }
}

function fatorial(n) {
  if (n < 0) {
    throw new Error("Valor inválido para fatorial")
  } else if (n === 0 || n === 1) {
    return 1
  }

  return n * fatorial(n - 1)
}

let memoFatorial = memoize(fatorial)

console.log(memoFatorial(100))
console.log(fatorial(100))