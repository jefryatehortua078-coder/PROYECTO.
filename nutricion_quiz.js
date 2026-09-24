// Nutrición: quiz de conocimiento

const bancoPreguntas = [
    {
        pregunta: "¿Por qué los jugos de fruta licuados no reemplazan el valor nutricional de la fruta entera?",
        opciones: [
            "Porque las cuchillas de metal destruyen las vitaminas por magnetismo.",
            "Porque al romperse la matriz de fibra, la fructosa pasa a actuar como azúcar libre de rápida absorción.",
            "Porque el jugo pierde el agua líquida original de la fruta."
        ],
        correcta: 1,
        explicacion: "Al procesar mecánicamente la fruta se elimina la acción de la fibra dietética. El hígado absorbe la fructosa líquida de forma inmediata, generando picos de insulina idénticos a los de una bebida procesada, mientras que comer la fruta entera ralentiza la absorción."
    },
    {
        pregunta: "¿Qué efecto directo produce el consumo de ultraprocesados en el rendimiento del estudiante?",
        opciones: [
            "Aumenta la retención memorística gracias a los carbohidratos refinados.",
            "Produce hipoglucemia reactiva, causando caídas drásticas de atención y fatiga en las clases.",
            "No genera ningún impacto biológico medible en el sistema nervioso."
        ],
        correcta: 1,
        explicacion: "Los ultraprocesados se absorben tan rápido que causan una elevación masiva de glucosa. El páncreas responde liberando insulina en exceso, vaciando la sangre de azúcar rápidamente, lo que induce somnolencia, cansancio mental y falta de concentración."
    },
    {
        pregunta: "¿Cuál es la función de los carbohidratos complejos en el almuerzo escolar?",
        opciones: [
            "Suministrar cadenas complejas de almidón que liberan glucosa de forma progresiva al cerebro.",
            "Reparar directamente las microrroturas musculares tras el ejercicio.",
            "Aportar vitaminas liposolubles que no se disuelven en agua."
        ],
        correcta: 0,
        explicacion: "Los carbohidratos complejos (como el arroz o las legumbres) son polisacáridos. El cuerpo tarda horas en hidrolizarlos, asegurando que el torrente sanguíneo reciba un goteo constante de glucosa, manteniendo las neuronas estables y enfocadas."
    },
    {
        pregunta: "¿Cuál es la función principal de la fibra dietética en la alimentación infantil?",
        opciones: [
            "Favorecer el tránsito intestinal y aumentar la sensación de saciedad.",
            "Aportar la mayor parte de la energía del día.",
            "Sustituir a las proteínas en la construcción de músculos."
        ],
        correcta: 0,
        explicacion: "La fibra no se digiere, pero regula el funcionamiento del intestino, ralentiza la absorción de azúcares y ayuda a sentirse lleno por más tiempo. Se encuentra en frutas, verduras, legumbres y cereales integrales."
    },
    {
        pregunta: "¿Qué nutriente es fundamental para el crecimiento y la reparación de los tejidos?",
        opciones: [
            "Las proteínas, formadas por aminoácidos.",
            "Los azúcares simples.",
            "Las grasas saturadas."
        ],
        correcta: 0,
        explicacion: "Las proteínas aportan los aminoácidos necesarios para formar músculos, piel, enzimas y defensas. Se obtienen de huevos, lácteos, carnes, pescados y legumbres."
    },
    {
        pregunta: "¿Por qué se recomienda tomar agua en lugar de bebidas azucaradas?",
        opciones: [
            "Porque el agua hidrata sin aportar azúcares añadidos ni calorías vacías.",
            "Porque el agua contiene más vitaminas que los jugos.",
            "Porque las gaseosas no contienen agua."
        ],
        correcta: 0,
        explicacion: "Una bebida azucarada puede aportar varias cucharaditas de azúcar en un solo vaso sin dar saciedad ni nutrientes. El agua hidrata y no favorece las caries ni el exceso de peso."
    },
    {
        pregunta: "¿Qué mineral es clave para tener huesos y dientes fuertes?",
        opciones: [
            "El calcio, presente en la leche, el yogur y el queso.",
            "El yodo, presente en la sal de mesa.",
            "El sodio, presente en los embutidos."
        ],
        correcta: 0,
        explicacion: "Cerca del 99 % del calcio del cuerpo está en huesos y dientes. Durante la infancia y la adolescencia se forma la masa ósea que acompañará a la persona toda la vida, y la vitamina D ayuda a absorberlo."
    },
    {
        pregunta: "¿Qué nutriente ayuda a prevenir la anemia por deficiencia?",
        opciones: [
            "El hierro, presente en carnes, lentejas y hojas verdes.",
            "El calcio de los lácteos.",
            "El sodio de la sal."
        ],
        correcta: 0,
        explicacion: "El hierro forma parte de la hemoglobina, la proteína de la sangre que transporta oxígeno. Su falta produce cansancio, palidez y dificultad para concentrarse."
    },
    {
        pregunta: "¿Qué combinación mejora la absorción del hierro de las lentejas?",
        opciones: [
            "Acompañarlas con jugo de naranja o limón, ricos en vitamina C.",
            "Acompañarlas con un vaso de leche.",
            "Acompañarlas con una gaseosa."
        ],
        correcta: 0,
        explicacion: "La vitamina C transforma el hierro de origen vegetal en una forma que el cuerpo absorbe mejor. En cambio, el té, el café y los lácteos consumidos en la misma comida reducen su absorción."
    },
    {
        pregunta: "¿Por qué es importante no saltarse el desayuno?",
        opciones: [
            "Porque repone la glucosa tras las horas de ayuno nocturno y favorece la concentración.",
            "Porque es la única comida del día que aporta vitaminas.",
            "Porque quema grasa de forma automática."
        ],
        correcta: 0,
        explicacion: "Después de varias horas sin comer, el cerebro necesita energía para rendir en clase. Un desayuno con cereal integral, fruta y un lácteo o una proteína aporta energía de liberación sostenida."
    },
    {
        pregunta: "¿Cuántas frutas y verduras se recomienda consumir al día?",
        opciones: [
            "Al menos 5 porciones (unos 400 g en total).",
            "Solo 1 porción, si es en jugo.",
            "Ninguna, si se toman vitaminas."
        ],
        correcta: 0,
        explicacion: "La Organización Mundial de la Salud recomienda al menos 400 g diarios de frutas y verduras. Aportan fibra, vitaminas, minerales y antioxidantes que las pastillas no reemplazan del todo."
    },
    {
        pregunta: "En la lista de ingredientes de un producto empacado, ¿cómo aparecen ordenados?",
        opciones: [
            "De mayor a menor cantidad en el producto.",
            "De menor a mayor cantidad.",
            "En orden alfabético."
        ],
        correcta: 0,
        explicacion: "Si el azúcar aparece entre los primeros ingredientes, es de los componentes principales del producto. Leer este orden ayuda a elegir mejor sin depender solo de la publicidad del empaque."
    },
    {
        pregunta: "¿Qué tipo de grasas son las más recomendables para la salud?",
        opciones: [
            "Las insaturadas, presentes en el aguacate, los frutos secos y el pescado.",
            "Las grasas trans de los productos empacados.",
            "Las grasas saturadas de los embutidos."
        ],
        correcta: 0,
        explicacion: "Las grasas insaturadas cuidan el corazón y ayudan a absorber las vitaminas A, D, E y K. Las grasas trans, en cambio, deben evitarse por su efecto negativo en el colesterol."
    },
    {
        pregunta: "¿Qué vitamina produce el cuerpo con ayuda de la luz del sol?",
        opciones: [
            "La vitamina D.",
            "La vitamina C.",
            "La vitamina B12."
        ],
        correcta: 0,
        explicacion: "La piel fabrica vitamina D al recibir rayos UVB. Esta vitamina permite fijar el calcio en los huesos, por eso el juego al aire libre también es parte de una buena nutrición."
    },
    {
        pregunta: "¿Por qué los frutos secos, en porción pequeña, son una buena merienda?",
        opciones: [
            "Aportan grasas saludables, proteína y fibra que sacian.",
            "Porque no tienen calorías.",
            "Porque solo contienen azúcar."
        ],
        correcta: 0,
        explicacion: "Un puñado pequeño de nueces o almendras da energía sostenida y nutrientes valiosos. Eso sí, hay que revisar siempre si alguien tiene alergia a los frutos secos."
    },
    {
        pregunta: "¿Cómo debe ser la hidratación durante el ejercicio en niños?",
        opciones: [
            "Beber agua con frecuencia, sin esperar a tener mucha sed.",
            "Beber solo al terminar el ejercicio.",
            "Tomar bebidas energizantes."
        ],
        correcta: 0,
        explicacion: "La sed aparece cuando el cuerpo ya empieza a deshidratarse. Las bebidas energizantes no son recomendables en la infancia por su contenido de cafeína y azúcar."
    },
    {
        pregunta: "¿Cuál de estas es una buena fuente de proteína de origen vegetal?",
        opciones: [
            "Los fríjoles y las lentejas.",
            "Las papas fritas de paquete.",
            "La gelatina de sabores."
        ],
        correcta: 0,
        explicacion: "Las legumbres aportan proteína, fibra y hierro. Combinadas con cereales como el arroz, completan todos los aminoácidos que el cuerpo necesita."
    },
    {
        pregunta: "¿Por qué el exceso de sal es perjudicial para la salud?",
        opciones: [
            "Porque el exceso de sodio favorece la hipertensión con los años.",
            "Porque destruye la fibra de los alimentos.",
            "Porque impide que el cuerpo absorba agua."
        ],
        correcta: 0,
        explicacion: "El sodio en exceso eleva la presión arterial y exige más trabajo a los riñones. Gran parte de la sal que consumimos viene oculta en embutidos, sopas instantáneas y snacks empacados."
    },
    {
        pregunta: "¿Qué significa que un alimento aporta \"calorías vacías\"?",
        opciones: [
            "Que da mucha energía pero casi ningún nutriente (vitaminas, minerales o fibra).",
            "Que no tiene ninguna caloría.",
            "Que solo se puede comer en ayunas."
        ],
        correcta: 0,
        explicacion: "Los dulces, las gaseosas y los snacks fritos llenan de energía pero no aportan lo que el cuerpo necesita para crecer. Reemplazarlos por alimentos frescos mejora la calidad de la dieta."
    },
    {
        pregunta: "¿Cuál es una merienda escolar más saludable?",
        opciones: [
            "Una fruta con yogur natural.",
            "Un paquete de papas fritas con gaseosa.",
            "Galletas rellenas con jugo de caja."
        ],
        correcta: 0,
        explicacion: "La fruta aporta fibra y vitaminas, y el yogur suma proteína y calcio. Las otras opciones tienen exceso de azúcar, sal o grasas y muy pocos nutrientes."
    },
    {
        pregunta: "¿Por qué se recomienda comer frutas y verduras de distintos colores?",
        opciones: [
            "Porque cada color aporta antioxidantes y vitaminas diferentes que protegen las células.",
            "Porque los colores más fuertes tienen más calorías.",
            "Porque el color solo cambia el sabor."
        ],
        correcta: 0,
        explicacion: "Los pigmentos naturales (como el betacaroteno de la zanahoria o el licopeno del tomate) actúan como antioxidantes. Variar los colores del plato es una forma sencilla de variar los nutrientes."
    },
    {
        pregunta: "¿Cuánto tarda aproximadamente el cerebro en registrar la sensación de saciedad?",
        opciones: [
            "Unos 20 minutos.",
            "Unos 2 minutos.",
            "Unas 3 horas."
        ],
        correcta: 0,
        explicacion: "Las señales de saciedad entre el estómago, las hormonas y el cerebro no son inmediatas. Comer despacio y masticar bien ayuda a no pasarse de la cantidad que el cuerpo necesita."
    },
    {
        pregunta: "¿Qué grupo de alimentos debe aportar la mayor parte de la energía en una alimentación equilibrada?",
        opciones: [
            "Los cereales, raíces, tubérculos y plátanos.",
            "Los dulces y refrescos.",
            "Únicamente las carnes."
        ],
        correcta: 0,
        explicacion: "Los carbohidratos son la principal fuente de energía del cuerpo y del cerebro. Lo ideal es elegirlos en su versión menos procesada, como arroz integral, papa, yuca, plátano o avena."
    },
    {
        pregunta: "¿Por qué hay que lavar bien las frutas y verduras antes de comerlas?",
        opciones: [
            "Para eliminar tierra, residuos y microorganismos que pueden causar enfermedades.",
            "Para que tengan más vitaminas.",
            "Para que sepan más dulces."
        ],
        correcta: 0,
        explicacion: "Las frutas y verduras pasan por muchas manos antes de llegar a la mesa. Lavarlas con agua potable y frotarlas reduce el riesgo de infecciones intestinales."
    },
    {
        pregunta: "¿Qué es un alimento ultraprocesado?",
        opciones: [
            "Un producto industrial con muchos aditivos y muy poco alimento entero.",
            "Cualquier alimento cocinado en casa.",
            "Un alimento que fue lavado y picado."
        ],
        correcta: 0,
        explicacion: "Según la clasificación NOVA, los ultraprocesados son formulaciones industriales hechas con ingredientes extraídos de alimentos y aditivos como colorantes, saborizantes y emulsionantes. Suelen ser altos en azúcar, sal y grasas."
    },
    {
        pregunta: "¿Qué riesgo genera el consumo excesivo de azúcares libres en la infancia?",
        opciones: [
            "Mayor riesgo de caries y de sobrepeso.",
            "Mayor crecimiento de los huesos.",
            "Mejor concentración durante todo el día."
        ],
        correcta: 0,
        explicacion: "La OMS recomienda que los azúcares libres sean menos del 10 % de la energía diaria. El exceso alimenta las bacterias que producen caries y aporta calorías que no sacian."
    },
    {
        pregunta: "¿Por qué no conviene eliminar por completo un grupo de alimentos sin orientación profesional?",
        opciones: [
            "Porque cada grupo aporta nutrientes distintos y su ausencia puede causar deficiencias.",
            "Porque todos los grupos aportan exactamente lo mismo.",
            "Porque siempre engorda menos comer de todo."
        ],
        correcta: 0,
        explicacion: "Una alimentación variada asegura vitaminas, minerales, proteínas y energía en la cantidad adecuada. Si hay una alergia o una condición médica, lo correcto es consultar a un nutricionista."
    },
    {
        pregunta: "¿Cuál de estas es una buena fuente de ácidos grasos omega-3?",
        opciones: [
            "Los pescados azules, las nueces y las semillas de chía.",
            "Las gaseosas.",
            "El pan blanco."
        ],
        correcta: 0,
        explicacion: "El omega-3 (como el DHA) contribuye al desarrollo del cerebro y de la visión. Se encuentra en pescados como sardina o salmón, y en nueces, linaza y chía."
    }
];

