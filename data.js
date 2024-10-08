let baralhos = [
    { id: 1, titulo: "JavaScript Básico" },
    { id: 2, titulo: "HTML e CSS" },
    { id: 3, titulo: "Node.js" },
];

let flashcards = [
    { id: 1, pergunta: "O que é uma variável?", resposta: "Um espaço de memória para armazenar valores.", idBaralho: 1 },
    { id: 2, pergunta: "O que é uma função?", resposta: "Um bloco de código que pode ser executado quando chamado.", idBaralho: 1 },
    { id: 3, pergunta: "O que é HTML?", resposta: "Uma linguagem de marcação para criar páginas web.", idBaralho: 2 },
    { id: 4, pergunta: "O que é CSS?", resposta: "Uma linguagem de estilos usada para descrever a apresentação de documentos HTML.", idBaralho: 2 },
    { id: 5, pergunta: "O que é Node.js?", resposta: "Um ambiente de execução para JavaScript no servidor.", idBaralho: 3 },
    { id: 6, pergunta: "Como instalar o Node.js?", resposta: "Você pode instalar o Node.js a partir do site oficial ou usando um gerenciador de pacotes.", idBaralho: 3 }
];

module.exports = { baralhos, flashcards };