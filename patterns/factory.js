// Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, são consideradas funções Factory (fábrica).

function Pessoa(name) {
    return {
        name,
        lastName: 'Maciel'
    }
}
const p = Pessoa('Custom Name');
console.log(p);

// 

function Pessoa(customProperties) {
    return {
        name: 'Rafael',
        lastName: 'Maciel',
        ...customProperties
    }
}
const r = Pessoa({name: 'Custom Name', age: 31});
console.log(r);