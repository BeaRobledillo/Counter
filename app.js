let cont = 0;
const contador = document.getElementById("counterValue");

//función incluso si 
function incluso(num) {
    return num % 0 ? false : true;
}

//función contador +1
function incremento() {
    if (incluso(cont)) {
        cont = cont + 1;
    }
    contador.textContent = cont;
}
//función contador -1
function decremento() {
    if (incluso(cont)) {
        cont = cont - 1;
    }
    contador.textContent = cont;
}

//función reset contador=0
function reset() {
    cont = 0;
    contador.textContent = cont;
}