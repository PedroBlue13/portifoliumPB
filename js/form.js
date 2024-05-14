// Seleciona todas as seções da página
const sections = document.querySelectorAll("section");

// Seleciona todos os links de navegação no cabeçalho
const navLinks = document.querySelectorAll("header nav a");

// Seleciona o ícone do menu
const menuIcon = document.querySelector("#menu-icon");

// Seleciona a barra de navegação
const navBar = document.querySelector(".navbar");

// Seleciona o cabeçalho
const header = document.querySelector("header");

// Variável global para controlar a execução única da animação
let animationExecuted = false;

// Função para revelar elementos na página usando ScrollReveal
function revealElements(selector, origin) {
  ScrollReveal().reveal(selector, {
    origin: origin,
    distance: "80px",
    duration: 2000,
    delay: 200,
  });
}

// Função para iniciar animações na página
function startAnimation() {
  if (!animationExecuted) {
    setTimeout(() => {
      // Seleciona elementos para a animação de revelação
      revealElements(".home-content, .heading", "top");
      revealElements(
        ".home-img, .habilidades-container, .passtime-container, .training-container h3, .training-container h4, .boxinit p, .training-icon i, training-icon p, .container-xp h3, .container-xp h4, .xpb p, .experience-icon i, experience-icon p, .projetos-box, .contato form",
        "bottom"
      );
      revealElements(".home-content h1, .about-img", "left");
      revealElements(".home-content p, .about-content", "right");

      // Marca que a animação já foi executada
      animationExecuted = true;
    }, 500); // Atraso antes de iniciar a animação
  }
}

// Configuração para Typed.js, biblioteca que simula digitação de texto
const typed = new Typed(".multiple-text", {
  strings: ["Futuro Desenvolvedor Front-end", "Analista de sistemas", ""],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Inicia a animação ao carregar a página
document.addEventListener("DOMContentLoaded", startAnimation);

// Função para alternar a visibilidade do menu ao clicar no ícone
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("active");
  startAnimation(); // Reinicia a animação
});

// Função para atualizar os links ativos na barra de navegação
function updateActiveLinks() {
  const scrollTop = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`header nav a[href*="${sectionId}"]`)
        .classList.add("active");
    }
  });
}

// Função para rolar a página suavemente para o topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Atualiza os links e a classe 'sticky' do cabeçalho ao rolar a página
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);
  updateActiveLinks();
  menuIcon.classList.remove("bx-x");
  navBar.classList.remove("active");
});

// Rola para o topo ao carregar a página
window.onload = () => {
  scrollToTop();
};
