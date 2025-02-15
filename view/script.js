let slideIndex = 0;

// Função para mostrar o slide atual
function mostrarSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Ajusta o índice se for maior que o número de slides ou menor que 0
  if (index >= totalSlides) slideIndex = 0;
  if (index < 0) slideIndex = totalSlides - 1;

  // Move os slides
  document.getElementById('slides').style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Função para mudar o slide
function mudarSlide(n) {
  slideIndex += n;
  mostrarSlide(slideIndex);
}

// Adiciona eventos aos botões
document.getElementById('anterior').addEventListener('click', () => mudarSlide(-1));
document.getElementById('proximo').addEventListener('click', () => mudarSlide(1));

// Inicializa o carrossel
mostrarSlide(slideIndex);

// Autoplay (opcional)
//setInterval(() => mudarSlide(1), 3000); // Muda de slide a cada 3 segundos


//setInterval(() => mudarSlide(1), 3000); // Muda de slide a cada 3 segundos