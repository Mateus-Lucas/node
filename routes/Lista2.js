const express = require('express');
const router = express.Router();

router.post('/ex1', function (req, res) {
   const { quantMinima, quantMaxima } = req.body;
   const estoqueMedio = (quantMinima + quantMaxima) / 2;
   res.json({ estoqueMedio });
})

router.post('/ex2', function (req, res) {
   const { nomeFunc, horasTrabalhadas, valorHora, quantFilhos } = req.body;
   const salarioBruto = (horasTrabalhadas * valorHora);
   const extraFilhos = quantFilhos * (salarioBruto * 0.03);
   const salarioFinal = salarioBruto + extraFilhos;
   res.json({ nomeFunc, salarioFinal });
})

router.post('/ex3', function (req, res) {
   const { nome, anos, meses, dias } = req.body;
   anosDias = anos * 365;
   mesesDias = meses * 30;
   idade = anosDias + mesesDias + dias;
   res.json({ nome, idade });
})

router.post('/ex4', function (req, res) {
   const { nome, idade } = req.body;
   anos = parseInt(idade / 365);
   meses = parseInt((idade % 365) / 30);
   dias = parseInt(idade - ((anos * 365) + (meses * 30)));
   res.json({ nome, anos, meses, dias });
})

router.post('/ex5', function (req, res) {
   const { n1, n2, n3 } = req.body;
   const media = ((n1 * 2) + (n2 * 3) + (n3 * 5)) / 2 + 3 + 5;
   res.json({ media });
})

router.post('/ex6', function (req, res) {
   const { tempo } = req.body
   const horas = parseInt(tempo / (60 * 60));
   const minutos = parseInt((tempo % (60 * 60)) / 60);
   const segundos = parseInt(tempo - ((60 * 60) + (minutos * 60)));
   res.json({ horas, minutos, segundos });
})

router.post('/ex7', function (req, res) {
   const { nome, salarioFixo, totalVendas, percentual } = req.body;
   const salarioTotal = salarioFixo + ((percentual * 0.01) * totalVendas);
   res.json({ nome, salarioTotal });
})

router.post('/ex8', function (req, res) {
   const { nome, distancia, tempo } = req.body;
   const velocidadeMedia = distancia / tempo;
   mensagem = 'A velocidade média do ' + nome + ' foi ' + velocidadeMedia + ' Km/h';
   res.json({ mensagem });
})

router.post('/ex9', function (req, res) {
   const { salario } = req.body; 
   let salarioAjustado = 0;
   let mensagem = '';
   if (salario < 1000) {
      salarioAjustado = salario * 1.3;
      mensagem = 'Você tem direito ao reajuste';
   } else {
      salarioAjustado = salario;
      mensagem = 'Você não tem direito ao reajuste';
   }
   res.json({ salarioAjustado, mensagem });
})


module.exports = router