let pedra = "pedra";
let papel = "papel";
let tesoura = "tesoura";
let rondasJogadas = 0;
let pontos = 0;;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function jogar(selecao) {
    rondasJogadas++;
    let computador = randomIntFromInterval(1, 3);
    console.log(computador);
    console.log(selecao);
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
            } else if (selecao == papel) {
                resultado.textContent = "Escolheste papel. O computador escolheu pedra. +1 Ponto!";
                pontos++;
                resultado.classList.add("verde");
            } else if (selecao == tesoura) {
                resultado.textContent = "Escolheste tesoura. O computador escolheu pedra. -1 Ponto!";
                pontos--;
                resultado.classList.add("vermelho");
            }
            break;
        case 2: //papel
            if (selecao == pedra) {
                resultado.textContent = "Escolheste pedra. O computador escolheu papel. -1 Ponto!";
                pontos--;
                resultado.classList.add("vermelho");
            } else if (selecao == papel) {
                resultado.textContent = "Escolheste papel. O computador também escolheu papel. 0 Pontos.";
                resultado.classList.add("amarelo");
            } else if (selecao == tesoura) {
                resultado.textContent = "Escolheste tesoura. O computador escolheu papel. +1 Ponto!";
                pontos++;
                resultado.classList.add("verde");
            }
            break;
        case 3: // tesoura
            if (selecao == pedra) {
                resultado.textContent = "Escolheste pedra. O computador escolheu tesoura. +1 Ponto!";
                pontos++;
                resultado.classList.add("verde");
            } else if (selecao == papel) {
                resultado.textContent = "Escolheste papel. O computador escolheu tesoura. -1 Ponto!";
                pontos--;
                resultado.classList.add("vermelho");
            } else if (selecao == tesoura) {
                resultado.textContent = "Escolheste tesoura. O computador também escolheu tesoura. 0 Pontos.";
                resultado.classList.add("amarelo");
            }
            break;
    }
    if (rondasJogadas == 5) {
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