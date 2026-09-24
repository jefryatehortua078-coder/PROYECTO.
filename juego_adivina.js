// Juego 2: Adivina el alimento

// ===== JUEGO 2: ADIVINA EL ALIMENTO =====
const pistasAdivina = [
    { pista: "Soy rojo, redondo y me encuentro en ensaladas. Soy una fruta aunque te parezca verdura.", respuesta: "tomate" },
    { pista: "Soy amarillo, curvo y los monos me adoran. Me dan a los atletas por mi potasio.", respuesta: "banano" },
    { pista: "Soy verde, parezco un árbol en miniatura y soy famoso por mis propiedades anticancerígenas.", respuesta: "brocoli" },
    { pista: "Soy naranja, alargada y crujiente. Mejoro tu visión gracias al betacaroteno.", respuesta: "zanahoria" },
    { pista: "Vengo del mar, soy muy proteico, bajo en grasa y en muchos colegios me sirven los viernes.", respuesta: "pescado" },
    { pista: "Soy blanco y líquido. Los niños me beben para tener huesos fuertes. Tengo calcio.", respuesta: "leche" },
    { pista: "Soy pequeño, ovalado y de gallina. Me como revuelto, tibio o frito.", respuesta: "huevo" },
];
let pistaActual = 0, intentosAdivina = 3, puntosAdivina = 0;
function cargarPistaAdivina() {
    const p = pistasAdivina[pistaActual % pistasAdivina.length];
    document.getElementById('adivina-pista-texto').textContent = p.pista;
    document.getElementById('adivina-feedback').textContent = '';
    document.getElementById('adivina-input').value = '';
    document.getElementById('adivina-intentos').textContent = intentosAdivina;
}
function verificarAdivina() {
    const input = document.getElementById('adivina-input').value.trim().toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    const correcto = pistasAdivina[pistaActual % pistasAdivina.length].respuesta
        .normalize('NFD').replace(/[\u0300-\u036f]/g,'');
    const fb = document.getElementById('adivina-feedback');
    if (input === correcto) {
        puntosAdivina += intentosAdivina * 10;
        document.getElementById('adivina-puntos').textContent = puntosAdivina;
        fb.innerHTML = `<span style="color:#2ecc71">✅ ¡Correcto! Era <strong>${pistasAdivina[pistaActual % pistasAdivina.length].respuesta}</strong>. +${intentosAdivina*10} pts</span>`;
        registrarJuego('adivina', puntosAdivina, 'Acertó: ' + pistasAdivina[pistaActual % pistasAdivina.length].respuesta);
        intentosAdivina = 3;
    } else {
        intentosAdivina--;
        document.getElementById('adivina-intentos').textContent = intentosAdivina;
        if (intentosAdivina <= 0) {
            fb.innerHTML = `<span style="color:#e74c3c">❌ Era: <strong>${pistasAdivina[pistaActual % pistasAdivina.length].respuesta}</strong>. ¡Sigue intentando!</span>`;
            intentosAdivina = 3;
        } else {
            fb.innerHTML = `<span style="color:#E2A000">⚠️ Incorrecto. Te quedan ${intentosAdivina} intentos.</span>`;
            return;
        }
    }
}
function siguientePistaAdivina() {
    pistaActual++;
    intentosAdivina = 3;
    cargarPistaAdivina();
}
window.addEventListener('load', () => { cargarPistaAdivina(); });
