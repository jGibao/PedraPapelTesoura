let pedra = "pedra";
let papel = "papel";
let tesoura = "tesoura";
let rondasJogadas = 0;
let pontosJog = 0;
let pontosComp = 0;
let imagemJogador;
let imagemComputador;
let textJog;
let textComp;
let botoes;
let preload1, preload2, preload3;

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function prep() {
    preload1 = new Image();
    preload2 = new Image();
    preload3 = new Image();
    preload1.src = "pedra.png";
    preload2.src = "papel.png";
    preload3.src = "tesoura.png";
    imagemJogador = document.getElementById("jogadorImg");
    imagemComputador = document.getElementById("computadorImg");
    textJog = document.getElementById("jogador");
    textComp = document.getElementById("computador");
    botoes = document.getElementsByClassName("button");
    imagemJogador.style.opacity = "100%";
    imagemComputador.style.opacity = "100%";
    imagemComputador.style.transform = "scaleX(-1)";
}

function setImagens(imagem1, imagem2) {
    imagemJogador.src = imagem1;
    imagemComputador.src = imagem2;
}

function jogar(selecao) {
    prep();
    rondasJogadas++;
    let computador = randomIntFromInterval(1, 3);
    let final = document.getElementById("final");
    final.style.color = 'white';
    switch (computador) {
        case 1: //pedra
            if (selecao == pedra) {
                setImagens("pedra.png", "pedra.png");
            } else if (selecao == papel) {
                pontosJog++;
                setImagens("papel.png", "pedra.png");
            } else if (selecao == tesoura) {
                pontosComp++;
                setImagens("tesoura.png", "pedra.png");
            }
            break;
        case 2: //papel
            if (selecao == pedra) {
                pontosComp++;
                setImagens("pedra.png", "papel.png");
            } else if (selecao == papel) {
                setImagens("papel.png", "papel.png");
            } else if (selecao == tesoura) {
                pontosJog++;
                setImagens("tesoura.png", "papel.png");
            }
            break;
        case 3: // tesoura
            if (selecao == pedra) {
                pontosJog++;
                setImagens("pedra.png", "tesoura.png");
            } else if (selecao == papel) {
                pontosComp++;
                setImagens("papel.png", "tesoura.png");
            } else if (selecao == tesoura) {
                setImagens("tesoura.png", "tesoura.png");
            }
            break;

    }
    for (let botao of botoes) {
        botao.disabled = true;
    }
    if (rondasJogadas < 5) {
        textJog.textContent = "Jogador: " + pontosJog;
        textComp.textContent = "Computador: " + pontosComp;
        setTimeout(() => {
            imagemJogador.style.opacity = "0%";
            imagemComputador.style.opacity = "0%";

        }, 2000);
        setTimeout(() => {
            for (let botao of botoes) {
                botao.disabled = false;
            }
        }, 2500);
    }
    if (rondasJogadas == 5) {
        textJog.textContent = "Jogador: " + pontosJog;
        textComp.textContent = "Computador: " + pontosComp;
        acabaJogo();
    }

}

function acabaJogo() {
    final.style.color = 'black';
    if (pontosJog > pontosComp) {
        final.textContent = "Ganhaste o jogo por " + (pontosJog - pontosComp) + " ponto(s)!";
    } else if (pontosJog == pontosComp) {
        final.textContent = "Empate com " + pontosJog + " ponto(s).";
    } else if (pontosJog < pontosComp) {
        final.textContent = "Perdeste o jogo por " + (pontosComp - pontosJog) + " ponto(s).";
    }

    setTimeout(() => {
        imagemJogador.style.opacity = "0%";
        imagemComputador.style.opacity = "0%";
    }, 2000);

    rondasJogadas = 0;
    pontosJog = 0;
    pontosComp = 0;

    setTimeout(() => {
        for (let botao of botoes) {
            botao.disabled = false;
        }
    }, 2500);
}