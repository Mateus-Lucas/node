const express = require('express');
const router = express.Router();

router.post('/ex1', (req, res) => {
    const { nota1, nota2, nota3, nota4 } = req.body;
    const media = (nota1 + nota2 + nota3 + nota4) / 4;
    const mensagem = media >= 7 ? 'Aprovado' : 'Reprovado';
    res.json({ media, mensagem });
});