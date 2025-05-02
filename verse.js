window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 20) {
      navbar.style.background = "rgba(0, 0, 0, 0.85)";
    } else {
      navbar.style.background = "rgba(0, 0, 0, 0.6)";
    }
  });
  