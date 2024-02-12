const perguntas = [
    {
      pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro",
        "Imprimir dados no console",
        "Criar uma variável"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
      respostas: [
        "Comparação de valores sem considerar o tipo",
        "Atribuição de valores",
        "Comparação estrita de valores e tipos"
      ],
      correta: 2
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar;",
        "const myVar = 10;",
        "ambas as opções acima estão corretas"
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável",
        "Uma variável global"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Nenhuma, são sinônimos",
        "let é usado para valores constantes, const para variáveis",
        "let permite reatribuição, const cria variáveis imutáveis"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um método de criptografia",
        "Um modelo de objeto para manipular documentos HTML",
        "Uma linguagem de programação"
      ],
      correta: 1
    },
    {
      pergunta: "Como se realiza uma iteração sobre os elementos de um array em JavaScript?",
      respostas: [
        "Usando a estrutura 'if-else'",
        "Com a declaração 'switch'",
        "Utilizando loops como 'for' ou 'forEach'"
      ],
      correta: 2
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Um método de formatação de texto",
        "Uma linguagem de estilização",
        "Um formato de dados leve e intercambiável"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São iguais, usados de forma intercambiável",
        "'null' representa a ausência de valor, 'undefined' é atribuído explicitamente",
        "Ambos representam valores vazios"
      ],
      correta: 1
    },
    {
      pergunta: "Como se adiciona um evento a um elemento HTML usando JavaScript?",
      respostas: [
        "Apenas com CSS",
        "Usando o atributo 'event'",
        "Através do método 'addEventListener'"
      ],
      correta: 2
    },
];

const template = document.querySelector('template')

const quiz = document.querySelector('#quiz')

const corretas = new Set()

const divAcertos = document.querySelector('#div-acertos span')


for(let item of perguntas) {
    const temItem = template.content.cloneNode(true)
    temItem.querySelector('h3').textContent = item.pergunta;

    for(let resposta of item.respostas) {
      let dt = temItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta;
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        corretas.delete(resposta)
          if(event.target.value == item.correta) {
            corretas.add(resposta)
          }

        divAcertos.textContent = corretas.size + ' de ' + perguntas.length;
      }
      temItem.querySelector('dl').appendChild(dt)
    }

    const dl = temItem.querySelector('dl')

    dl.querySelector('dt').remove()

    quiz.appendChild(temItem)
    console.log(item.pergunta)
}




/* 
outra maneira ded calcular os acertos 

   if(dt.querySelector('input').value == item.correta) {
          n++
        } else {
          n = n + 0
        }
        res.textContent = (n)

/*

/*

dt.querySelector('input').onchange = (event) => {
  const estacerta = event.target.value == item.correta;
  if(estacerta) {
    alert(item.correta)
  }
}

*/