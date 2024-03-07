  function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag imag
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicional a imagem light
    img.setAttribute("src", "../assets/assets/avatar.png")
    img.setAttribute(
      "alt", "Foto de Sheila sorrindo com um chimarrão na mão, blazer rosa e fundo do rio Uruguai com por do sol")
  
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "../assets/assets/avatar.png")
    img.setAttribute("alt", "Foto de Sheila sorrindo com um chimarrão na mão, blazer rosa e fundo do rio Uruguai com por do sol")
  }
}