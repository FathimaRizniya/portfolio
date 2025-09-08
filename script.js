document.addEventListener("DOMContentLoaded", () => {
 
  const cvButton = document.querySelector(".cv");
  cvButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "mycv.pdf";  
    link.download = "Fathima_Risniya_CV.pdf";
    link.click();
  });

  
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");
  
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
