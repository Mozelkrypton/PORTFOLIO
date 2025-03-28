// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(0); 
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, 
                behavior: 'smooth'
            });
        }
    });
});

// Back-to-Top Button
const backToTopBtn = document.createElement('button');
backToTopBtn.innerText = "↑";
backToTopBtn.id = "backToTop";
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 20px;
    border: none;
    border-radius: 50%;
    background: #8fc9eb;
    color: #020a47;
    cursor: pointer;
    display: none;
`;
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Validation for Contact Page
const contactForm = document.querySelector("#contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let email = document.querySelector("#email").value;
        let message = document.querySelector("#message").value;
        let errorMsg = document.querySelector("#errorMsg");
        
        if (!email.includes("@") || email.length < 5) {
            errorMsg.innerText = "Please enter a valid email.";
            return;
        }
        
        if (message.trim().length < 10) {
            errorMsg.innerText = "Message must be at least 10 characters.";
            return;
        }
        
        alert("Form submitted successfully!");
        this.submit(); 
    });
}

// Dark Mode Toggle
const darkModeBtn = document.createElement('button');
darkModeBtn.innerText = "🌙";
darkModeBtn.id = "darkModeToggle";
darkModeBtn.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 20px;
    border: none;
    border-radius: 50%;
    background: #8fc9eb;
    color: #020a47;
    cursor: pointer;
`;
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
