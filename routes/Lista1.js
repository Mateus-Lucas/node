const express = require('express');
const router = express.Router();

router.post('/ex1', (req, res) => {
    const { nota1, nota2, nota3, nota4 } = req.body;
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado';
    res.json({ media, mensagem });
});

router.post('/ex2', (req, res) => {
    const { totalEleitores, votosBrancos, votosNulos, votosValidos } = req.body;
    const soma = votosBrancos + votosNulos + votosValidos;
    if (soma > totalEleitores) {
        return res.status(400).json({
            codigo: 'SOMA_ELEITORES',
            mensagem: "A soma dos votos não pode passar o total de eleitores"
        });
    }
    const percBrancos = votosBrancos / totalEleitores * 100;
    const percNulos = votosNulos / totalEleitores * 100;
    const percValidos = votosValidos / totalEleitores * 100;
    res.status(200).json({ percBrancos, percNulos, percValidos });
});

router.post('/ex3', (req, res) => {
    const salarioAnual = Number(req.body.salario);
    const reajuste = 0.07;
    const novoSalario = salarioAnual * (1 + reajuste);
    res.status(200).json({
        codigo: novoSalario,
        mensagem: "Novo salario"
    });
});

router.post('/ex4', (req, res) => {
    const { custoFabrica } = req.body;
    const custoDistribuidor = custoFabrica * 0.28;
    const custoImposto = custoFabrica * 0.45;
    const custoFinal = custoFabrica + custoDistribuidor + custoImposto;
    res.json({ custoFinal });
});

router.post('/ex5', (req, res) => {
    const { custoFabrica, percentualDistribuidor, percentualImposto } = req.body;
    const custoDistribuidor = custoFabrica * (percentualDistribuidor / 100);
    const custoImposto = custoFabrica * (percentualImposto / 100);
    const custoFinal = custoFabrica + custoDistribuidor + custoImposto;
    res.json({ custoFinal });
});

router.post('/ex6', (req, res) => {
    const { totalCarros, valorPorCarro, valorDasVendas, salario } = req.body;
    const pagamentoPorCarro = totalCarros * valorPorCarro;
    const pagamentoPorVenda = valorDasVendas * 0.05;
    const salarioFinal = salario + pagamentoPorCarro + pagamentoPorVenda;
    res.json({ salarioFinal });
});

router.post('/ex7', (req, res) => {
    const { nota1, nota2 } = req.body;
    const media = (nota1 * 0.4) + (nota2 * 0.6);
    res.json({ MediaAluno: media });
});

router.post('/ex8', (req, res) => {
    const { raio, altura } = req.body;
    const volume = 3.14 * raio ** 2 * altura;
    res.json({ Volume: volume });
});

router.post('/ex9', (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = (Number(num1) + Number(num2)) * Number(num1);
    res.json({ Resultado: resultado });
});

module.exports = router;
