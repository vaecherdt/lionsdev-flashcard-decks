const prompt = require('prompt-sync')({sigint: true});
const { flashcards } = require('../data');

function buscarFlashcardsPorPergunta() {
    const pergunta = prompt('Digite a pergunta do flashcard: ');
    const resultados = flashcards.filter(flashcard => flashcard.pergunta.includes(pergunta));
    console.log('Resultados da busca:');
    resultados.forEach(flashcard => console.log(flashcard));
}

module.exports = buscarFlashcardsPorPergunta;
