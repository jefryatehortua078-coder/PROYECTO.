// Juego 3: Memoria

// ===== JUEGO 3: MEMORIA =====
const memoriaItems = [
    { emoji:'🥦', grupo:'Verdura' }, { emoji:'🍗', grupo:'Proteína' },
    { emoji:'🍚', grupo:'Carbohidrato' }, { emoji:'🥛', grupo:'Lácteo' },
    { emoji:'🍎', grupo:'Fruta' }, { emoji:'🥚', grupo:'Proteína' }
];
let memoriaTablero = [], memPrimero = null, memBloqueado = false, memParesEncontrados = 0;
function iniciarMemoria() {
    const dobles = [...memoriaItems, ...memoriaItems].map((item, i) => ({...item, id: i}));
    memoriaTablero = dobles.sort(() => Math.random() - 0.5);
    memPrimero = null; memBloqueado = false; memParesEncontrados = 0;
    document.getElementById('mem-pares').textContent = '0';
    document.getElementById('mem-resultado').textContent = '';
    const tablero = document.getElementById('tablero-memoria');
    tablero.innerHTML = memoriaTablero.map((item, i) =>
        `<div class="mem-carta" id="mc-${i}" onclick="voltearCarta(${i})" style="background:#e8f5e9; border-radius:8px; height:55px; display:flex; align-items:center; justify-content:center; cursor:pointer; font-size:1.6em; user-select:none; transition:all 0.3s;">❓</div>`
    ).join('');
}
function voltearCarta(i) {
    if (memBloqueado) return;
    const carta = document.getElementById(`mc-${i}`);
    if (carta.dataset.volteada === '1') return;
    carta.textContent = memoriaTablero[i].emoji;
    carta.dataset.volteada = '1';
    carta.style.background = '#fff9c4';
    if (!memPrimero) { memPrimero = i; return; }
    const segundo = i;
    memBloqueado = true;
    if (memoriaTablero[memPrimero].emoji === memoriaTablero[segundo].emoji && memPrimero !== segundo) {
        document.getElementById(`mc-${memPrimero}`).style.background = '#c8f7c5';
        carta.style.background = '#c8f7c5';
        memParesEncontrados++;
        document.getElementById('mem-pares').textContent = memParesEncontrados;
        memPrimero = null; memBloqueado = false;
        if (memParesEncontrados === 6) {
            document.getElementById('mem-resultado').textContent = '🎉 ¡Ganaste! Encontraste todos los pares.';
            registrarJuego('memoria', memParesEncontrados * 10, 'Encontró todos los pares');
        }
    } else {
        setTimeout(() => {
            document.getElementById(`mc-${memPrimero}`).textContent = '❓';
            document.getElementById(`mc-${memPrimero}`).style.background = '#e8f5e9';
            document.getElementById(`mc-${memPrimero}`).dataset.volteada = '0';
            carta.textContent = '❓';
            carta.style.background = '#e8f5e9';
            carta.dataset.volteada = '0';
            memPrimero = null; memBloqueado = false;
        }, 900);
    }
}
window.addEventListener('load', () => { iniciarMemoria(); });
