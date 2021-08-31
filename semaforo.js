const semaforo = document.getElementById("semaforo")

function acenderVermelho(){
    semaforo.src = "img/vermelho.png"
}

function acenderAmarelo(){
    semaforo.src = "img/amarelo.png"
}

function acenderVerde(){
    semaforo.src = "img/verde.png"
}


function trocarImg(){
    if(semaforo.src = "img/vermelho.png"){
        acenderAmarelo()
    } else if (semaforo.src = "img/amarelo.png"){
        acenderVerde()
    } else if (semaforo.src = "img/amarelo.png"){
        acenderVermelho()
    }
}

function acenderAutomatico(){
    setInterval(trocarImg, 500)
}

document.getElementById("buttonVermelho").addEventListener("click", acenderVermelho)
document.getElementById("buttonAmarelo").addEventListener("click", acenderAmarelo)
document.getElementById("buttonVerde").addEventListener("click", acenderVerde)
document.getElementById("buttonAutomatico").addEventListener("click", acenderAutomatico)