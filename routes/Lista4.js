const express = require('express');
const router = express.Router();

router.post('/ex1', function (req, res) {
    const valoress = req.body.notas
    let soma = 0
    for (let n of valoress) {
        soma += n
    }
    const media = soma / valoress.length
    res.json({ media })
})

router.post('/ex2', function (req, res) {
    let valoress = []
    for (let i = 1; i < 101; i++) {
        valoress.push(i)
    }
    res.json({ valoress })
})

router.post('/ex3', function (req, res) {
    let valoress = []
    for (let i = 1; i < 11; i++) {
        valoress.push(i)
    }
    const mensagem = (`${valoress.join(', ')}`)
    res.json({ mensagem })
})

router.post('/ex4', function (req, res) {
    let valoress = [];
    for (let i = 1; i < 11; i++) {
        valoress.push(i);
    }
    valoress = valoress.sort((a, b) => b - a);
    const mensagem = `${valoress.join(', ')}`;
    res.json({ mensagem });
});

router.post('/ex5', function (req, res) {
    let valoress = [];
    for (let i = 101; i < 111; i++) {
        valoress.push(i);
    }
    const mensagem = `${valoress.join(', ')}`;
    res.json({ mensagem });
});

router.post('/ex6', function (req, res) {
    const valoress = req.body
    let soma = 0
    for (let valores = 0; valores < valoress.length; valores++) {
        soma += valoress[valores]
    }
    res.json({ soma });
});

router.post('/ex7', function (req, res) {
    const valores = req.body.valores;
    let valoress = [1];
    for (let i = 2; i <= valores; i += 2) {
        valoress.push(i);
    }
    if (valores % 2 != 0) {
        valoress.push(valores)
    }
    res.json({ valoress });
});

router.post('/ex8', function (req, res) {
    const valores = req.body.valores;
    let negativos = [];
    valores.forEach(valor => {
        valor = valor < 0 ? valor : negativos.push(valor);
    });
    res.json({ negativos });
});

router.post('/ex9', function (req, res) {
    const valores = req.body.valores;
    let negativos = [];
    valores.forEach(valor => {
        valor = valor < 0 ? negativos.push(valor) : valor;
    });
    res.json({ negativos });
});

router.post('/ex10', function (req, res) {
    const valores = req.body.valores;
    let dentroIntervalo = [];
    let foraIntervalo = [];
    valores.forEach(valor => {
        if (10 <= valor && valor <= 20) {
            dentroIntervalo.push(valor);
        } else {
            foraIntervalo.push(valor);
        }
    });
    res.json({ dentroIntervalo, foraIntervalo });
});

router.post('/ex11', function (req, res) {
    const valores = [21, 54, 98, 65, 87, 65, 21, 98, 87, 65]
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    const media = soma / valores.length
    res.json({ media });
})

router.post('/ex12', function (req, res) {
    const valores = req.body.valores
    let soma = 0
    for (let i = 0; i < valores.length; i++) {
        soma += valores[i]
    }
    const media = soma / valores.length
    res.json({ media });
})

router.post('/ex13', function (req, res) {
    const numero = req.body.numero
    let tripoValores = []
    for (let i = 1; i < numero; i++) {
        tripoValores.push(i * 3)
    }

    res.json({ tripoValores });
})

router.post('/ex14', function (req, res) {
    let valores = []
    let dobroValores = []
    for (let i = 1; i < 31; i++) {
        valores.push(i)
        dobroValores.push(i * 2)
    }

    res.json({ valores, dobroValores });
})

router.post('/ex15', function (req, res) {
    let numeros = req.body.numeros;
    function lerNumeros() {
        for (let i = 0; i < 10; i++) {
            let numero = parseInt(req.body[`numero${i + 1}`]);
            numeros.push(numero);
        }
    }
    function somarNumerosInferioresA40() {
        let soma = 0;
        for (let numero of numeros) {
            if (numero < 40) {
                soma += numero;
            }
        }
        return soma;
    }
    function main() {
        lerNumeros();
        let soma = somarNumerosInferioresA40();
        res.json({ soma: soma });
    }
    main();
});

router.post('/ex16', function (req, res) {
    const { totalItens, valoresItens } = req.body;
    let valorTotalEstoque = 0;

    for (let i = 0; i < valoresItens.length; i++) {
        valorTotalEstoque += valoresItens[i];
    }
    const mediaValorItem = valorTotalEstoque / totalItens;
    res.json({ valorTotalEstoque, mediaValorItem });
});

