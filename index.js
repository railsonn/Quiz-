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

  const quiz = document.querySelector('#quiz')

  const template = document.querySelector('template');

  const corretas = new Set();

  const acertos = document.querySelector('#acertos span')


for(let item of perguntas) {

  // enquanto o item for menor que as perguntas que e igual a 10, ele vai clonar o conteudo do template e vai mudar o texto do titulo para a pergunta do momento que ele esta executando o item, e para cada pergunta das tres perguntas do array ele vai clonar tbm o dt e vai mudar o texto do span para a resposta que esta sendo executada das tres respostas da pergunta que esta sendo executada das 10 perguntas, vai mudar o atributo nome e valor da pergunta que esta sendo executada, e vai adicionar um evento para saber se e a certa, e depois vai adicionar ao dl o clone do dt, e pra cada pergunta eu adiciono ao elemento html div o clone do template;

  const quizItem = template.content.cloneNode(true)

  quizItem.querySelector('h3').textContent = (item.pergunta)

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta;

    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))

    dt.querySelector('input').value = item.respostas.indexOf(resposta)

    dt.querySelector('input').onchange = (event) => {
      // corretas.delete(item) = toda vez que ele mudar a resposta ele vai apagar o item e vai adiconar o novo, e se for a respota certa ele vai adicionar ao Set
      corretas.delete(item)
      const estaCerta = event.target.value == item.correta ? corretas.add(item) : ''
      acertos.textContent = corretas.size + ' de ' + perguntas.length;
      console.log(estaCerta)
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}





