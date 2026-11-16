// --- Diccionarios de Letras y Números ---
const MORSE_LETTERS = {
  "A": ".-",    "B": "-...",  "C": "-.-.",  "D": "-..",   "E": ".",
  "F": "..-.",  "G": "--.",   "H": "....",  "I": "..",    "J": ".---",
  "K": "-.-",   "L": ".-..",  "M": "--",    "N": "-.",    "O": "---",
  "P": ".--.",  "Q": "--.-",  "R": ".-.",   "S": "...",   "T": "-",
  "U": "..-",   "V": "...-",  "W": ".--",   "X": "-..-",  "Y": "-.--",
  "Z": "--.."
};

const MORSE_NUMBERS = {
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----."
};

const REVERSE_MORSE = Object.fromEntries(
  Object.entries({ ...MORSE_LETTERS, ...MORSE_NUMBERS }).map(([char, code]) => [code, char])
);

// --- Base de Datos Táctica ---
const TACTICAL_DATABASE = {
  sinNumeros: {
    basico: [
      "Punto seguro alfa", "Todo despejado", "Ejecutar orden", 
      "Revisar perimetro", "Zona bajo control", "Avanzar sin ruido", 
      "Esperar senal", "Retirada tactica", "Informe recibido", "Silencio radial"
    ],
    moderado: [
      "Mantener posicion actual", "Objetivo avistado en colina", "Cambio de frecuencia operativa", 
      "Fuego de cobertura necesario", "Posicion fuertemente comprometida", "Ruta libre de patrullas hostiles", 
      "Establecer enlace secundario", "Esperar nuevas coordenadas", "Aviso de patrulla cercana", "Repliegue inmediato"
    ],
    dificil: [
      "Infiltracion completada en base norte esperando refuerzos", 
      "Corte de suministro electrico detectado en nivel inferior", 
      "Transmision interceptada convoy enemigo se desplaza al este", 
      "Atencion unidad tres reporte estado actual de municion", 
      "Perimetro exterior violado activar protocolos de seguridad", 
      "Equipo de reconocimiento capturado en zona de exclusion", 
      "Solicito apoyo aereo inmediato en coordenadas marcadas", 
      "Silencio absoluto en todas las frecuencias operativas", 
      "Ruta de escape bloqueada buscar alternativa urgente", 
      "Destruir terminales de datos antes de la retirada"
    ],
    experto: [
      "ALERTA: Protocolo de emergencia activado destruir equipo operativo", 
      "Brecha de seguridad en sector central evacuar posicion ahora", 
      "Contraseña maestra modificada por orden del comando superior", 
      "Ataque cibernético en curso aislar servidores principales de red", 
      "Transmisión hostil detectada analizando huella digital enemiga", 
      "Orden de fuego a discreción contra cualquier intruso avistado", 
      "Fracaso en la infiltración activar ruta de escape alternativa C", 
      "Urgente: Munición agotada en el puesto de avanzada norte", 
      "Fin de transmisiones operando bajo silencio radial absoluto", 
      "Confirmada baja en el sector principal iniciar protocolo fúnebre"
    ]
  },
  conNumeros: {
    basico: [
      "Sector 1 seguro", "Punto 3 despejado", "Fase 2 iniciada", 
      "Zona 4 controlada", "Linea 5 abierta", "Base 2 en silencio", 
      "Puesto 1 alerta", "Ruta 3 despejada", "Sector 2 seguro", "Area 4 libre"
    ],
    moderado: [
      "Sector 4 bajo fuego enemigo", "Extraccion a las 0300 horas", "Clave de acceso siete confirmada", 
      "Objetivo en cuadrante 9", "Unidad 2 reporta novedades", "Frecuencia 140 activa", 
      "Codigo 8 autorizado", "Punto 7 comprometido", "Relevo en sector 3", "Llegada estimada a las 0530"
    ],
    dificil: [
      "Infiltracion en sector 7 a las 0400 horas reportar novedades", 
      "Corte de energia en bloque 3 activar generadores de respaldo 2", 
      "Convoy 5 interceptado en ruta 12 coordenadas 45 norte", 
      "Atencion unidad 8 municion al 30 por ciento en puesto 4", 
      "Perimetro 9 violado por 3 intrusos activar alarma silenciosa", 
      "Equipo alfa reporta posicion en cuadrante 6 zona 2", 
      "Solicito apoyo en coordenadas 33 longitud 78 oeste", 
      "Frecuencia principal 92 caida cambiar a canal auxiliar 4", 
      "Ruta 5 bloqueada por unidades enemigas buscar variante 8", 
      "Destruir terminal 4 antes de la hora cero fijada a las 0600"
    ],
    experto: [
      "ALERTA: Protocolo 9 activado destruir terminal 3 codigo maestro 8421", 
      "Brecha en sector 5 lanzamiento balístico autorizado zona 0 a las 0215", 
      "Contraseña cambiada a delta 7 confirmar recepcion en canal 9", 
      "Ataque en servidores del nivel 4 aislar nodos 1 a 6 de inmediato", 
      "Transmisión hostil en frecuencia 108 origen coordenadas 99 este", 
      "Orden de fuego autorizado en sector 2 contra blancos 4 y 5", 
      "Fracaso en ruta 6 activar protocolo de escape 8 zona de exclusion", 
      "Urgente: 4 bajas en puesto 3 munición agotada solicitar apoyo 7", 
      "Fin de transmisiones operando en canal 12 bajo silencio total", 
      "Coordenadas de impacto 50 norte 20 oeste confirmadas por comando 9"
    ]
  }
};

