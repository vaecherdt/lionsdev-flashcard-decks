const { flashcards } = require('../data');

function findFlashcardIndexById(id) {
    return flashcards.findIndex(flashcard => flashcard.id === id);
}

module.exports = findFlashcardIndexById;
