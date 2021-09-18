// É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais. No exemplo, estarei exportado para module-import.js

let name = 'default';

function getName() {
    return name;
}
function setName(newName) {
    name = newName;
}
module.exports = {
    getName,
    setName
};