// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função, mesmo após o contexto em que ela foi criada ter sido executado

//Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x // o escopo da função dentro tem acesso ao escopo da função fora
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // 'Local', pois dentro() acessa a variável x
console.log(minhaFuncao.x) // undefined, pois x não é uma propriedade da função
