
const inicio = document.querySelector("#iniciar")
inicio.addEventListener('click', iniciar)

const congelar = document.querySelector("#pausar")
congelar.addEventListener('click', pausar)

const interromper = document.querySelector("#parar")
interromper.addEventListener('click', parar)

let segundos = 0
let minutos = 0
let horas = 0
let interval = null
let time = document.querySelector("#time")

// FUNÇÃO INICIAR
function iniciar() {
    contador()
    interval = setInterval(contador, 1000)
}

// FUNÇÃO PAUSAR 
function pausar() {
    clearInterval(interval)
}

// FUNÇÃO PARAR 
function parar() {
    clearInterval(interval)
    segundos = 0
    minutos = 0
    horas = 0
    time.innerHTML = "00:00:00"
}

// FUNÇAÕ ADICIONAR Nº 0
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
    segundos++
    if(segundos === 60) {
        minutos ++
        segundos = 0
        if(minutos === 60) {
            horas ++
            minutos = 0
        }
    }

    time.innerHTML = adicionarZero(horas) + ':' + adicionarZero(minutos) + ':' + adicionarZero(segundos)
}