// Tiempos actualizados: Difícil a 120s (2 min) y Experto a 90s (1.5 min)
const MISSION_TIMERS = { basico: 60, moderado: 45, dificil: 120, experto: 90 };

const NARRATIVES = {
  basico: "SITREP FASE 1: Te encuentras en el puesto de observación avanzado. Cifra y transmite el informe de reconocimiento al alto mando.",
  moderado: "SITREP FASE 2: Movimientos hostiles detectados en el sector. Codifica la orden de contención antes de perder la frecuencia.",
  dificil: "ALERTA DE INTROSIÓN: Suministro principal cortado. Transmite las coordenadas de emergencia a la base central. (120s disponibles - Permite corrección de errores).",
  experto: "CÓDIGO ROJO: Posición completamente comprometida. El comando exige transmisión cifrada urgente. (90s disponibles - ¡Protocolo de Cero Errores Activo!)."
};

const SUCCESS_DEBRIEFS = {
  defaultSuccess: [
    "Transmisión recibida y verificada por el nodo central con éxito total. Buen trabajo, operador.",
    "Señal limpia y decodificada sin errores en la central. Las unidades en terreno ya han tomado nota.",
    "Cifrado completado con precisión quirúrgica. El flujo de datos hacia el alto mando es óptimo.",
    "Frecuencia despejada y validada por inteligencia. Proceda inmediatamente con el siguiente sector.",
    "Paquete táctico procesado correctamente. El frente avanza según los planes establecidos."
  ]
};

function getSuccessMessageForTarget(targetText) {
  const options = SUCCESS_DEBRIEFS.defaultSuccess;
  return options[Math.floor(Math.random() * options.length)];
}

// Renderizar Diccionario Morse
const lettersContainer = document.getElementById('morseLetters');
Object.entries(MORSE_LETTERS).forEach(([char, code]) => {
  const item = document.createElement('div');
  item.className = 'dict-item';
  item.innerHTML = `<strong>${char}</strong> <span>${code}</span>`;
  lettersContainer.appendChild(item);
});

const numbersContainer = document.getElementById('morseNumbers');
Object.entries(MORSE_NUMBERS).forEach(([char, code]) => {
  const item = document.createElement('div');
  item.className = 'dict-item';
  item.innerHTML = `<strong>${char}</strong> <span>${code}</span>`;
  numbersContainer.appendChild(item);
});

// --- Beep Generator (Audio Web Audio API) ---
let audioCtx = null;
let oscillator = null;
let gainNode = null;

function initBeepAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
}

