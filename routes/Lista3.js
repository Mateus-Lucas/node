const express = require('express');
const router = express.Router();

router.post('/ex1', function (req, res) {

    salario = req.body

    let salarioReajustado = 0

    if (salario > 2000) {
        salarioReajustado = salario * 1.3
    } else {
        salarioReajustado = salario * 1.5
    }

    return salarioReajustado

    res.json({ salarioReajustado })

})

router.post('/ex4', function (req, res) {

    const { salarioMinimo, horasTrabalhadas, dependentes, horasExtras } = req.body

    const valorHoraTrabalhada = salarioMinimo * 0.2
    const salarioMes = valorHoraTrabalhada * horasTrabalhadas
    const valorDependente = dependentes * 32
    const valorHoraExtra = valorHoraTrabalhada * 1.5 * horasExtras
    const salarioBruto = salarioMes + valorDependente + valorHoraExtra

    let imposto = 0

    if (salarioBruto > 2000) {
        imposto = salarioBruto >= 5000 ? salarioBruto * 0.2 : salarioBruto * 1
    }

    const salarioLiquido = salarioBruto - imposto
    const gratificacao = salarioLiquido < 3500 ? 1000 : 500
    const salarioReceber = salarioLiquido + gratificacao

        res.json({
            valorHoraTrabalhada,
            salarioMes,
            valorDependente,
            valorHoraExtra,
            salarioBruto, 
            salarioLiquido,
            gratificacao,
            salarioReceber
        })
})

module.exports = router