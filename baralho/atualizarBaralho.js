const prompt = require('prompt-sync')({sigint: true});
const { baralhos } = require('../data');

function atualizarBaralho() {
    const id = parseInt(prompt('Digite o ID do baralho: '));
    const titulo = prompt('Digite o novo título do baralho: ');
    const baralho = baralhos.find(b => b.id === id);
    if (baralho) {
        baralho.titulo = titulo;
        console.log('Baralho atualizado com sucesso.');
    } else {
        console.log('Baralho não encontrado.');
    }
}

module.exports = atualizarBaralho;