// Cada intento usa solo PREGUNTAS_POR_INTENTO preguntas, elegidas al azar del banco.
// No se repiten preguntas hasta haber usado todas las del banco.
const PREGUNTAS_POR_INTENTO = 5;

let preguntasQuiz = [];               // preguntas del intento actual (con opciones ya mezcladas)
let preguntasVistas = new Set();      // índices del banco ya usados en intentos anteriores
let preguntaActualIndice = 0;
let respuestasCorrectasContador = 0;

function mezclarArreglo(arreglo) {
    const copia = arreglo.slice();
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}

function prepararIntentoQuiz() {
    let disponibles = bancoPreguntas.map((_, i) => i).filter(i => !preguntasVistas.has(i));
    if (disponibles.length < PREGUNTAS_POR_INTENTO) {   // ya se usaron casi todas: empezar de nuevo
        preguntasVistas.clear();
        disponibles = bancoPreguntas.map((_, i) => i);
    }
    const elegidas = mezclarArreglo(disponibles).slice(0, PREGUNTAS_POR_INTENTO);
    elegidas.forEach(i => preguntasVistas.add(i));

    preguntasQuiz = elegidas.map(i => {
        const original = bancoPreguntas[i];
        // Se mezclan las opciones y se recalcula cuál es la correcta
        const opciones = mezclarArreglo(original.opciones.map((texto, k) => ({ texto, esCorrecta: k === original.correcta })));
        return {
            pregunta: original.pregunta,
            opciones: opciones.map(o => o.texto),
            correcta: opciones.findIndex(o => o.esCorrecta),
            explicacion: original.explicacion
        };
    });
    preguntaActualIndice = 0;
    respuestasCorrectasContador = 0;
}

