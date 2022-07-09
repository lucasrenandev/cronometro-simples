
const inicio = document.querySelector("#iniciar")
inicio.addEventListener('click', iniciar)

const congelar = document.querySelector("#pausar")
congelar.addEventListener('click', pausar)

const interromper = document.querySelector("#parar")
interromper.addEventListener('click', parar)

let milisegundos = 0
let segundos = 0
let minutos = 0
let horas = 0
let interval = null
let time = document.querySelector("#time")

// FUNÇÃO INICIAR
function iniciar() {
    pausar()
    interval = setInterval(contador, 10)
}

// FUNÇÃO PAUSAR 
function pausar() {
    clearInterval(interval)
}

// FUNÇÃO PARAR 
function parar() {
    clearInterval(interval)
    milisegundos = 0
    segundos = 0
    minutos = 0
    horas = 0
    time.innerHTML = "00:00:00:000"
}

// FUNÇÃO ADICIONAR Nº 0
function adicionarZero(numero) {
    if(numero < 10) {
        return '0' + numero
    }
    else {
        return numero
    }
}

// FUNÇÃO CONTADOR
function contador() {
    if((milisegundos += 10) === 1000) {
        segundos ++
        milisegundos = 0
        if(segundos === 60) {
            minutos ++
            segundos = 0
            if(minutos === 60) {
                horas ++
                minutos = 0
            }
        }
    }

    time.innerHTML = adicionarZero(horas) + ':' + adicionarZero(minutos) + ':' + adicionarZero(segundos) + ':' + milisegundos
}