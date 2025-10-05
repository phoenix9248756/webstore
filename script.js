// Language Toggle Function
const langToggle = document.getElementById('langToggle');
let currentLang = 'en';

langToggle.addEventListener('click', function() {
    if (currentLang === 'en') {
        // Switch to Urdu
        document.querySelectorAll('.content-en').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('.content-urdu').forEach(el => {
            el.style.display = 'block';
        });
        document.querySelectorAll('.input-en').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('.input-urdu').forEach(el => {
            el.style.display = 'block';
        });
        document.querySelectorAll('.contact-en').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('.contact-urdu').forEach(el => {
            el.style.display = 'block';
        });
        document.querySelector('.btn-en').style.display = 'none';
        document.querySelector('.btn-urdu').style.display = 'block';
        document.querySelector('.footer-en').style.display = 'none';
        document.querySelector('.footer-urdu').style.display = 'block';
        
        // Update button texts
        document.querySelector('.view-projects').textContent = 'Mere Projects Dekhein';
        document.querySelector('.contact-btn').textContent = 'Rabta Karen';
        
        currentLang = 'urdu';
        langToggle.textContent = 'UR/EN';
    } else {
        // Switch to English
        document.querySelectorAll('.content-en').forEach(el => {
            el.style.display = 'block';
        });
        document.querySelectorAll('.content-urdu').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('.input-en').forEach(el => {
            el.style.display = 'block';
        });
        document.querySelectorAll('.input-urdu').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('.contact-en').forEach(el => {
            el.style.display = 'block';
        });
        document.querySelectorAll('.contact-urdu').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelector('.btn-en').style.display = 'block';
        document.querySelector('.btn-urdu').style.display = 'none';
        document.querySelector('.footer-en').style.display = 'block';
        document.querySelector('.footer-urdu').style.display = 'none';
        
        // Update button texts
        document.querySelector('.view-projects').textContent = 'View My Work';
        document.querySelector('.contact-btn').textContent = 'Contact Me';
        
        currentLang = 'en';
        langToggle.textContent = 'EN/UR';
    }
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (currentLang === 'en') {
            alert('Thank you! Your message has been sent. I will contact you soon.');
        } else {
            alert('Shukriya! Aap ka message receive ho gaya hai. Main jald aap se rabta karunga.');
        }
        
        this.reset();
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});
