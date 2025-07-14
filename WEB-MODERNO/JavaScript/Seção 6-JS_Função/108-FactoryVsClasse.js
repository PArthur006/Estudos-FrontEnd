// Factory com Classe 
// Cria uma classe Pessoa com um método falar
// A classe é uma forma de criar objetos com métodos e propriedades 
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

// Factory com Arrow Function
// Retorna um objeto com uma função falar
// A função é uma forma de encapsular a lógica de criação do objeto
// e permite criar objetos com métodos sem a necessidade de uma classe
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Pedro')
p2.falar()