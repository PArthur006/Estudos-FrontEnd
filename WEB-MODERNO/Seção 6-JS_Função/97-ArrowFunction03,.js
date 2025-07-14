let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true no Node.js, false no navegador

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // false no Node.js, true no navegador
comparaComThisArrow(module.exports) // No Node.js, module.exports é o objeto atual, mas no navegador é o objeto global

comparaComThis = comparaComThis.bind(obj) // bind não afeta arrow function
comparaComThisArrow(obj) 
comparaComThisArrow(module.exports) // No caso de arrow function, o this não é afetado pelo bind, pois ela herda o this do contexto onde foi definida.