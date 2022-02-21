const nome = 'Ilgner'
console.log(nome)

let nota1 = 10
let nota2 = 7
let MediaNotas = (nota1 + nota2) / 2

console.log(MediaNotas)
    if (MediaNotas >=7)
        console.log('Aprovado')

    else 
    console.log('Reprovado')


    //  01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function criarOperadores (operador1, operador2) {
    console.log (operador1 + operador2, operador1 - operador2, operador1 * operador2, operador1 / operador2)
    
}
criarOperadores(1, 1)