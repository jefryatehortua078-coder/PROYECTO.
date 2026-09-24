// Chatbot Nutribot

// Historial en memoria de los mensajes para mantener el contexto con la IA
let historialMensajes = [];

// Función para abrir y cerrar la ventana flotante
function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'flex';
    } else {
        chatBox.style.display = 'none';
    }
}

// Detectar si el usuario presiona la tecla Enter en el input del chat
function evaluarEnterChat(e) {
    if (e.key === 'Enter') {
        enviarMensajeChat();
    }
}

// Función principal para enviar el mensaje y consultar al servidor
async function enviarMensajeChat() {
    const inputField = document.getElementById('chat-input');
    const contenedorMensajes = document.getElementById('chat-messages');
    const textoUsuario = inputField.value.trim();

    if (textoUsuario === "") return;

    // 1. Renderizar el mensaje del usuario en la pantalla
    const divUsuario = document.createElement('div');
    divUsuario.className = 'msg-user';
    divUsuario.textContent = textoUsuario;
    contenedorMensajes.appendChild(divUsuario);
    
    // Limpiar el campo de texto y hacer scroll automático al fondo
    inputField.value = "";
    contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;

    // Guardar en el historial en el formato que espera el chatbot
    historialMensajes.push({ role: 'user', content: textoUsuario });

    // 2. Colocar indicador visual de que el bot está "escribiendo"
    const divPensando = document.createElement('div');
    divPensando.className = 'msg-bot';
    divPensando.id = 'msg-pensando';
    divPensando.textContent = 'Escribiendo... ⏳';
    contenedorMensajes.appendChild(divPensando);
    contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;

    try {
        // 3. Conexión asíncrona mediante FETCH hacia tu archivo chatbot.php
        const respuesta = await fetch('procesar_chat.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ messages: historialMensajes })
        });

        // Remover indicador de carga
        document.getElementById('msg-pensando').remove();

        if (!respuesta.ok) {
            throw new Error('Error en la respuesta del servidor.');
        }

        const datosJson = await respuesta.json();
        
        // Extraer el texto de la respuesta del formato recibido
        let textoBot = "Lo siento, tuve un problema al procesar tu solicitud.";
        if (datosJson.content && datosJson.content[0] && datosJson.content[0].text) {
            textoBot = datosJson.content[0].text;
        }

        // 4. Renderizar la respuesta de la IA en la pantalla
        const divBot = document.createElement('div');
        divBot.className = 'msg-bot';
        divBot.textContent = textoBot;
        contenedorMensajes.appendChild(divBot);

        // Guardar la respuesta del asistente en el historial para no perder el hilo
        historialMensajes.push({ role: 'assistant', content: textoBot });

    } catch (error) {
        console.error(error);
        if(document.getElementById('msg-pensando')) {
            document.getElementById('msg-pensando').remove();
        }
        const divError = document.createElement('div');
        divError.className = 'msg-bot';
        divError.style.color = 'red';
        divError.textContent = '⚠️ Hubo un error de conexión con Nutribot. Inténtalo de nuevo más tarde.';
        contenedorMensajes.appendChild(divError);
    }

    // Scroll final
    contenedorMensajes.scrollTop = contenedorMensajes.scrollHeight;
}