function startBeep(freq = 750) {
  initBeepAudio();
  if (oscillator) return;
  oscillator = audioCtx.createOscillator();
  gainNode = audioCtx.createGain();
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.005);
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.start();
}

function stopBeep() {
  if (oscillator && gainNode) {
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.005);
    setTimeout(() => {
      if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        oscillator = null;
      }
    }, 10);
  }
}

// --- YouTube IFrame API para el Audio de Fondo (AISLADO ESTRICTAMENTE AL MODO PRÁCTICA) ---
let ytPlayer = null;
let isYtReady = false;

function onYouTubeIframeAPIReady() {
  ytPlayer = new YT.Player('ytAudioPlayer', {
    events: {
      'onReady': (event) => {
        isYtReady = true;
        event.target.setVolume(70);
        if (document.getElementById('mainModeSelect').value !== 'game') {
          event.target.stopVideo();
        }
      }
    }
  });
}

function playAmbientAudio() {
  const currentInterface = document.getElementById('mainModeSelect').value;
  if (currentInterface === 'game' && isYtReady && ytPlayer && typeof ytPlayer.playVideo === 'function') {
    ytPlayer.unMute();
    ytPlayer.playVideo();
  }
}

function stopAmbientAudio() {
  if (isYtReady && ytPlayer && typeof ytPlayer.stopVideo === 'function') {
    ytPlayer.stopVideo();
  }
}

// --- Sistema de Cola Anti-Repetición ---
let missionPools = {};

function getNextMission(categoryKey, diffKey, fullList) {
  const poolKey = `${categoryKey}_${diffKey}`;
  if (!missionPools[poolKey] || missionPools[poolKey].length === 0) {
    missionPools[poolKey] = [...fullList].sort(() => Math.random() - 0.5);
  }
  return missionPools[poolKey].pop();
}

// --- Variables Globales ---
let pressStartTime = 0;
let releaseTimeout = null;
let spaceTimeout = null;
let currentMorseSequence = "";
let isPressed = false;
let letterSpacingTime = 800;
let prevDeleteState = 0;
let deletePressStartTime = 0;

let gameState = { active: false, target: "", timer: 0, interval: null, diff: "basico", includeNums: false };

// DOM Generales
const currentMorseEl = document.getElementById('currentMorse');
const currentLetterEl = document.getElementById('currentLetter');
const fullMessageEl = document.getElementById('fullMessage');
const interpretedMessageEl = document.getElementById('interpretedMessage');
const btnClear = document.getElementById('btnClear');
const btnDeleteLast = document.getElementById('btnDeleteLast');
const btnSendToChat = document.getElementById('btnSendToChat');
const modeSelect = document.getElementById('modeSelect');
const inputSource = document.getElementById('inputSource');
const btnConnect = document.getElementById('btnConnect');
const spacingSlider = document.getElementById('spacingSlider');
const spacingValue = document.getElementById('spacingValue');
const chatLogs = document.getElementById('chatLogs');
const ambientVolumeSlider = document.getElementById('ambientVolumeSlider');
const volumeValue = document.getElementById('volumeValue');

// DOM Juego & Modales
const mainModeSelect = document.getElementById('mainModeSelect');
const panelChat = document.getElementById('panelChat');
const panelGame = document.getElementById('panelGame');
const btnOpenBriefing = document.getElementById('btnOpenBriefing');
const btnStopGame = document.getElementById('btnStopGame');
const gameDifficulty = document.getElementById('gameDifficulty');
const gameModeNumbers = document.getElementById('gameModeNumbers');
const targetMessageEl = document.getElementById('targetMessage');
const gameTimerEl = document.getElementById('gameTimer');
const gameSitrepEl = document.getElementById('gameSitrep');
const gameStatusEl = document.getElementById('gameStatus');

const briefingModal = document.getElementById('briefingModal');
const modalTitle = document.getElementById('modalTitle');
const modalSitrep = document.getElementById('modalSitrep');
const modalTargetMessage = document.getElementById('modalTargetMessage');
const btnCloseModal = document.getElementById('btnCloseModal');
const modalControlsContainer = document.getElementById('modalControlsContainer');
const modalDifficultyContainer = document.getElementById('modalDifficultyContainer');
const modalGameDifficulty = document.getElementById('modalGameDifficulty');

