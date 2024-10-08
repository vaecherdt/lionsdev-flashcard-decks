## Estrutura do Projeto
O projeto está organizado da seguinte forma:

* `data.js`: Contém os dados de baralhos e flashcards.
* `index.js`: Contém a lógica principal do aplicativo e o menu interativo para o usuário.

#### Arquivos e Pastas
* `baralho/`: Contém módulos para criar, listar, atualizar e deletar baralhos.
* `flashcard/`: Contém módulos para criar, listar, atualizar, deletar e buscar flashcards.


## Instalação
Clone este repositório:

```bash
git clone https://github.com/whitebeardit/lions-academy-avaliacoes.git
cd module7
```

Instale as dependências:

```bash
npm install
```
## Uso

Para iniciar o aplicativo, execute o seguinte comando:

```bash
node src/index.js
```

Você verá um menu interativo com as seguintes opções:

```markdown
1. Criar Baralho
2. Criar Flashcard
3. Listar Baralhos
4. Listar Flashcards
5. Listar Flashcards por Baralho
6. Atualizar Baralho
7. Atualizar Flashcard
8. Deletar Baralho
9. Deletar Flashcard
10. Buscar Flashcards por Pergunta
11. Buscar Flashcards por Baralho
0. Sair
```

Escolha uma opção digitando o número correspondente e siga as instruções na tela.

## Dados

Os dados de baralhos e flashcards são armazenados em `data.js`. Aqui está um exemplo do conteúdo:

```javascript
let baralhos = [
    { id: 1, titulo: "JavaScript Básico" },
    { id: 2, titulo: "HTML e CSS" },
    { id: 3, titulo: "Node.js" }
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
```