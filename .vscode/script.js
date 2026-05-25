function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se estiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  } else {
    //se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/avatar3.png")
  }
  if (html.classList.contains("light")) {
    //se estiver light mode, adicionar imagem light
    img.setAttribute(
      "alt",
      "Foto de Claudio Avelino sorrindo, usando óculos e camisa vermelho claro estampada, barba e fundo amarelo.",
    )
  } else {
    //se estiver sem light mode, manter a imagem normal
    img.setAttribute(
      "alt",
      "Foto de Claudio Avelino sorrindo, usando óculos e camisa azul e gola branca, e fundo branco.",
    )
  }
}
