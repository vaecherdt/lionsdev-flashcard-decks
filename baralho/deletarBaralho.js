const prompt = require('prompt-sync')({sigint: true});
const { baralhos, flashcards } = require('../data');

function deletarBaralho() {
    const id = parseInt(prompt('Digite o ID do baralho: '));
    const index = baralhos.findIndex(b => b.id === id);
    if (index !== -1) {
        baralhos.splice(index, 1);
        for (let i = flashcards.length - 1; i >= 0; i--) {
            if (flashcards[i].idBaralho === id) {
                flashcards.splice(i, 1);
            }
        }
        console.log('Baralho e seus flashcards foram removidos com sucesso.');
    } else {
        console.log('Baralho não encontrado.');
    }
}

module.exports = deletarBaralho;
