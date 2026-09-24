// Menú móvil desplegable

// Lógica para el control del menú móvil desplegable
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mainNavigation = document.getElementById('main-navigation');
const navLinks = document.querySelectorAll('.nav-link, .btn-nav-internal');

if (mobileMenuBtn && mainNavigation) {
    mobileMenuBtn.addEventListener('click', () => {
mobileMenuBtn.classList.toggle('open');
mainNavigation.classList.toggle('open');
    });
}

// Asegurar que el menú se cierre al hacer clic en cualquier enlace (en móviles)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
if (mainNavigation.classList.contains('open')) {
    mobileMenuBtn.classList.remove('open');
    mainNavigation.classList.remove('open');
}
    });
});