const warningModal = document.getElementById('warningModal');
const warningText = document.getElementById('warningText');
const btnAcceptWarning = document.getElementById('btnAcceptWarning');
const btnCancelWarning = document.getElementById('btnCancelWarning');

const headsetModal = document.getElementById('headsetModal');
const btnAcceptHeadset = document.getElementById('btnAcceptHeadset');

// Interfaz Principal: Manejo aislado de vistas y audio ambiental
mainModeSelect.addEventListener('change', (e) => {
  if (e.target.value === 'game') {
    panelChat.classList.add('hidden');
    panelGame.classList.remove('hidden');
    headsetModal.classList.remove('hidden');
  } else {
    stopAmbientAudio();
    panelGame.classList.add('hidden');
    panelChat.classList.remove('hidden');
    stopGame();
  }
});

btnAcceptHeadset.addEventListener('click', () => {
  headsetModal.classList.add('hidden');
  if (mainModeSelect.value === 'game') {
    playAmbientAudio();
  }
});

// Control deslizante de volumen ambiental
ambientVolumeSlider.addEventListener('input', (e) => {
  const vol = parseInt(e.target.value);
  volumeValue.textContent = `${vol}%`;
  if (isYtReady && ytPlayer && typeof ytPlayer.setVolume === 'function') {
    ytPlayer.setVolume(vol);
  }
});

spacingSlider.addEventListener('input', (e) => {
  letterSpacingTime = parseInt(e.target.value);
  spacingValue.textContent = `${letterSpacingTime} ms`;
});

// Selector de dificultad
gameDifficulty.addEventListener('change', (e) => {
  const selectedDiff = e.target.value;
  gameState.diff = selectedDiff;
  resetPanelControlsState();

  if (selectedDiff === 'dificil') {
    warningText.innerHTML = "<strong>Advertencia de Operación [DIFÍCIL]:</strong> Cuentas con un margen amplio de <strong>120 segundos (2 minutos)</strong> para decodificar mensajes largos. Se permite corregir errores con el sistema de borrado. ¿Deseas continuar o prefieres seguir practicando en niveles inferiores?";
    warningModal.classList.remove('hidden');
  } else if (selectedDiff === 'experto') {
    warningText.innerHTML = "<strong>Advertencia de Operación [EXPERTO]:</strong> Protocolo de tolerancia cero activado con <strong>90 segundos (1.5 min)</strong>. Tienes el tiempo necesario para mensajes complejos, pero <strong>cualquier error en la escritura provocará el fallo inmediato de la misión</strong>. ¿Estás preparado?";
    warningModal.classList.remove('hidden');
  }
});

gameModeNumbers.addEventListener('change', () => {
  resetPanelControlsState();
});

btnAcceptWarning.addEventListener('click', () => {
  warningModal.classList.add('hidden');
});

btnCancelWarning.addEventListener('click', () => {
  warningModal.classList.add('hidden');
  gameDifficulty.value = 'moderado';
  gameState.diff = 'moderado';
  resetPanelControlsState();
});

// --- Lógica de Entrada Morse ---
function handlePressStart() {
  if (modeSelect.value === 'receptor' && inputSource.value === 'keyboard') return;
  if (isPressed) return;

  isPressed = true;
  startBeep();
  pressStartTime = Date.now();
  clearTimeout(releaseTimeout);
  clearTimeout(spaceTimeout);
}

function handlePressEnd() {
  if (!isPressed) return;
  isPressed = false;
  stopBeep();

  const pressDuration = Date.now() - pressStartTime;
  currentMorseSequence += (pressDuration < 250) ? "." : "-";
  currentMorseEl.textContent = currentMorseSequence;

  releaseTimeout = setTimeout(() => {
    decodeCurrentSequence();
  }, letterSpacingTime);
}

