const express = require('express');
const router = express.Router();

router.post('/ex1', function (req, res) {
    const numeros = req.body.notas
    let soma = 0
    for (let n of numeros) {
        soma += n
    }
    const media = soma / numeros.length
    res.json({ media })
})

router.post('/ex2', function (req, res) {
    let numeros = []
    for (let i = 1; i < 101; i++) {
        numeros.push(i)
    }
    res.json({ numeros })
})

router.post('/ex3', function (req, res) {
    let numeros = []
    for (let i = 1; i < 11; i++) {
        numeros.push(i)
    }
    const mensagem = (`${numeros.join(', ')}`)
    res.json({ mensagem })
})

router.post('/ex4', function (req, res) {
    let numeros = [];
    for (let i = 1; i < 11; i++) {
        numeros.push(i);
    }
    numeros = numeros.sort((a, b) => b - a); 
    const mensagem = `${numeros.join(', ')}`;
    res.json({ mensagem });
});

router.post('/ex5', function (req, res) {
    let numeros = [];
    for (let i = 101; i < 111; i++) {
        numeros.push(i);
    } 
    const mensagem = `${numeros.join(', ')}`;
    res.json({ mensagem });
});

router.post('/ex6', function (req, res) {
    const numeros = req.body
    let soma = 0
    for (let numero = 0; numero < numeros.length; numero++) {
       soma += numeros[numero]
    } 
    res.json({ soma });
});

router.post('/ex7', function (req, res) {
    const numero = req.body
   
    for (let i = 1; ; numero++) {
       soma += numeros[numero]
    } 
    res.json({ soma });
});


module.exports = router