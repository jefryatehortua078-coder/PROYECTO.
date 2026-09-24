// Juego 4: Atrapa lo saludable

// ===== JUEGO 4: ATRAPA LO SALUDABLE =====
const alimentosAtrapa = [
    {e:'🥦',s:true},{e:'🍗',s:true},{e:'🍎',s:true},{e:'🥕',s:true},{e:'🥚',s:true},{e:'🍌',s:true},
    {e:'🍟',s:false},{e:'🥤',s:false},{e:'🍫',s:false},{e:'🍕',s:false}
];
let atrapaTimer = null, atrapaSegs = 20, atrapaPuntos = 0, atrapaMalos = 0, atrapaActivo = false;
function iniciarAtrapa() {
    document.getElementById('atrapa-inicio-msg').style.display = 'none';
    document.getElementById('atrapa-fin').style.display = 'none';
    atrapaSegs = 20; atrapaPuntos = 0; atrapaMalos = 0; atrapaActivo = true;
    document.getElementById('atrapa-timer').textContent = atrapaSegs;
    document.getElementById('atrapa-puntos').textContent = 0;
    document.getElementById('atrapa-penalizacion').textContent = 0;
    const area = document.getElementById('juego-atrapa-area');
    area.querySelectorAll('.atrapa-item').forEach(e => e.remove());
    clearInterval(atrapaTimer);
    atrapaTimer = setInterval(() => {
        atrapaSegs--;
        document.getElementById('atrapa-timer').textContent = atrapaSegs;
        spawnAlimento();
        if (atrapaSegs <= 0) { clearInterval(atrapaTimer); atrapaActivo = false; mostrarFinAtrapa(); }
    }, 1000);
}
function spawnAlimento() {
    const area = document.getElementById('juego-atrapa-area');
    const item = alimentosAtrapa[Math.floor(Math.random() * alimentosAtrapa.length)];
    const div = document.createElement('div');
    div.className = 'atrapa-item';
    div.textContent = item.e;
    div.style.cssText = `position:absolute; font-size:2em; cursor:pointer; user-select:none; top:${Math.random()*140}px; left:${Math.random()*85}%; animation:fadeIn 0.3s ease;`;
    div.onclick = () => {
        if (!atrapaActivo) return;
        if (item.s) { atrapaPuntos++; document.getElementById('atrapa-puntos').textContent = atrapaPuntos; }
        else { atrapaMalos++; document.getElementById('atrapa-penalizacion').textContent = atrapaMalos; }
        div.remove();
    };
    area.appendChild(div);
    setTimeout(() => div.remove(), 2000);
}
function mostrarFinAtrapa() {
    const fin = document.getElementById('atrapa-fin');
    fin.style.display = 'block';
    const neto = atrapaPuntos - atrapaMalos;
    let resultadoAtrapa;
    if (neto >= 8) { fin.innerHTML = `🏆 ¡Increíble! Atrapaste ${atrapaPuntos} saludables. ¡Eres un experto!`; resultadoAtrapa = 'Experto'; }
    else if (neto >= 4) { fin.innerHTML = `👍 Bien hecho. ${atrapaPuntos} saludables, ${atrapaMalos} errores.`; resultadoAtrapa = 'Bien hecho'; }
    else { fin.innerHTML = `😅 Sigue practicando. ${atrapaPuntos} saludables vs ${atrapaMalos} no saludables.`; resultadoAtrapa = 'Sigue practicando'; }
    registrarJuego('atrapa', atrapaPuntos, resultadoAtrapa);
    document.getElementById('atrapa-inicio-msg').style.display = 'flex';
    document.getElementById('atrapa-inicio-msg').querySelector('span').textContent = '🔄';
    document.getElementById('atrapa-inicio-msg').querySelector('button').textContent = 'Jugar de nuevo';
}
