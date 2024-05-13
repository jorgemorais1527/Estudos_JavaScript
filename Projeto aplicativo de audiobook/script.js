const botaoPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const nomeCapitulo = document.getElementById("capitulo");

const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
  audioCapitulo.play();
  botaoPlayPause.classList.remove("bi-play-circle");
  botaoPlayPause.classList.add("bi-pause-circle");
}

function pausaFaixa() {
  audioCapitulo.pause();
  botaoPlayPause.classList.remove("bi-pause-circle");
  botaoPlayPause.classList.add("bi-play-circle");
}

function tocarOuPausar() {
  if (taTocando === 0) {
    tocarFaixa();
    taTocando = 1;
  } else {
    pausaFaixa();
    taTocando = 0;
  }
}
function trocarNomeFaixa() {
  nomeCapitulo.innerText = "Capitulo " + capituloAtual;
}

function proximaFaixa() {
  if (capituloAtual === numeroCapitulos) {
    /*   pausaFaixa() */
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1;
  }

  audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarFaixa();
  trocarNomeFaixa()
}

function voltarFaixa() {
  if (capituloAtual === 1) {
    /*   pausaFaixa() */
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual = capituloAtual - 1;
  }

  audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
  tocarFaixa();
  trocarNomeFaixa()
}
botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);
botaoVoltar.addEventListener("click", voltarFaixa);
