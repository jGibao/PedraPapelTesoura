let pedra = "pedra";
let papel = "papel";
let tesoura = "tesoura";
let rondasJogadas = 0;
let pontos = 0;
var imagemJogador;
var imagemComputador;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function prep() {
    imagemJogador = document.getElementById("jogador");
    imagemComputador = document.getElementById("computador");
    imagemJogador.style.visibility = "visible";
    imagemComputador.style.visibility = "visible";
    imagemComputador.style.transform = "scaleX(-1)";
}

function jogar(selecao) {
    prep();

    rondasJogadas++;
    let computador = randomIntFromInterval(1, 3);
    var resultado = document.getElementById("resultado");
    resultado.classList.remove("amarelo");
    resultado.classList.remove("vermelho");
    resultado.classList.remove("verde");
    var final = document.getElementById("final");
    final.style.color = 'white';
    switch (computador) {
        case 1: //pedra
            if (selecao == pedra) {
                resultado.textContent = "Escolheste pedra. O computador também escolheu pedra. 0 Pontos.";
                resultado.classList.add("amarelo");
                imagemJogador.src = "pedra.png";
                imagemComputador.src = "pedra.png";

            } else if (selecao == papel) {
                resultado.textContent = "Escolheste papel. O computador escolheu pedra. +1 Ponto!";
                pontos++;
                resultado.classList.add("verde");
                imagemJogador.src = "papel.png";
                imagemComputador.src = "pedra.png";
            } else if (selecao == tesoura) {
                resultado.textContent = "Escolheste tesoura. O computador escolheu pedra. -1 Ponto!";
                pontos--;
                resultado.classList.add("vermelho");
                imagemJogador.src = "tesoura.png";
                imagemComputador.src = "pedra.png";
            }
            break;
        case 2: //papel
            if (selecao == pedra) {
                resultado.textContent = "Escolheste pedra. O computador escolheu papel. -1 Ponto!";
                pontos--;
                resultado.classList.add("vermelho");
                imagemJogador.src = "pedra.png";
                imagemComputador.src = "papel.png";
            } else if (selecao == papel) {
                resultado.textContent = "Escolheste papel. O computador também escolheu papel. 0 Pontos.";
                resultado.classList.add("amarelo");
                imagemJogador.src = "papel.png";
                imagemComputador.src = "papel.png";
            } else if (selecao == tesoura) {
                resultado.textContent = "Escolheste tesoura. O computador escolheu papel. +1 Ponto!";
                pontos++;
                resultado.classList.add("verde");
                imagemJogador.src = "tesoura.png";
                imagemComputador.src = "papel.png";
            }
            break;
        case 3: // tesoura
            if (selecao == pedra) {
                resultado.textContent = "Escolheste pedra. O computador escolheu tesoura. +1 Ponto!";
                pontos++;
                resultado.classList.add("verde");
                imagemJogador.src = "pedra.png";
                imagemComputador.src = "tesoura.png";
            } else if (selecao == papel) {
                resultado.textContent = "Escolheste papel. O computador escolheu tesoura. -1 Ponto!";
                pontos--;
                resultado.classList.add("vermelho");
                imagemJogador.src = "papel.png";
                imagemComputador.src = "tesoura.png";
            } else if (selecao == tesoura) {
                resultado.textContent = "Escolheste tesoura. O computador também escolheu tesoura. 0 Pontos.";
                resultado.classList.add("amarelo");
                imagemJogador.src = "tesoura.png";
                imagemComputador.src = "tesoura.png";
            }
            break;
    }

    if (rondasJogadas == 5) {
        acabaRonda();
    }

    function acabaRonda() {
        final.style.color = 'black';
        if (pontos > 0) {
            final.textContent = "Ganhaste o jogo com " + pontos + " ponto(s)!";
        } else if (pontos == 0) {
            final.textContent = "Empate!";
        } else if (pontos < 0) {
            final.textContent = "Perdeste o jogo!";
        }
        rondasJogadas = 0;
        pontos = 0;
        //window.location.reload();
    }

}