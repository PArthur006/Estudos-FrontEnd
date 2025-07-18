const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// Com callback
notasAltas = notas.filter(function(nota) {
    return nota > 7
})
console.log(notasAltas)

// Com arrow function
notas7 = notas.filter(nota => 8 > nota && nota > 7)
console.log(notas7)
