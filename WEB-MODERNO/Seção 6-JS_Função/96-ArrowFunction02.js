function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade ++
        console.log(this.idade)
    }, 1000)
}

console.log(new Pessoa) // Instancia a função Pessoa e executa o setInterval