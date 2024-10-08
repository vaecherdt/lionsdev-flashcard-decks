const prompt = require('prompt-sync')({sigint: true});
const { flashcards } = require('../data');

function atualizarFlashcard() {
    const id = parseInt(prompt('Digite o ID do flashcard: '));
    const pergunta = prompt('Digite a nova pergunta do flashcard: ');
    const resposta = prompt('Digite a nova resposta do flashcard: ');
    const idBaralho = parseInt(prompt('Digite o novo ID do baralho: '));
    const flashcard = flashcards.find(f => f.id === id);
    if (flashcard) {
        flashcard.pergunta = pergunta;
        flashcard.resposta = resposta;
        flashcard.idBaralho = idBaralho;
        console.log('Flashcard atualizado com sucesso.');
    } else {
        console.log('Flashcard não encontrado.');
    }
}

module.exports = atualizarFlashcard;
