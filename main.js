let chute = document.querySelector(".container__input");

let chuteSegreto = numeroAleatorio();
let contador = 1;

function botaoChute() {
    if(chute.value == chuteSegreto) {
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", `Você descobriu o número secreto em ${contador} tentativas!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute.value < chuteSegreto) {
            exibirTextoNaTela("p", "Número segreto é maior!");
        } else {
            exibirTextoNaTela("p", "Número segreto é menor!");
        }
    } 
    
    contador++;
    limpaCampo();
}

function textoInicial() {
    exibirTextoNaTela("h1", "Advinha o número");
    exibirTextoNaTela("p", "Escolha um número entre 1 a 10");
}

function numeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function limpaCampo() {
    chute.value = "";
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function reiniciarJogo() {
    contador = 1;
    chuteSegreto = numeroAleatorio();
    limpaCampo();
    textoInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}