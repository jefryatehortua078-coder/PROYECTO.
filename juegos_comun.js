// Juegos: guardar partida y agregarla al panel de perfil (se carga antes que cada juego)

// Envía el resultado de una partida al servidor para guardarlo en juegos_jugados
// y la agrega de inmediato a "Mis juegos jugados" sin tener que refrescar la página.
function registrarJuego(juego, puntaje, resultado) {
    fetch('guardar_juego.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ juego, puntaje, resultado })
    })
    .then(r => r.json())
    .then(data => {
        if (data && data.ok && data.partida) {
            agregarJuegoAlPanel(data.partida);
        }
    })
    .catch(err => console.error('No se pudo registrar el juego:', err));
}

function agregarJuegoAlPanel(p) {
    const lista = document.getElementById('lista-mis-juegos');
    if (!lista) return;

    // Si el panel estaba vacío, quita el mensaje "Todavía no has jugado..."
    const sinJuegos = lista.querySelector('.sin-juegos');
    if (sinJuegos) sinJuegos.remove();

    const item = document.createElement('div');
    item.className = 'juego-item';
    item.innerHTML = `
        <div class="juego-info">
            <div class="juego-nombre">${p.juego} — ${p.puntaje} pts</div>
            <div class="juego-detalle">${p.resultado ?? ''} · ${p.fecha}</div>
        </div>
        <a class="juego-borrar" href="?eliminar_juego=${p.id}&panel=perfil" title="Borrar esta partida" onclick="return confirm('¿Borrar esta partida de tu historial?');">✕</a>
    `;
    lista.prepend(item);
}
