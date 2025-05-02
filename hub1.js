// Hero Section Text Animation
const heroText = document.querySelector('.hero h1');
const heroParagraph = document.querySelector('.hero p');

window.addEventListener('scroll', () => {
  let scrollPosition = window.scrollY;
  const hero = document.getElementById('hero');

  // Parallax Effect
  hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;

  // Fade-in text effect as you scroll
  if (scrollPosition > 200) {
    heroText.classList.add('fade-in');
    heroParagraph.classList.add('fade-in');
  }
});

document.querySelectorAll('.service').forEach(service => {
  service.addEventListener('mouseenter', () => {
    service.style.transform = 'translateY(-15px)';
  });
  service.addEventListener('mouseleave', () => {
    service.style.transform = 'translateY(0)';
  });
});
