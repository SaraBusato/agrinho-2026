// Scroll suave
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Formulário de contato
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui você pode adicionar integração com backend ou email
    successMessage.style.display = 'block';
    form.reset();
});
