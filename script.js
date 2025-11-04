document.addEventListener("DOMContentLoaded", () => {

  // Download CV
  const buttonButton = document.querySelector(".button");
  buttonButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "mycv.pdf";
    link.download = "Fathima_Risniya_CV.pdf";
    link.click();
  });

  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });


  const typewriter = document.getElementById("typewriter");
  typewriter.textContent = "Fathima Risniya";

  
  const galleryImages = document.querySelectorAll(".gallery-images img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
