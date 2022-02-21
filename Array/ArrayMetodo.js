const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // retira o ultimo elemento do array (Massa)
console.log(pilotos)

pilotos.push('Verstappen') // acrescenta um elemento no final do array 
console.log(pilotos) 

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // acrescenta um elemento no comeco do array
console.log(pilotos)

// splice pode adicionar e remover um elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa vai ser retirado
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)