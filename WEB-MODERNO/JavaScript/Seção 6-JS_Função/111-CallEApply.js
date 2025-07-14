function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

// Usando o método getPreco do objeto produto
console.log(getPreco())
console.log(produto.getPreco())

// Usando call e apply para alterar o contexto do this
const carro = { preco: 49990, desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Usando call e apply para passar o contexto do objeto carro
// Ambos os métodos permitem que você chame uma função com um contexto específico
// A diferença é que call aceita uma lista de argumentos separados por vírgula,
// enquanto apply aceita um array de argumentos.
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))