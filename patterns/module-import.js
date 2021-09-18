// É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais. No exemplo, estarei exportado para module-import.js

const {getName, setName} = require('./module');
console.log(getName());
console.log(setName('Rafael'));
console.log(getName());