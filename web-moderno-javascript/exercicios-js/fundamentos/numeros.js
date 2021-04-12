const peso1 = 1.0
const peso2 = Number('2.0')
console.log(peso1)
console.log(typeof peso1)
console.log(peso2)
console.log(typeof peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))
console.log(media.toString()) //Converte em string

console.log(media.toString(2)) // Converte em binário
console.log(typeof media)
console.log(typeof Number)  //Number com maisculo é uma função

