// Quick Contact Form
const quickForm = document.getElementById('quickForm');
if (quickForm) {
    quickForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('input[type="text"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        // Here you can add form submission to your backend
        // For now, we'll show an alert and create SMS link
        
        alert(`Thank you ${name}! I will contact you at ${phone} soon.`);
        
        // Create SMS link
        const smsBody = `Hello! I'm interested in a website project. Name: ${name}, Phone: ${phone}, Message: ${message}`;
        const smsLink = `sms:+923001234567?body=${encodeURIComponent(smsBody)}`;
        
        // Optional: Redirect to SMS
        // window.location.href = smsLink;
        
        this.reset();
    });
}

// Smooth scrolling for navigation links
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

// Add loading animation to demo links
document.querySelectorAll('.demo-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.classList.contains('live-demo')) {
            // Add loading state
            const originalText = this.textContent;
            this.textContent = 'Opening Demo...';
            this.style.opacity = '0.7';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.opacity = '1';
            }, 2000);
        }
    });
});

// Simple page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
