const prompt = require("prompt-sync")({ sigint: true });
const { flashcards } = require("../data");
const findFlashcardIndexById = require("./findFlashcardIndexById");

function deletarFlashcard() {
  const id = parseInt(prompt("Digite o ID do flashcard: "));
  const index = findFlashcardIndexById(id);
  if (index !== -1) {
    flashcards.splice(index, 1);
    console.log("Flashcard removido com sucesso.");
  } else {
    console.log("Flashcard não encontrado.");
  }
}

module.exports = deletarFlashcard;
