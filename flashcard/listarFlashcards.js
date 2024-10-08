const { flashcards } = require('../data');

function listarFlashcards() {
    console.log('Flashcards:');
    flashcards.forEach(flashcard => console.log(flashcard));
}

module.exports = listarFlashcards;
