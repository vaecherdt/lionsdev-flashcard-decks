const { baralhos } = require('../data');

function listarBaralhos() {
    console.log('Baralhos:');
    baralhos.forEach(baralho => console.log(baralho));
}

module.exports = listarBaralhos;
