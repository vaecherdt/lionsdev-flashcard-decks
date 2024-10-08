const prompt = require('prompt-sync')({sigint: true});
const { flashcards } = require('../data');

function buscarFlashcardsPorBaralho() {
    const idBaralho = parseInt(prompt('Digite o ID do baralho: '));
    const resultados = flashcards.filter(flashcard => flashcard.idBaralho === idBaralho);
    console.log('Resultados da busca:');
    resultados.forEach(flashcard => console.log(flashcard));
}

module.exports = buscarFlashcardsPorBaralho;
