const prompt = require('prompt-sync')({sigint: true});
const { flashcards } = require('../data');

function criarFlashcard() {
    const pergunta = prompt('Digite a pergunta do flashcard: ');
    const resposta = prompt('Digite a resposta do flashcard: ');
    const idBaralho = parseInt(prompt('Digite o ID do baralho: '));
    const id = flashcards.length > 0 ? flashcards[flashcards.length - 1].id + 1 : 1;
    flashcards.push({ id, pergunta, resposta, idBaralho });
    console.log('Flashcard criado com sucesso.');
}

module.exports = criarFlashcard;