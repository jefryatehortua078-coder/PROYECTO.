// Flipcards, pestañas de semana del menú y validación del registro

// Función única para todas las flipcards del sitio (inicio, menú y nutrición)
function toggleFlip(tarjeta) {
    tarjeta.classList.toggle('flipped');
}

function mostrarSemanaMenu(numero) {
    document.querySelectorAll('.menu-semana-contenido').forEach(function (div) {
        div.style.display = (div.dataset.semana === String(numero)) ? 'block' : 'none';
    });
    document.querySelectorAll('.menu-semana-btn').forEach(function (btn) {
        btn.classList.toggle('activa', btn.dataset.semana === String(numero));
    });
}

function validarRegistro() {
    const correo = document.getElementById('reg-correo').value.toLowerCase();
    const password = document.getElementById('reg-pass').value;

    if (!correo.endsWith('@gmail.com') && !correo.endsWith('@ie.edu.co')) {
        alert('¡Atención! Usa un correo @gmail.com o tu correo institucional (@ie.edu.co).');
        return false;
    }

    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres por seguridad.');
        return false;
    }
    return true;
}

// ---- Guardado de resultados (IMC y quiz) ----

// Envía un resultado al servidor y muestra debajo si se guardó o por qué no.
// Devuelve la respuesta del servidor si todo salió bien, o null si falló.
async function guardarResultado(url, datos, contenedor, idEstado) {
    let estado = document.getElementById(idEstado);
    if (!estado) {
        estado = document.createElement('p');
        estado.id = idEstado;
        contenedor.appendChild(estado);
    }
    const mostrar = (clase, texto) => { estado.className = 'estado-guardado ' + clase; estado.textContent = texto; };
    mostrar('', 'Guardando tu resultado…');

    try {
        const resp = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        const texto = await resp.text();
        let data;
        try { data = JSON.parse(texto); }
        catch (e) {
            console.error('Respuesta inesperada de ' + url + ':', texto);
            mostrar('error', '⚠️ El servidor respondió algo inesperado (' + resp.status + '). Revisa ' + url + '.');
            return null;
        }
        if (resp.ok && data.ok) {
            mostrar('ok', '✅ Resultado guardado en tu perfil.');
            return data;
        }
        mostrar('error', '⚠️ ' + (data.error || 'No se pudo guardar el resultado.'));
    } catch (err) {
        console.error('No se pudo contactar ' + url + ':', err);
        mostrar('error', '⚠️ No se pudo conectar con el servidor para guardar el resultado.');
    }
    return null;
}

// Agrega una fila al historial del panel de perfil (mismo estilo que "Mis juegos jugados").
function agregarItemHistorial(idLista, titulo, detalle, hrefBorrar, textoConfirmar, tooltip) {
    const lista = document.getElementById(idLista);
    if (!lista) return;
    const vacio = lista.querySelector('.sin-juegos');
    if (vacio) vacio.remove();

    const item = document.createElement('div');
    item.className = 'juego-item';

    const info = document.createElement('div');
    info.className = 'juego-info';
    const nombre = document.createElement('div');
    nombre.className = 'juego-nombre';
    nombre.textContent = titulo;
    if (tooltip) nombre.title = tooltip;
    const det = document.createElement('div');
    det.className = 'juego-detalle';
    det.textContent = detalle;
    info.append(nombre, det);

    const borrar = document.createElement('a');
    borrar.className = 'juego-borrar';
    borrar.href = hrefBorrar;
    borrar.title = 'Borrar';
    borrar.textContent = '✕';
    borrar.onclick = () => confirm(textoConfirmar);

    item.append(info, borrar);
    lista.prepend(item);
}
