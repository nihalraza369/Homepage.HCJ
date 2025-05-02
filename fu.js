window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    let scrollPosition = window.scrollY;
  
    // Parallax Effect
    hero.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
  });
  
  const services = document.querySelectorAll('.service');
  
  services.forEach(service => {
    service.addEventListener('mouseenter', () => {
      service.style.transform = 'translateY(-15px)';
    });
  
    service.addEventListener('mouseleave', () => {
      service.style.transform = 'translateY(0)';
    });
  });
  