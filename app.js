const prompt = require('prompt-sync')();
const criarBaralho = require('./baralho/criarBaralho');
const listarBaralhos = require('./baralho/listarBaralhos');
const atualizarBaralho = require('./baralho/atualizarBaralho');
const deletarBaralho = require('./baralho/deletarBaralho');
const criarFlashcard = require('./flashcard/criarFlashcard');
const listarFlashcards = require('./flashcard/listarFlashcards');
const listarFlashcardsPorBaralho = require('./flashcard/listarFlashcardsPorBaralhoId');
const atualizarFlashcard = require('./flashcard/atualizarFlashcard');
const deletarFlashcard = require('./flashcard/deletarFlashcard');
const buscarFlashcardsPorPergunta = require('./flashcard/buscarFlashcardsPorPergunta');
const buscarFlashcardsPorBaralho = require('./flashcard/buscarFlashcardsPorBaralho');

function menu() {
    console.log(`
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
    `);
}

function main() {
    let opcao;
    do {
        menu();
        opcao = parseInt(prompt('Escolha uma opção: '));
        switch (opcao) {
            case 1:
                criarBaralho();
                break;
            case 2:
                criarFlashcard();
                break;
            case 3:
                listarBaralhos();
                break;
            case 4:
                listarFlashcards();
                break;
            case 5:
                listarFlashcardsPorBaralho();
                break;
            case 6:
                atualizarBaralho();
                break;
            case 7:
                atualizarFlashcard();
                break;
            case 8:
                deletarBaralho();
                break;
            case 9:
                deletarFlashcard();
                break;
            case 10:
                buscarFlashcardsPorPergunta();
                break;
            case 11:
                buscarFlashcardsPorBaralho();
                break;
            case 0:
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida!');
        }
    } while (opcao !== 0);
}

main();
