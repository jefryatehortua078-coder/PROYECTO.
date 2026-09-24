// Navegación por pestañas

// LÓGICA DE NAVEGACIÓN Y MENÚ ACORDEÓN
const links = document.querySelectorAll('.nav-link, .btn-nav-internal');
const sections = document.querySelectorAll('.tab-section');

function cambiarPestana(targetId) {
    sections.forEach(section => {
        section.classList.remove('active');
        if(section.id === targetId) {
            section.classList.add('active');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${targetId}`) {
            link.classList.add('active');
        }
    });
}

links.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        if(document.getElementById(targetId)) {
            e.preventDefault();
            cambiarPestana(targetId);
            window.location.hash = targetId;
        }
    });
});

window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        cambiarPestana(hash);
    }
    cargarPreguntaQuiz(); 
});
