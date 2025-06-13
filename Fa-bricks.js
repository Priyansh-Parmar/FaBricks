const productContainer = document.querySelector('.cards-container');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      productContainer.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

observer.observe(productContainer);




function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.getElementById('mobileMenu');
  
  hamburger.classList.toggle('open');
  menu.classList.toggle('show');
}