function cargarPreguntaQuiz() {
    if (preguntasQuiz.length === 0) prepararIntentoQuiz();
    const quiz = preguntasQuiz[preguntaActualIndice];
    document.getElementById('quiz-progreso').innerText = `Pregunta ${preguntaActualIndice + 1} de ${preguntasQuiz.length}`;
    document.getElementById('quiz-pregunta').innerText = quiz.pregunta;

    const contenedorOpciones = document.getElementById('quiz-opciones');
    contenedorOpciones.innerHTML = "";

    const explicacionDiv = document.getElementById('explicacion-quiz');
    explicacionDiv.style.display = "none";
    document.getElementById('btn-siguiente-quiz').style.display = "none";

    quiz.opciones.forEach((opcion, indice) => {
        const boton = document.createElement('button');
        boton.className = "btn-opcion";
        boton.innerText = opcion;
        boton.onclick = () => verificarRespuestaQuiz(indice, boton);
        contenedorOpciones.appendChild(boton);
    });
}

function verificarRespuestaQuiz(indiceSeleccionado, botonSeleccionado) {
    const quiz = preguntasQuiz[preguntaActualIndice];
    const botones = document.querySelectorAll('.opciones-quiz .btn-opcion');
    const explicacionDiv = document.getElementById('explicacion-quiz');

    botones.forEach(btn => btn.disabled = true);

    if (indiceSeleccionado === quiz.correcta) {
        botonSeleccionado.style.background = "#2ecc71";
        botonSeleccionado.style.color = "white";
        respuestasCorrectasContador++;
    } else {
        botonSeleccionado.style.background = "#e74c3c";
        botonSeleccionado.style.color = "white";
        botones[quiz.correcta].style.background = "#2ecc71";
        botones[quiz.correcta].style.color = "white";
    }

    explicacionDiv.style.display = "block";
    explicacionDiv.style.marginTop = "15px";
    explicacionDiv.innerHTML = `<strong>Explicación Científica:</strong> ${quiz.explicacion}`;
    document.getElementById('btn-siguiente-quiz').style.display = "inline-block";
}

