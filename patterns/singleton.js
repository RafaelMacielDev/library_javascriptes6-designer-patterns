// O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la. Ex.: JQuery.

function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }
    return Pessoa.instance;
}
const p = Pessoa.call({ name: 'Rafael' });
const p2 = Pessoa.call({ name: 'Custon Name'});

console.log(p);
console.log(p2);