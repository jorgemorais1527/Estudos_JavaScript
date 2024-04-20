document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("meuFormulario");

  formulario.addEventListener("submit", function (event) {
    // Resetar Mensagem Erro
    resetarMensagemErro();

    if (!validarCamposObrigatorios()) {
      event.preventDefault();
    }
    if (!compararValores()) {
      event.preventDefault();
    }
  });

  function validarCamposObrigatorios() {
    let camposObrigatorios = document.querySelectorAll(".obrigatorio");
    let camposValidos = true;
    for (let i = 0; camposObrigatorios.length > i; i++) {
      let campo = camposObrigatorios[i];

      if (campo.value === "" || campo.value === null) {
        exibirErro(campo, "Esse campo é obrigatório!");
        camposValidos = false;
      }
    }
    return camposValidos;
  }

  function compararValores() {
    const senha = document.getElementById("senha");
    const senhaObrigatoria = document.getElementById("senha-obrigatoria");

    if (senha.value !== senhaObrigatoria.value) {
      exibirErro(senhaObrigatoria, "Senha invalida! Tente novamente!");
      return false;
    }
    return true;
  }

  function exibirErro(elemento, mensagem) {
    let mensagemErro = elemento.parentElement.querySelector(".error-message");
    mensagemErro.textContent = mensagem;
    mensagemErro.style.display = "inline-block";
  }
  function resetarMensagemErro() {
    let mensagensErro = document.querySelectorAll(".error-message");

    for (let i = 0; i < mensagensErro.length; i++) {
      mensagensErro[i].textContent = "";
    }
  }
});