function cargarSiguientePregunta() {
    preguntaActualIndice++;
    if (preguntaActualIndice < preguntasQuiz.length) {
        cargarPreguntaQuiz();
    } else {
        document.getElementById('bloque-quiz').style.display = "none";
        const resultadoFinal = document.getElementById('resultado-final-quiz');
        resultadoFinal.style.display = "block";
        document.getElementById('puntuacion-quiz-texto').innerText = `Lograste responder correctamente ${respuestasCorrectasContador} de ${preguntasQuiz.length} evaluaciones teóricas.`;

        registrarQuiz(respuestasCorrectasContador, preguntasQuiz.length);
    }
}

// Envía el puntaje final del quiz al servidor (resultados_quiz), muestra si se
// guardó y lo agrega al historial del perfil sin recargar la página.
async function registrarQuiz(puntaje, total) {
    const contenedor = document.getElementById('resultado-final-quiz');
    const data = await guardarResultado('guardar_quiz.php', { puntaje, total }, contenedor, 'estado-guardado-quiz');
    if (data && data.resultado) {
        const r = data.resultado;
        agregarItemHistorial(
            'lista-mis-quiz',
            `Quiz — ${r.puntaje}/${r.total} correctas`,
            r.fecha,
            `?eliminar_quiz=${r.id}&panel=perfil`,
            '¿Borrar este intento de tu historial?'
        );
    }
}

function reiniciarQuiz() {
    prepararIntentoQuiz();   // nuevo intento = preguntas nuevas
    document.getElementById('bloque-quiz').style.display = "block";
    document.getElementById('resultado-final-quiz').style.display = "none";
    cargarPreguntaQuiz();
}
