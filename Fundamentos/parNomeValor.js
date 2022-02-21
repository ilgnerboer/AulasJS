// par nome/ valor
const saudacao = 'Opa' // contexto lexico 1

function exec() {
    const saudacao = 'Falaaa' // contexto lexico 2
    return saudacao
}

// Objetos sao grupos alinhados de pares nome/valores
const cliente = {
    nome: 'Pedro',
    Idade: 32,
    Peso: 90,
    endereco: {
        logradouro: 'Rua legal',
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente)