// Nutrición: semáforo y calculadora de IMC/TMB

function mostrarSemaforo(color) {
    const panel = document.getElementById('panel-semaforo');
    panel.style.display = 'block';
    
    if (color === 'verde') {
        panel.style.borderColor = '#2ecc71';
        panel.innerHTML = `<h5 style="margin:0 0 5px 0; color:#2ecc71; font-size:1.1em;">Alimentos Verdes (Consumo Regular Obligatorio)</h5>
                           <p style="margin:0; color:#555;">Representados por hortalizas foliares, verduras crudas y frutos enteros. El consumo de estos alimentos aporta fibra dietética insoluble que previene la respuesta glucémica elevada y protege las vellosidades intestinales encargadas de la absorción eficiente de nutrientes.</p>`;
    } else if (color === 'amarillo') {
        panel.style.borderColor = '#f1c40f';
        panel.innerHTML = `<h5 style="margin:0 0 5px 0; color:#f1c40f; font-size:1.1em;">Alimentos Amarillos (Consumo Dosificado)</h5>
                           <p style="margin:0; color:#555;">Incluye proteínas animales magras, tubérculos, legumbres y cereales como el arroz. Proveen la densidad proteica y calórica indispensable para sostener el crecimiento de los tejidos y reponer el glucógeno muscular degradado en las jornadas escolares.</p>`;
    } else if (color === 'rojo') {
        panel.style.borderColor = '#e74c3c';
        panel.innerHTML = `<h5 style="margin:0 0 5px 0; color:#e74c3c; font-size:1.1em;">Alimentos Rojos (Consumo Fuertemente Restringido)</h5>
                           <p style="margin:0; color:#555;">Involucra azúcares refinados, grasas saturadas e hidrogenadas, y ultraprocesados. Provocan desbalances hemodinámicos y picos insulínicos elevados seguidos de fatiga extrema, mermando los procesos de memorización e incrementando el riesgo metabólico a largo plazo.</p>`;
    }
}

function calcularCalculadoraAvanzada() {
    const peso = parseFloat(document.getElementById('peso').value);
    let estatura = parseFloat(document.getElementById('estatura').value);
    if (estatura > 3) estatura = estatura / 100; // si escribieron centímetros (165), lo pasamos a metros
    const genero = document.getElementById('genero').value;
    const resultadoDiv = document.getElementById('resultado-imc-nuevo');
    const barraContenedor = document.getElementById('barra-imc-contenedor');
    const indicador = document.getElementById('indicador-imc');

    if (!peso || !estatura || estatura <= 0 || !genero) {
        resultadoDiv.innerHTML = "<span style='color:#e74c3c; font-weight:600;'>Por favor, introduce peso, estatura y selecciona un género válido para ejecutar los algoritmos.</span>";
        return;
    }

    const imc = peso / (estatura * estatura);
    barraContenedor.style.display = 'block';

    let clasificacion = "";
    let colorHex = "";
    let porcentajePosicion = 50;

    if (imc < 18.5) {
        clasificacion = "Bajo peso por debajo de los estándares ponderales.";
        colorHex = "#f1c40f";
        porcentajePosicion = 10;
    } else if (imc >= 18.5 && imc < 25) {
        clasificacion = "Rango normopeso o composición corporal saludable.";
        colorHex = "#2ecc71";
        porcentajePosicion = 38;
    } else if (imc >= 25 && imc < 30) {
        clasificacion = "Sobrepeso con acumulación lipídica moderada.";
        colorHex = "#e67e22";
        porcentajePosicion = 62;
    } else {
        clasificacion = "Obesidad con requerimiento de intervención médica.";
        colorHex = "#e74c3c";
        porcentajePosicion = 88;
    }

    indicador.style.left = porcentajePosicion + "%";

    let tmb = 0;
    if (genero === "masculino") {
        tmb = (17.5 * peso) + 651;
    } else {
        tmb = (12.2 * peso) + 746;
    }

    resultadoDiv.innerHTML = `
        <div style="border-left: 4px solid ${colorHex}; padding-left: 15px;">
            <p style="margin: 0 0 8px 0;">Tu Índice de Masa Corporal es de <strong>${imc.toFixed(1)} kg/m²</strong>.</p>
            <p style="margin: 0 0 12px 0; color: ${colorHex}; font-weight: 600; font-size: 1.1em;">Estado: ${clasificacion}</p>
            <p style="margin: 0; color: #475569; font-size: 1em;">
                Tu Gasto Energético Basal estimado es de <strong>${Math.round(tmb)} calorías diarias</strong>. Esto representa la energía neta mínima que tu organismo requiere para mantener funciones celulares vitales, sin contar las calorías adicionales que gastas al caminar o entrenar.
            </p>
        </div>
    `;

    registrarImc(peso, estatura, genero, imc, clasificacion, Math.round(tmb));
}

// Envía el resultado de la calculadora de IMC/TMB al servidor (resultados_imc),
// muestra si se guardó y lo agrega al historial del perfil sin recargar la página.
async function registrarImc(peso, estatura, genero, imc, clasificacion, tmb) {
    const resultadoDiv = document.getElementById('resultado-imc-nuevo');
    const data = await guardarResultado(
        'guardar_imc.php',
        { peso, estatura, genero, imc, clasificacion, tmb },
        resultadoDiv, 'estado-guardado-imc'
    );
    if (data && data.resultado) {
        const r = data.resultado;
        agregarItemHistorial(
            'lista-mis-imc',
            `IMC ${r.imc} · TMB ${r.tmb} kcal`,
            `${r.peso} kg · ${r.estatura} m · ${r.fecha}`,
            `?eliminar_imc=${r.id}&panel=perfil`,
            '¿Borrar este cálculo de tu historial?',
            r.clasificacion
        );
    }
}
