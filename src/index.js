const clickHabilidades = function (e) {
  let texto_div = e.querySelector(".text-habilidades");

  if (texto_div) {
    let todasDivs = document.querySelectorAll(".text-habilidades");

    todasDivs.forEach(function (div) {
      div.classList.remove("border-primary");
      div.classList.remove("text-primary");
      div.classList.remove("border-bottom");
      div.classList.add("text-white");
    });

    texto_div.classList.add("border-primary");
    texto_div.classList.add("text-primary");
    texto_div.classList.remove("text-white");
    texto_div.classList.toggle("border-bottom");
  }
};
