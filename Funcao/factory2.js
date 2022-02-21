function criarProduto(Nome, Preco) {
    return {
        Nome,
        Preco,
        desconto: 0.1
    }
}
console.log(criarProduto('Notebook', 2199.49))