function decodeCurrentSequence() {
  if (!currentMorseSequence) return;

  const letter = REVERSE_MORSE[currentMorseSequence] || "?";

  // Validación Precisa en Modo Experto
  if (gameState.active && gameState.diff === 'experto') {
    const cleanTarget = gameState.target.toUpperCase().replace(/[^A-Z0-9]/g, '');
    const currentRawText = (fullMessageEl.textContent + letter).trim();
    const currentCleanWords = currentRawText.split(/\s*\/\s*/).map(w => w.replace(/\s+/g, '')).filter(w => w.length > 0).join("");

    const currentIndex = currentCleanWords.length - 1;

    if (letter === '?' || (currentIndex < cleanTarget.length && currentCleanWords[currentIndex] !== cleanTarget[currentIndex])) {
      endGame(false, "wrong_character");
      return;
    }
  }

  currentLetterEl.textContent = letter;
  fullMessageEl.textContent += letter + " ";
  
  currentMorseSequence = "";
  currentMorseEl.textContent = "";

  autoInterpretText();

  spaceTimeout = setTimeout(() => {
    let currentText = fullMessageEl.textContent.trimEnd();
    if (currentText.length > 0 && !currentText.endsWith("/")) {
      fullMessageEl.textContent = currentText + " / ";
      autoInterpretText();
    }
  }, letterSpacingTime * 2.5);
}

function autoInterpretText() {
  let rawText = fullMessageEl.textContent.trim();
  if (!rawText) {
    interpretedMessageEl.textContent = "";
    return;
  }

  let wordBlocks = rawText.split(/\s*\/\s*/);
  let cleanWords = wordBlocks.map(block => block.replace(/\s+/g, '')).filter(word => word.length > 0);
  const result = cleanWords.join(" ");
  interpretedMessageEl.textContent = result;

  if (gameState.active) {
    checkGameProgress(result);
  }
}

// Borrado
function deleteLastLetter() {
  let text = fullMessageEl.textContent.trimEnd();
  if (text.endsWith("/")) {
    fullMessageEl.textContent = text.slice(0, -1).trimEnd() + " ";
  } else if (text.length > 0) {
    let parts = text.split(" ");
    parts.pop();
    fullMessageEl.textContent = parts.length > 0 ? parts.join(" ") + " " : "";
  }
  autoInterpretText();
}

btnDeleteLast.addEventListener('click', deleteLastLetter);
btnClear.addEventListener('click', () => {
  fullMessageEl.textContent = "";
  interpretedMessageEl.textContent = "";
  currentLetterEl.textContent = "-";
  currentMorseEl.textContent = "";
  currentMorseSequence = "";
});

btnSendToChat.addEventListener('click', () => {
  const textToSend = interpretedMessageEl.textContent || fullMessageEl.textContent;
  if (!textToSend.trim()) return;

  const mode = modeSelect.value;
  const msgEl = document.createElement('div');
  msgEl.className = `chat-msg ${mode}`;
  msgEl.innerHTML = `<span class="author">${mode.toUpperCase()}</span><div>${textToSend}</div>`;
  chatLogs.appendChild(msgEl);
  chatLogs.parentElement.scrollTop = chatLogs.parentElement.scrollHeight;

  btnClear.click();
});

// --- Flujo de Misión ---
btnOpenBriefing.addEventListener('click', () => prepareBriefing(false));
btnCloseModal.addEventListener('click', closeBriefingModal);
btnStopGame.addEventListener('click', stopGame);

