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

module.exports = router