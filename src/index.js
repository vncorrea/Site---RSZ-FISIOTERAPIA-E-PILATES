const clickHabilidades = function (e) {
  let texto_div = e.querySelector(".text-habilidades");

  if (texto_div) {
    let todasDivs = document.querySelectorAll(".text-habilidades");

    todasDivs.forEach(function (div) {
      let habilidadeSelecionada = div.getAttribute("data-habilidade");

      let infoHabilidade = document.querySelector(
        ".info_habilidade_" + habilidadeSelecionada
      );

      infoHabilidade.classList.add("d-none");

      div.classList.remove("border-primary");
      div.classList.remove("text-primary");
      div.classList.remove("border-bottom");
      div.classList.add("text-white");
    });

    texto_div.classList.add("border-primary");
    texto_div.classList.add("text-primary");
    texto_div.classList.remove("text-white");
    texto_div.classList.toggle("border-bottom");

    selecionarHabilidade(texto_div);
  }
};

const selecionarHabilidade = function (habilidade) {
  let habilidadeSelecionada = habilidade.getAttribute("data-habilidade");

  let infoHabilidade = document.querySelector(
    ".info_habilidade_" + habilidadeSelecionada
  );

  console.log(infoHabilidade);

  infoHabilidade.classList.remove("d-none");
};

const selecionarSecao = function (e) {
  const secao = this.event.target.getAttribute("data-secao");
  const navbar = document.querySelector(".navbar-collapse");

  if (secao) {
    const secaoSelecionada = document.getElementById(secao);

    if (secaoSelecionada) {
      secaoSelecionada.scrollIntoView();
    }

    const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
    bsCollapse.hide();
  }
};

const enviarDados = function () {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let mensagem = document.querySelector("textarea").value;
  });
};

window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link a");

  sections.forEach((section, index) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (
      sectionTop <= window.innerHeight / 2 &&
      sectionTop >= -window.innerHeight / 2
    ) {
      navLinks.forEach((navLink) => navLink.classList.remove("text-primary"));
      navLinks[index].classList.add("text-primary");
    }
  });
});
