// Juego 1: Arma tu plato

// ===== JUEGO 1: ARMA TU PLATO =====
let platoItems = [];
document.querySelectorAll('.alimento-drag').forEach(el => {
    el.addEventListener('dragstart', e => {
        e.dataTransfer.setData('tipo', el.dataset.tipo);
        e.dataTransfer.setData('nombre', el.dataset.nombre);
        e.dataTransfer.setData('emoji', el.textContent);
    });
});
function soltarEnPlato(e) {
    e.preventDefault();
    const tipo = e.dataTransfer.getData('tipo');
    const nombre = e.dataTransfer.getData('nombre');
    const emoji = e.dataTransfer.getData('emoji');
    if (platoItems.length >= 6) { document.getElementById('resultado-plato').textContent = '⚠️ El plato ya está lleno (máx. 6 alimentos)'; return; }
    if (platoItems.find(i => i.nombre === nombre)) return;
    platoItems.push({tipo, nombre, emoji});
    renderizarPlato();
}
function renderizarPlato() {
    const list = document.getElementById('plato-items-list');
    const hint = document.getElementById('plato-hint');
    list.innerHTML = platoItems.map(i => `<span title="${i.nombre}" style="font-size:1.8em;">${i.emoji}</span>`).join(' ');
    hint.style.display = platoItems.length ? 'none' : 'block';
}
function limpiarPlato() {
    platoItems = [];
    renderizarPlato();
    document.getElementById('resultado-plato').textContent = '';
}
function evaluarPlato() {
    if (platoItems.length < 3) { document.getElementById('resultado-plato').innerHTML = '<span style="color:#e74c3c">Agrega al menos 3 alimentos para evaluar.</span>'; return; }
    const conteo = { verdura:0, proteina:0, carbohidrato:0, fruta:0, malo:0 };
    platoItems.forEach(i => { if(conteo[i.tipo] !== undefined) conteo[i.tipo]++; });
    const res = document.getElementById('resultado-plato');
    if (conteo.malo > 0) {
        res.innerHTML = `<span style="color:#e74c3c">❌ Tu plato tiene alimentos no recomendados. Retira los ultraprocesados.</span>`;
    } else if (conteo.verdura >= 1 && conteo.proteina >= 1 && conteo.carbohidrato >= 1) {
        res.innerHTML = `<span style="color:#2ecc71">✅ ¡Excelente! Tu plato es equilibrado. Tiene verduras, proteínas y carbohidratos. 🎉</span>`;
        registrarJuego('plato', 10, 'Plato equilibrado');
    } else {
        const falta = [];
        if (!conteo.verdura) falta.push('verduras 🥦');
        if (!conteo.proteina) falta.push('proteínas 🍗');
        if (!conteo.carbohidrato) falta.push('carbohidratos 🍚');
        res.innerHTML = `<span style="color:#E2A000">⚠️ Falta: ${falta.join(', ')}. ¡Completa tu plato!</span>`;
    }
}
