//Animacion cambio color
window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  const logo = document.getElementById("logo");
  const scrollPosition = window.scrollY;

  // Ajusta el número (por ejemplo 150) para cambiar antes o después
  if (scrollPosition > 160) {
    header.classList.add("scrolled");
    logo.src = "./static/img/1.png";
  } else {
    header.classList.remove("scrolled");
    logo.src = "./static/img/2.3.png";
  }
});

// Animación al hacer scroll
window.addEventListener('scroll', () => {
  const areas = document.querySelectorAll('.area');
  const triggerBottom = window.innerHeight * 0.85;

  areas.forEach(area => {
    const areaTop = area.getBoundingClientRect().top;
    if (areaTop < triggerBottom) {
      area.classList.add('visible');
    }
  });
});