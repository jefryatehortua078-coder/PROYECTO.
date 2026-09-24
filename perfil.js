// Panel de perfil (abrir/cerrar)

// Abre/cierra el panel de perfil (estadísticas y configuración)
function togglePerfil() {
    const panel = document.getElementById('panel-perfil');
    if (panel) {
        panel.classList.toggle('abierto');
    }
}

// Si venimos de guardar la configuración (?panel=perfil), abrimos el panel automáticamente
if (window.location.search.includes('panel=perfil')) {
    document.addEventListener('DOMContentLoaded', function () {
        const panel = document.getElementById('panel-perfil');
        if (panel) panel.classList.add('abierto');
    });
}

// Cierra el panel si el usuario hace clic fuera de él
document.addEventListener('click', function (e) {
    const panel = document.getElementById('panel-perfil');
    if (!panel) return;
    const boton = e.target.closest('.usuario-nav');
    if (!panel.contains(e.target) && !boton) {
        panel.classList.remove('abierto');
    }
});
