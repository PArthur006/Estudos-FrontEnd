// Função IIFE (Immediately Invoked Function Expression)
(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
    const nome = 'João'
    console.log(`Meu nome é ${nome}`)
})()