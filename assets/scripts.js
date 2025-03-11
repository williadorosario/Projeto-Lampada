const buttonAcender = document.getElementById("ligar");
const buttonDesligar = document.getElementById("desligar");
const lampada = document.querySelector(".lampada-apagada");

function ligarLampada() {
    lampada.src = "./lampada-amarela.jpg";
}

function desligarLampada() {
    lampada.src = "./lampada-branca.jpg";
}
