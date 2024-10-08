const prompt = require('prompt-sync')({sigint: true});
const { baralhos } = require('../data');

function criarBaralho() {
    const titulo = prompt('Digite o título do baralho: ');
    const id = baralhos.length + 1;
    baralhos.push({ id, titulo });
    console.log('Baralho criado com sucesso.');
}

module.exports = criarBaralho;