function prepareBriefing(isDebriefing = false, success = false, failureReason = "timeout") {
  gameState.diff = gameDifficulty.value;
  gameState.includeNums = gameModeNumbers.value === 'yes';
  const categoryKey = gameState.includeNums ? 'conNumeros' : 'sinNumeros';
  const list = TACTICAL_DATABASE[categoryKey][gameState.diff];
  
  if (!isDebriefing) {
    modalDifficultyContainer.classList.add('hidden');
    gameState.target = getNextMission(categoryKey, gameState.diff, list);
    gameState.timer = MISSION_TIMERS[gameState.diff];

    modalTitle.textContent = "ORDEN DE MISIÓN - BRIEFING TÁCTICO";
    modalSitrep.textContent = NARRATIVES[gameState.diff];
    modalTargetMessage.textContent = gameState.target;
    modalControlsContainer.innerHTML = `
      <button id="btnConfirmStart" class="btn btn-accent">Comenzar Transmisión</button>
      <button id="btnCancelBriefing" class="btn btn-danger">Cancelar</button>
    `;
    document.getElementById('btnConfirmStart').addEventListener('click', startActiveTimer);
    document.getElementById('btnCancelBriefing').addEventListener('click', closeBriefingModal);
  } else {
    modalDifficultyContainer.classList.remove('hidden');
    modalGameDifficulty.value = gameState.diff;

    if (success) {
      gameState.target = getNextMission(categoryKey, gameState.diff, list);
      gameState.timer = MISSION_TIMERS[gameState.diff];

      modalTitle.textContent = "INFORME: MISIÓN CUMPLIDA [ÉXITO]";
      modalSitrep.textContent = getSuccessMessageForTarget(gameState.target);
      modalTargetMessage.textContent = gameState.target;
      modalControlsContainer.innerHTML = `
        <button id="btnNextMission" class="btn btn-accent">Iniciar Siguiente Misión</button>
      `;
      document.getElementById('btnNextMission').addEventListener('click', () => {
        applyModalDifficultyChange();
        startActiveTimer();
      });
    } else {
      gameState.timer = MISSION_TIMERS[gameState.diff];

      modalTitle.textContent = "INFORME: TRANSMISIÓN FALLIDA [ALERTA]";
      
      if (failureReason === "wrong_character") {
        modalSitrep.textContent = "¡MISIÓN ABORTADA POR EQUIVOCACIÓN DE ESCRITURA! Se detectó un carácter erróneo ingresado en modo Experto. El canal de comunicación se corrompió por romper el protocolo de ceros errores.";
      } else {
        modalSitrep.textContent = "¡TIEMPO AGOTADO! El cronómetro táctico llegó a cero antes de completar el envío completo del mensaje. La señal se perdió en la estática del sector.";
      }

      modalTargetMessage.textContent = gameState.target;
      modalControlsContainer.innerHTML = `
        <button id="btnRetrySame" class="btn btn-accent">Reintentar Mismo Código</button>
        <button id="btnRetryNew" class="btn btn-sec">Generar Nuevo Código</button>
      `;
      document.getElementById('btnRetrySame').addEventListener('click', () => {
        applyModalDifficultyChange();
        startActiveTimer();
      });
      document.getElementById('btnRetryNew').addEventListener('click', () => {
        applyModalDifficultyChange();
        gameState.target = getNextMission(categoryKey, gameState.diff, list);
        startActiveTimer();
      });
    }
  }

  briefingModal.classList.remove('hidden');
}

function applyModalDifficultyChange() {
  const chosenDiff = modalGameDifficulty.value;
  if (chosenDiff !== gameDifficulty.value) {
    gameDifficulty.value = chosenDiff;
    gameState.diff = chosenDiff;
  }
}

function closeBriefingModal() {
  briefingModal.classList.add('hidden');
  resetPanelControlsState();
  if (document.activeElement) document.activeElement.blur();
}

function resetPanelControlsState() {
  if (!gameState.active) {
    btnOpenBriefing.classList.remove('hidden');
    btnOpenBriefing.textContent = "Iniciar Misión";
    btnStopGame.classList.add('hidden');
  }
}

function startActiveTimer() {
  closeBriefingModal();
  gameState.active = true;

  targetMessageEl.textContent = gameState.target;
  gameSitrepEl.textContent = NARRATIVES[gameState.diff];
  gameStatusEl.textContent = "[MISIÓN EN CURSO]";
  gameStatusEl.className = "badge badge-accent";
  gameTimerEl.textContent = `${gameState.timer}s`;

  btnClear.click();
  btnOpenBriefing.classList.add('hidden');
  btnStopGame.classList.remove('hidden');

  clearInterval(gameState.interval);
  gameState.interval = setInterval(() => {
    gameState.timer--;
    gameTimerEl.textContent = `${gameState.timer}s`;
    if (gameState.timer <= 0) {
      endGame(false, "timeout");
    }
  }, 1000);
}

