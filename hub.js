window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    const parallaxElement = document.getElementById('hero');
  
    // Parallax Effect
    parallaxElement.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
  });
  
  document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('mouseenter', () => {
      service.style.transform = 'translateY(-15px)';
    });
    service.addEventListener('mouseleave', () => {
      service.style.transform = 'translateY(0)';
    });
  });
  