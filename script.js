function inserir(num) {
  document.querySelector("div.tela").innerHTML += num
}

function clean() {
  document.querySelector("div.tela").innerHTML = ""
}

function calcular() {
  const tela = document.querySelector("div.tela").innerHTML
  if (tela) {
    document.querySelector("div.tela").innerHTML =
      eval(tela) /*Tansformar uma String em um codigo executavel dentro do javaScript */
  } else {
    alert("Nenhum Comando Informado!")
  }
}
