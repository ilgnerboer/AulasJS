// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function imprimirResultado (valor1, valor2) {
    console.log("Resultado: " + Math.floor(valor1/valor2));
    console.log(`Resto: ${valor1 % valor2}`)
}

imprimirResultado(10, 5)

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)