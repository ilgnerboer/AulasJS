// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function valores (valor1, valor2) {
    console.log (valor1 + valor2, valor1 - valor2, valor1 * valor2, valor1 / valor2)
}

 valores(2,2)

// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: . . . 
// Equilátero: Os três lados são iguais.
// Isósceles: Dois lados iguais
// Escaleno: Todos os lados são diferentes
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. 
// (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function classicarTriangulos (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3)
    console.log ('Equilatero')
        else if (lado1 == lado2)
            console.log('Isosceles')
                else 
                console.log('Escaleno')
                
}

classicarTriangulos(2,2,2)
classicarTriangulos(2,2,5)
classicarTriangulos(2,3,4)