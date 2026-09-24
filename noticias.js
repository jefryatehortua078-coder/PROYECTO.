// Noticias: contador regresivo

// ===== CONTADOR REGRESIVO =====
function actualizarContador() {
    const objetivo = new Date('2026-09-28T07:00:00');
    const ahora = new Date();
    const diff = objetivo - ahora;
    if (diff <= 0) {
        document.getElementById('cd-dias').textContent = '0';
        document.getElementById('cd-horas').textContent = '0';
        document.getElementById('cd-mins').textContent = '0';
        document.getElementById('cd-segs').textContent = '0';
        return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-dias').textContent = String(d).padStart(2,'0');
    document.getElementById('cd-horas').textContent = String(h).padStart(2,'0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2,'0');
    document.getElementById('cd-segs').textContent = String(s).padStart(2,'0');
}
setInterval(actualizarContador, 1000);
actualizarContador();
