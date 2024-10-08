const prompt = require('prompt-sync')({sigint: true});
const { flashcards } = require('../data');

function listarFlashcardsPorBaralho() {
    const idBaralho = parseInt(prompt('Digite o ID do baralho: '));
    console.log(`Flashcards do Baralho ${idBaralho}:`);
    flashcards.filter(flashcard => flashcard.idBaralho === idBaralho)
              .forEach(flashcard => console.log(flashcard));
}

module.exports = listarFlashcardsPorBaralho;
