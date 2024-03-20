const express = require('express');
const router = express.Router();

router.post('/ex1', function (req, res) {
    const { quantMinima, quantMaxima} = req.body;
    const estoqueMedio = (quantMinima + quantMaxima) / 2;
    res.json({ estoqueMedio });
})

router.post('/ex2', function (req, res) {
    const { nomeFunc, horasTrabalhadas, valorHora, quantFilhos} = req.body;
    const salarioBruto = (horasTrabalhadas * valorHora);
    const extraFilhos = quantFilhos * (salarioBruto * 0.03);
    const salarioFinal = salarioBruto + extraFilhos;
    res.json({ nomeFunc, salarioFinal });
})

router.post('/ex3', function (req, res) {
    const {nome, anos, meses, dias} = req.body;
    anosDias = anos * 365;
    mesesDias = meses * 30;
    idade = anosDias + mesesDias + dias
    res.json({ nome, idade });
})

router.post('/ex4', function (req, res) {
   const { nome, idade } = req.body;
   anos = parseInt( idade / 365 );
   meses = parseInt(( idade % 365 )/30);
   dias = parseInt(idade - ((anos*365) + (meses*30)));
   res.json({ nome, anos, meses, dias });
})

router.post('/ex4', function (req, res) {
   const { nome, idade } = req.body;
   anos = parseInt( idade / 365 );
   meses = parseInt(( idade % 365 )/30);
   dias = parseInt(idade - ((anos*365) + (meses*30)));
   res.json({ nome, anos, meses, dias });
})

router.post('/ex6', function (req, res) {
   const { tempo } = req.body
   const horas = parseInt(tempo / (60*60))
   const minutos = parseInt((tempo % (60*60))/60)
   const segundos = parseInt(tempo - ((60*60) + (minutos*60)))
   res.json({ horas, minutos, segundos });
})

router.post('/ex4', function (req, res) {
   const { nome, idade } = req.body;
   anos = parseInt( idade / 365 );
   meses = parseInt(( idade % 365 )/30);
   dias = parseInt(idade - ((anos*365) + (meses*30)));
   res.json({ nome, anos, meses, dias });
})

router.post('/ex4', function (req, res) {
   const { nome, idade } = req.body;
   anos = parseInt( idade / 365 );
   meses = parseInt(( idade % 365 )/30);
   dias = parseInt(idade - ((anos*365) + (meses*30)));
   res.json({ nome, anos, meses, dias });
})



module.exports = router