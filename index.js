const perguntas = [
    {
        pergunta: "Qual é a principal finalidade do JavaScript?",
        respostas: [
            "Estilização de páginas web",
            "Manipulação de banco de dados",
            "Adicionar interatividade às páginas web",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
        respostas: [
            "let = myVar;",
            "const myVar;",
            "variable myVar;",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
        respostas: [
            "Um estilo de programação em JavaScript",
            "Uma linguagem de marcação",
            "Uma representação estruturada de um documento HTML",
        ],
        correta: 2
    },
    {
        pergunta: "Como se realiza um loop 'for' em JavaScript?",
        respostas: [
            "for (let i = 0; i < 10; i++)",
            "loop (i = 0; i < 10; i++)",
            "repeat (i = 0; i < 10; i++)",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
        respostas: [
            "Selecionar elementos por classe",
            "Selecionar elementos por ID",
            "Selecionar elementos por nome",
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma função de callback em JavaScript?",
        respostas: [
            "Uma função que chama outra função",
            "Uma função que é passada como argumento para outra função",
            "Uma função que retorna um valor booleano",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o operador '===' em JavaScript?",
        respostas: [
            "Atribuição",
            "Comparação estrita",
            "Concatenação",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
        respostas: [
            "'let' é para números, 'const' é para strings",
            "'let' permite reatribuição, 'const' é uma atribuição única",
            "'let' é para variáveis locais, 'const' é para variáveis globais",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "Uma linguagem de programação",
            "Um formato de intercâmbio de dados",
            "Um método de seleção de elementos HTML",
        ],
        correta: 1
    },
    {
        pergunta: "Como adicionar um evento de clique a um elemento HTML em JavaScript?",
        respostas: [
            "element.addClickListener",
            "element.addEventListener('click', function)",
            "element.clickEvent = function",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição para pegar todas as perguntas
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    //cria um clone do template presente no html. (true) significa que vai clonar tudo
    quizItem.querySelector('h3').textContent = item.pergunta
    //transforma o h3 do html nas perguntas coletadas no loop, muda o conteudo

    // loop para pegar todas as respostas
    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        //cria uma variavel que usa a região das respostas, presente no template do html. (dl dt significa que selecionou o "filho do dl" ou seja o dt). (true) assim como nas perguntas, ele clona tudo. 
        dt.querySelector('span').textContent = resposta
        //"direciona" as respostas para ficarem no conteudo do span

        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta // true ou false, compara se a alternativa marcada é igual a resposta correta
            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

        }

        quizItem.querySelector('dl').appendChild(dt)
        //isso foi feito para adicionar todas as respotas na tela
    }

    quizItem.querySelector('dl dt').remove()
    // isso foi feito para deletar o "Resposta A", ou seja, o conteudo do span html, que estava presente em todas as respostas da tela






    // coloca a pergunta na tela
    quiz.appendChild(quizItem)

}


