let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // quando tem apenas um parâmetro, não precisa dos parênteses
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' // quando não tem parâmetro, precisa dos parênteses
ola = _ => 'Olá' // quando não tem parâmetro, pode usar o underscore
console.log(ola())