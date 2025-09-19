// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
  document.querySelector('nav ul').classList.toggle('show');
  this.querySelector('i').classList.toggle('fa-bars');
  this.querySelector('i').classList.toggle('fa-times');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      document.querySelector('nav ul').classList.remove('show');
      document.querySelector('.mobile-menu-btn i').classList.add('fa-bars');
      document.querySelector('.mobile-menu-btn i').classList.remove('fa-times');
      
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Back to top button
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

// Scroll animations for feature cards and testimonials
function checkVisibility() {
  const featureCards = document.querySelectorAll('.feature-card');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  
  featureCards.forEach(card => {
    const position = card.getBoundingClientRect();
    if (position.top < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
  
  testimonialCards.forEach(card => {
    const position = card.getBoundingClientRect();
    if (position.top < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  this.reset();
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.padding = '10px 0';
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
  } else {
    header.style.padding = '15px 0';
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
  }
});
