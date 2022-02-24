const porta = 3003

const express = require('express')
const app = express()


app.get('/produtos', (req, res, next) =>{
    res.send({Nome: 'Notebook', Preco: 123.45}) // Ja vem convertido para JSON (por causa do metodo SEND)
})

app.listen(porta, () => {
    console.log (`Servidor esta executando na porta ${porta}.`)
})


