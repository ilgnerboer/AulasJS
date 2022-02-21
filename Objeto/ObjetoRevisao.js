//  colecao dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto ['Marca do Produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89900,
    proprietario:{
        nome: 'Ilgner',
        idade: 31,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Gabryelle',
        idade: 22
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)

