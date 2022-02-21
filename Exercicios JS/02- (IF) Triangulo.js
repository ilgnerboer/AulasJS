// 
// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
// Equilatero: Os três lados são iguais. 
// Isosceles: Dois lados iguais. 
// Escaleno: Todos os lados são diferentes. 
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. 
// (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function calculoTriangulo (L1, L2, L3) {
    if(L1 == L2 && L2 == L3){        
        return 'Equilatero'
    } else if (L1 == L2 || L2 == L3 || L1 == L3)
        return 'Isosceles'
    else
        return 'Escaleno'
}

console.log(calculoTriangulo(2, 2, 2))
console.log(calculoTriangulo(2, 3, 3))
console.log(calculoTriangulo(2, 3, 4))


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