function stopGame() {
  gameState.active = false;
  clearInterval(gameState.interval);
  targetMessageEl.textContent = "ESPERANDO ORDEN...";
  gameTimerEl.textContent = "--";
  gameSitrepEl.textContent = "Selecciona dificultad e inicia transmisión.";
  gameStatusEl.textContent = "[INACTIVO]";
  gameStatusEl.className = "badge";
  btnOpenBriefing.classList.remove('hidden');
  btnOpenBriefing.textContent = "Iniciar Misión";
  btnStopGame.classList.add('hidden');
  if (document.activeElement) document.activeElement.blur();
}

function checkGameProgress(userText) {
  const cleanTarget = gameState.target.toUpperCase().replace(/[^A-Z0-9]/g, '');
  const cleanUser = userText.toUpperCase().replace(/[^A-Z0-9]/g, '');

  if (cleanUser.length === cleanTarget.length && cleanUser === cleanTarget) {
    endGame(true);
  }
}

function endGame(success, failureReason = "timeout") {
  gameState.active = false;
  clearInterval(gameState.interval);
  btnOpenBriefing.classList.remove('hidden');
  btnOpenBriefing.textContent = "Reintentar Misión";
  btnStopGame.classList.add('hidden');

  if (success) {
    gameStatusEl.textContent = "[TRANSMISIÓN EXITOSA]";
    gameStatusEl.className = "badge badge-accent";
  } else {
    gameStatusEl.textContent = "[FALLO DE TRANSMISIÓN]";
    gameStatusEl.className = "badge badge-danger";
  }

  prepareBriefing(true, success, failureReason);
}

// --- Controles de Entrada ---
inputSource.addEventListener('change', (e) => {
  btnConnect.classList.toggle('hidden', e.target.value !== 'serial');
});

document.addEventListener('keydown', (e) => {
  if (inputSource.value === 'keyboard' && e.code === 'Space') {
    e.preventDefault();
    if (!e.repeat) {
      handlePressStart();
    }
  }
});

document.addEventListener('keyup', (e) => {
  if (inputSource.value === 'keyboard' && e.code === 'Space') {
    e.preventDefault();
    handlePressEnd();
  }
});

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    setTimeout(() => {
      if (document.activeElement) document.activeElement.blur();
    }, 50);
  }
});

// Web Serial (Arduino)
let port, reader;
btnConnect.addEventListener('click', async () => {
  try {
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });
    btnConnect.textContent = "Conectado";
    btnConnect.style.background = "#10b981";
    btnConnect.style.color = "#000";
    readSerialData();
  } catch (err) {
    console.error("Error al conectar puerto serial:", err);
  }
});

async function readSerialData() {
  const textDecoder = new TextDecoderStream();
  port.readable.pipeTo(textDecoder.writable);
  reader = textDecoder.readable.getReader();

  let buffer = "";
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    if (value) {
      buffer += value;
      let lines = buffer.split('\n');
      buffer = lines.pop();
      lines.forEach(line => processSerialLine(line.trim()));
    }
  }
}

function processSerialLine(line) {
  if (inputSource.value !== 'serial') return;

  if (line.startsWith("BTN:")) {
    const parts = line.split(',');
    const btnState = parseInt(parts[0].split(':')[1]);
    const delState = parseInt(parts[1].split(':')[1]);
    const faderVal = parseInt(parts[2].split(':')[1]);

    letterSpacingTime = 400 + Math.round((faderVal / 1023) * 1600);
    spacingSlider.value = letterSpacingTime;
    spacingValue.textContent = `${letterSpacingTime} ms`;

    if (btnState === 1) handlePressStart();
    else handlePressEnd();

    if (delState === 1 && prevDeleteState === 0) deletePressStartTime = Date.now();
    if (delState === 0 && prevDeleteState === 1) {
      if (Date.now() - deletePressStartTime >= 1000) btnClear.click();
      else deleteLastLetter();
    }
    prevDeleteState = delState;
  }
}