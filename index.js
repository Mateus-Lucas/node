// Pegando o express
const express = require('express')
const app = express()

// Criando rota
app.get('/', function (req, res) {
    res.send('Chegou a resposta')
})

app.get('/hello', function (req, res) {
    res.send('Chegou a resposta hello')
})

app.get('/nome', function(res, res) {
   res.send('Mateus')
})

// Ativando o servidor
app.listen(3000, function () {
    console.log('Server up')
})