router.post('/ex17', function (req, res) {
    const { inicio, fim } = req.body;
    let soma = 0;
    const numerosImpares = [];
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            numerosImpares.push(i);
            soma += i;
        }
    }
    res.json({ numerosImpares, soma });
});

router.post('/ex18', function (req, res) {
    const { valores } = req.body;
    let maiorValor = valores[0];
    let menorValor = valores[0];
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > maiorValor) {
            maiorValor = valores[i];
        }
        if (valores[i] < menorValor) {
            menorValor = valores[i];
        }
        soma += valores[i];
    }
    const media = soma / valores.length;
    res.json({ maiorValor, menorValor, media });
});

router.post('/ex19', function (req, res) {
    const { dadosAlunos } = req.body;
    let numAlunosPorCurso = {
        "Sistemas de Informação": 0,
        "Ciência da Computação": 0,
        "Engenharia Civil": 0
    };
    let numAlunosEntre20e25PorCurso = {
        "Sistemas de Informação": 0,
        "Ciência da Computação": 0,
        "Engenharia Civil": 0
    };
    let somaIdadesPorCurso = {
        "Sistemas de Informação": 0,
        "Ciência da Computação": 0,
        "Engenharia Civil": 0
    };
    for (let aluno of dadosAlunos) {
        numAlunosPorCurso[aluno.curso]++;
        somaIdadesPorCurso[aluno.curso] += aluno.idade;
        if (aluno.idade >= 20 && aluno.idade <= 25) {
            numAlunosEntre20e25PorCurso[aluno.curso]++;
        }
    }
    let mediaIdadePorCurso = {};
    for (let curso in numAlunosPorCurso) {
        mediaIdadePorCurso[curso] = somaIdadesPorCurso[curso] / numAlunosPorCurso[curso];
    }
    let menorMediaIdadeCurso = Object.keys(mediaIdadePorCurso)[0];
    for (let curso in mediaIdadePorCurso) {
        if (mediaIdadePorCurso[curso] < mediaIdadePorCurso[menorMediaIdadeCurso]) {
            menorMediaIdadeCurso = curso;
        }
    }
    res.json({
        numAlunosPorCurso,
        numAlunosEntre20e25PorCurso,
        menorMediaIdadeCurso
    });
});

router.get('/ex20', function (req, res) {
    let tabuadas = {};
    for (let i = 1; i <= 10; i++) {
        let tabuada = [];
        for (let j = 1; j <= 10; j++) {
            tabuada.push(i * j);
        }
        tabuadas[i] = tabuada;
    }
    res.json(tabuadas);
});

router.post('/ex21', function (req, res) {
    const { dadosPesquisa } = req.body;
    let quantidadeNotas10 = 0;
    let somaIdades = 0;
    let quantidadePessoas = dadosPesquisa.length;
    let quantidadeNotas5ouMenos = 0;
    let pessoaMaisVelha = null;
    let maiorIdade = -1;
    for (let pessoa of dadosPesquisa) {
        if (pessoa.nota === 10) {
            quantidadeNotas10++;
        }
        somaIdades += pessoa.idade;
        if (pessoa.nota <= 5) {
            quantidadeNotas5ouMenos++;
        }
        if (pessoa.idade > maiorIdade) {
            pessoaMaisVelha = pessoa.nome;
            maiorIdade = pessoa.idade;
        }
    }
    let mediaIdade = somaIdades / quantidadePessoas;
    let percentagemNotas5ouMenos = (quantidadeNotas5ouMenos / quantidadePessoas) * 100;
    res.json({
        quantidadeNotas10,
        mediaIdade,
        percentagemNotas5ouMenos,
        pessoaMaisVelha
    });
});

router.post('/ex22', function (req, res) {
    const { produtos } = req.body;
    let maiorPreco = -Infinity;
    let somaPrecos = 0;
    for (let produto of produtos) {
        if (produto.preco > maiorPreco) {
            maiorPreco = produto.preco;
        }
        somaPrecos += produto.preco;
    }
    const mediaPrecos = somaPrecos / produtos.length;
    res.json({ maiorPreco, mediaPrecos });
});

module.exports = router