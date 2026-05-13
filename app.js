// app.js

// --- ESTADO DE LA APLICACIÓN ---
const state = {
    currentView: 'view-main-menu',
    viewHistory: [],
    subject: null,
    testMode: null,
    testTopic: null, // Si es test por tema
    
    // Estado del test en curso
    questions: [],
    currentQuestionIndex: 0,
    answers: [], // Guarda el índice de la opción seleccionada
    timerInterval: null,
    timeSeconds: 0,
    
    // Ajustes
    settings: {
        theme: 'light',
        fontSize: 'font-normal'
    },
    
    // Estadísticas del usuario (se cargarán de localStorage)
    stats: {}
};

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    loadStats();
    setupEventListeners();
    applySettings();
    
    // Init Mermaid
    if (window.mermaid) {
        mermaid.initialize({ startOnLoad: false, theme: 'default' });
    }
    
    // Añadir contadores de preguntas al menú principal
    document.querySelectorAll('.subject-btn').forEach(btn => {
        const asig = btn.getAttribute('data-subject');
        if (asig) {
            const count = BANCO_PREGUNTAS.filter(q => q.asignatura === asig).length;
            const countSpan = document.createElement('small');
            countSpan.className = 'text-gray block mt-1';
            countSpan.textContent = count > 0 ? `${count} preguntas` : 'Próximamente';
            const contentDiv = btn.querySelector('.btn-content');
            if (contentDiv) {
                contentDiv.appendChild(countSpan);
            } else {
                btn.appendChild(countSpan);
            }
        }
    });
});

function loadSettings() {
    const saved = localStorage.getItem('enfertest_settings');
    if (saved) state.settings = JSON.parse(saved);
}

function saveSettings() {
    localStorage.setItem('enfertest_settings', JSON.stringify(state.settings));
    applySettings();
}

function loadStats() {
    const saved = localStorage.getItem('enfertest_stats');
    if (saved) {
        state.stats = JSON.parse(saved);
    }
    // Inicializar estructura si no existe para asignaturas nuevas
    Object.keys(CONFIG_ASIGNATURAS).forEach(asig => {
        if (!state.stats[asig]) {
            state.stats[asig] = {
                temasAprobados: [],
                simulacrosAprobados: 0,
                repasosImportantesAprobados: 0,
                conceptosAcertados: [],
                superateUnlocked: false
            };
        } else if (typeof state.stats[asig].superateUnlocked === 'undefined') {
            state.stats[asig].superateUnlocked = false;
        }
    });
}

function saveStats() {
    localStorage.setItem('enfertest_stats', JSON.stringify(state.stats));
}

// --- NAVEGACIÓN ---
function navigateTo(viewId, isBack = false) {
    if (state.currentView === viewId) return;
    
    // Ocultar vista actual
    document.getElementById(state.currentView).classList.add('hidden');
    
    // Gestionar historial
    if (isBack) {
        state.viewHistory.pop();
    } else {
        state.viewHistory.push(state.currentView);
    }
    
    // Mostrar nueva vista
    const newView = document.getElementById(viewId);
    newView.classList.remove('hidden');
    state.currentView = viewId;
    
    // Configurar Botón Volver
    const btnBack = document.getElementById('btn-back');
    if (viewId === 'view-main-menu') {
        btnBack.classList.add('hidden');
        document.querySelector('.header-title').textContent = 'EnferTest';
    } else {
        btnBack.classList.remove('hidden');
        if (state.subject && viewId !== 'view-test-ui') {
            document.querySelector('.header-title').textContent = CONFIG_ASIGNATURAS[state.subject].nombre;
        }
    }

    // Inicializaciones específicas
    if (viewId === 'view-achievements') renderAchievements();
    if (viewId === 'view-repository') renderRepository();
}

function goBack() {
    if (state.currentView === 'view-test-ui') {
        if(confirm("¿Seguro que quieres salir? Perderás el progreso de este test.")) {
            clearInterval(state.timerInterval);
            // Salimos del test al menú de selección, actuando como un "volver"
            navigateTo('view-test-selection', true);
        }
        return;
    }
    if (state.viewHistory.length > 0) {
        const prevView = state.viewHistory[state.viewHistory.length - 1];
        navigateTo(prevView, true);
    }
}

// --- EVENT LISTENERS BASE ---
function setupEventListeners() {
    document.getElementById('btn-back').addEventListener('click', goBack);
    
    // Ajustes
    document.getElementById('btn-settings').addEventListener('click', () => {
        document.getElementById('theme-toggle').checked = (state.settings.theme === 'dark');
        document.querySelectorAll('.font-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.size === state.settings.fontSize);
        });
        document.getElementById('settings-modal').classList.remove('hidden');
    });
    document.getElementById('btn-close-settings').addEventListener('click', () => {
        document.getElementById('settings-modal').classList.add('hidden');
    });
    
    document.getElementById('theme-toggle').addEventListener('change', (e) => {
        state.settings.theme = e.target.checked ? 'dark' : 'light';
        saveSettings();
    });
    document.querySelectorAll('.font-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            state.settings.fontSize = e.target.dataset.size;
            document.querySelectorAll('.font-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            saveSettings();
        });
    });

    // Menú Principal
    document.querySelectorAll('.subject-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            state.subject = e.currentTarget.dataset.subject;
            document.getElementById('subject-menu-title').textContent = CONFIG_ASIGNATURAS[state.subject].nombre;
            navigateTo('view-subject-menu');
        });
    });

    // Menú Asignatura
    document.getElementById('btn-goto-tests').addEventListener('click', () => navigateTo('view-test-selection'));
    document.getElementById('btn-goto-achievements').addEventListener('click', () => navigateTo('view-achievements'));
    document.getElementById('btn-goto-repository').addEventListener('click', () => navigateTo('view-repository'));
    document.getElementById('btn-change-subject').addEventListener('click', () => navigateTo('view-main-menu', true));

    // Selección de Test
    document.querySelectorAll('.test-mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            state.testMode = e.currentTarget.dataset.mode;
            if (state.testMode === 'tema') {
                showTopicSelector();
            } else if (state.testMode === 'simulacro') {
                document.getElementById('simulacro-selector').classList.remove('hidden');
            } else {
                startTest();
            }
        });
    });

    document.getElementById('btn-close-topic').addEventListener('click', () => {
        document.getElementById('topic-selector').classList.add('hidden');
    });

    document.getElementById('btn-close-simulacro').addEventListener('click', () => {
        document.getElementById('simulacro-selector').classList.add('hidden');
    });

    document.getElementById('btn-simulacro-mixto').addEventListener('click', () => {
        state.simulacroType = 'mixto';
        document.getElementById('simulacro-selector').classList.add('hidden');
        startTest();
    });

    document.getElementById('btn-simulacro-examen').addEventListener('click', () => {
        state.simulacroType = 'examen';
        document.getElementById('simulacro-selector').classList.add('hidden');
        startTest();
    });

    // UI de Test
    document.getElementById('btn-next-question').addEventListener('click', handleNextQuestion);
    document.getElementById('btn-finish-test').addEventListener('click', finishTest);
    document.getElementById('btn-results-continue').addEventListener('click', () => navigateTo('view-subject-menu'));
    
    document.getElementById('btn-view-mistakes').addEventListener('click', () => {
        const container = document.getElementById('mistakes-container');
        container.classList.toggle('hidden');
        const btn = document.getElementById('btn-view-mistakes');
        btn.textContent = container.classList.contains('hidden') ? 'Ver Fallos' : 'Ocultar Fallos';
    });

    // Repositorio
    document.getElementById('repo-search').addEventListener('input', renderRepositoryList);
    document.getElementById('repo-filter').addEventListener('change', renderRepositoryList);
    document.getElementById('repo-sort').addEventListener('change', renderRepositoryList);
    
    document.getElementById('btn-tab-lista').addEventListener('click', () => {
        document.getElementById('btn-tab-lista').classList.add('active');
        document.getElementById('btn-tab-mapa').classList.remove('active');
        document.getElementById('repo-lista').classList.remove('hidden');
        document.getElementById('repo-mapa').classList.add('hidden');
    });
    document.getElementById('btn-tab-mapa').addEventListener('click', () => {
        document.getElementById('btn-tab-mapa').classList.add('active');
        document.getElementById('btn-tab-lista').classList.remove('active');
        document.getElementById('repo-mapa').classList.remove('hidden');
        document.getElementById('repo-lista').classList.add('hidden');
        renderMermaidMap();
    });

    document.getElementById('btn-expand-map').addEventListener('click', () => {
        const mapCont = document.getElementById('map-container');
        mapCont.classList.toggle('fullscreen');
        if (mapCont.classList.contains('fullscreen')) {
            document.getElementById('btn-expand-map').textContent = "❌ Cerrar Pantalla Completa";
        } else {
            document.getElementById('btn-expand-map').textContent = "🔍 Ampliar Mapa / Pantalla Completa";
        }
    });

    // Logros Tabs
    document.querySelectorAll('#view-achievements .tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('#view-achievements .tab-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            renderAchievements(e.target.dataset.target.replace('logros-', ''));
        });
    });
}

function applySettings() {
    document.body.className = `theme-${state.settings.theme} ${state.settings.fontSize}`;
}

// --- LÓGICA DE TESTS ---

function showTopicSelector() {
    const topicList = document.getElementById('topic-list');
    topicList.innerHTML = '';
    const temas = CONFIG_ASIGNATURAS[state.subject].idTemas;
    
    temas.forEach(tema => {
        const btn = document.createElement('button');
        btn.className = 'card-btn';
        
        // Calcular número de preguntas para este tema
        const count = BANCO_PREGUNTAS.filter(q => q.asignatura === state.subject && String(q.tema) === String(tema)).length;
        
        btn.innerHTML = `Tema ${tema} <span class="text-sm text-gray ml-2">(${count} pregs)</span>`;
        
        if (state.stats[state.subject].temasAprobados.includes(tema)) {
            btn.innerHTML += ' <span class="text-green text-sm ml-2 font-bold">✓ Aprobado</span>';
        }
        
        btn.addEventListener('click', () => {
            state.testTopic = tema;
            document.getElementById('topic-selector').classList.add('hidden');
            startTest();
        });
        topicList.appendChild(btn);
    });
    
    document.getElementById('topic-selector').classList.remove('hidden');
}

function startTest() {
    let pool = BANCO_PREGUNTAS.filter(q => q.asignatura === state.subject);
    
    if (state.testMode === 'tema') {
        pool = pool.filter(q => String(q.tema) === String(state.testTopic));
        pool = shuffleArray(pool);
    } else if (state.testMode === 'importante') {
        pool = pool.filter(q => q.esExamen);
        pool = shuffleArray(pool);
        pool = pool.slice(0, 30);
    } else if (state.testMode === 'repaso') {
        pool = shuffleArray(pool);
        pool = pool.slice(0, 30);
    } else if (state.testMode === 'simulacro') {
        const numQ = CONFIG_ASIGNATURAS[state.subject].preguntasSimulacro;
        
        if (state.simulacroType === 'examen') {
            pool = pool.filter(q => q.esExamen);
            pool = shuffleArray(pool);
            pool = pool.slice(0, numQ);
        } else {
            // Simulacro mixto: Al menos 50% de preguntas de examen
            let examQs = pool.filter(q => q.esExamen);
            let normalQs = pool.filter(q => !q.esExamen);
            
            examQs = shuffleArray(examQs);
            normalQs = shuffleArray(normalQs);
            
            const minExam = Math.min(Math.floor(numQ / 2), examQs.length);
            let selectedExam = examQs.slice(0, minExam);
            
            let rest = normalQs.concat(examQs.slice(minExam));
            rest = shuffleArray(rest);
            
            const remainingNeeded = numQ - selectedExam.length;
            let selectedRest = rest.slice(0, remainingNeeded);
            
            pool = selectedExam.concat(selectedRest);
            pool = shuffleArray(pool); // Mezclarlas todas juntas
        }
    }

    if (pool.length === 0) {
        alert("No hay suficientes preguntas para este modo todavía en el banco de datos.");
        return;
    }

    // Clonar para no alterar el objeto original al desordenar las opciones
    pool = pool.map(q => {
        let qCopy = JSON.parse(JSON.stringify(q));
        let correctText = qCopy.opciones[qCopy.correcta];
        qCopy.opciones = shuffleArray(qCopy.opciones);
        qCopy.correcta = qCopy.opciones.indexOf(correctText);
        return qCopy;
    });

    state.questions = pool;
    state.currentQuestionIndex = 0;
    state.answers = new Array(pool.length).fill(null);
    state.timeSeconds = 0;
    
    document.getElementById('btn-next-question').classList.remove('hidden');
    document.getElementById('btn-finish-test').classList.add('hidden');
    
    navigateTo('view-test-ui');
    renderCurrentQuestion();
    startTimer();
}

function startTimer() {
    clearInterval(state.timerInterval);
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
        state.timeSeconds++;
        updateTimerDisplay();
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(state.timeSeconds / 60).toString().padStart(2, '0');
    const secs = (state.timeSeconds % 60).toString().padStart(2, '0');
    document.getElementById('test-timer').textContent = `${mins}:${secs}`;
}

function renderCurrentQuestion() {
    const q = state.questions[state.currentQuestionIndex];
    document.getElementById('test-counter').textContent = `${state.currentQuestionIndex + 1}/${state.questions.length}`;
    document.getElementById('question-text').textContent = q.pregunta;
    
    const tag = document.getElementById('question-tag');
    if (q.esExamen) tag.classList.remove('hidden');
    else tag.classList.add('hidden');
    
    const progress = ((state.currentQuestionIndex) / state.questions.length) * 100;
    document.getElementById('test-progress-bar').style.width = `${progress}%`;
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.opciones.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        
        if (state.answers[state.currentQuestionIndex] === index) {
            btn.classList.add('selected');
        }
        
        btn.addEventListener('click', () => selectOption(index, btn));
        optionsContainer.appendChild(btn);
    });
    
    const btnNext = document.getElementById('btn-next-question');
    btnNext.disabled = (state.answers[state.currentQuestionIndex] === null);
    
    if (state.currentQuestionIndex === state.questions.length - 1) {
        btnNext.textContent = "Finalizar";
    } else {
        btnNext.textContent = "Siguiente";
    }
}

function selectOption(index, btnElement) {
    state.answers[state.currentQuestionIndex] = index;
    const btns = document.getElementById('options-container').querySelectorAll('.option-btn');
    btns.forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
    document.getElementById('btn-next-question').disabled = false;
}

function handleNextQuestion() {
    if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
        renderCurrentQuestion();
    } else {
        finishTest();
    }
}

function finishTest() {
    clearInterval(state.timerInterval);
    
    let aciertos = 0;
    let fallos = 0;
    let blancos = 0;
    let conceptosAcertados = [];
    let mistakesHTML = '';
    
    state.questions.forEach((q, index) => {
        const ans = state.answers[index];
        if (ans === null) {
            blancos++;
            mistakesHTML += `
                <div class="card mb-2 p-2" style="border-left: 4px solid var(--text-muted)">
                    <p class="font-bold text-sm mb-1">${q.pregunta}</p>
                    <p class="text-sm text-gray mb-1">Tu respuesta: <span class="font-bold">En blanco</span></p>
                    <p class="text-sm text-green">Correcta: ${q.opciones[q.correcta]}</p>
                </div>
            `;
        } else if (ans === q.correcta) {
            aciertos++;
            if (q.conceptoMapa) conceptosAcertados.push(q.conceptoMapa);
        } else {
            fallos++;
            mistakesHTML += `
                <div class="card mb-2 p-2" style="border-left: 4px solid var(--danger-color)">
                    <p class="font-bold text-sm mb-1">${q.pregunta}</p>
                    <p class="text-sm text-red mb-1">Tu respuesta: <del>${q.opciones[ans]}</del></p>
                    <p class="text-sm text-green">Correcta: ${q.opciones[q.correcta]}</p>
                </div>
            `;
        }
    });

    document.getElementById('mistakes-container').innerHTML = mistakesHTML;
    
    // Guardar conceptos en mapa mental
    let nuevosConceptos = false;
    conceptosAcertados.forEach(c => {
        if (!state.stats[state.subject].conceptosAcertados.includes(c)) {
            state.stats[state.subject].conceptosAcertados.push(c);
            nuevosConceptos = true;
        }
    });

    const config = CONFIG_ASIGNATURAS[state.subject];
    let nota = 0;
    let isAprobado = false;
    let msg = "";
    let puntosPorPregunta = 10 / state.questions.length;
    
    if (state.testMode === 'simulacro' || state.testMode === 'repaso' || state.testMode === 'importante') {
        if (config.resta) {
            const aciertosNetos = aciertos - (fallos / 3);
            nota = Math.max(0, aciertosNetos * puntosPorPregunta);
        } else {
            nota = aciertos * puntosPorPregunta;
        }
        isAprobado = nota >= config.notaAprobado;
    } else if (state.testMode === 'tema') {
        nota = (aciertos / state.questions.length) * 10;
        isAprobado = (aciertos === state.questions.length); // Exigen 100% para aprobar tema
    }
    
    nota = Math.round(nota * 100) / 100; // 2 decimales
    
    // Mensajes de feedback
    const porcentaje = (aciertos / state.questions.length) * 100;
    if (porcentaje === 100) msg = "¡Perfecto! Un 100%. Estás dominando este temario.";
    else if (porcentaje >= 90) msg = "¡Casi perfecto! Sigue así, vas por un camino excelente.";
    else if (porcentaje >= 75) msg = "¡Muy bien! Tienes un buen nivel, solo faltan unos detalles.";
    else if (porcentaje >= 50) msg = "Buen intento. Has llegado a la mitad, un poco más de repaso y lo clavas.";
    else if (porcentaje >= 25) msg = "Aún queda camino, pero de los errores se aprende. ¡No te rindas!";
    else msg = "No pasa nada. Tómalo como un punto de partida. ¡A por todas en el próximo repaso!";

    if (state.testMode === 'simulacro') {
        msg = isAprobado ? `¡Enhorabuena! Has aprobado el simulacro (Nota corte: ${config.notaAprobado}).` : `No has llegado al corte de ${config.notaAprobado}. ¡A estudiar más duro!`;
    }

    // Render Resultados
    document.getElementById('result-score').textContent = nota;
    const circle = document.querySelector('.score-circle');
    circle.classList.toggle('fail', !isAprobado);
    document.getElementById('result-message').textContent = msg;
    document.getElementById('result-status').textContent = isAprobado ? "¡Prueba Superada!" : "Prueba Finalizada";
    
    document.getElementById('result-correct').textContent = aciertos;
    document.getElementById('result-incorrect').textContent = fallos;
    document.getElementById('result-blank').textContent = blancos;
    
    const mins = Math.floor(state.timeSeconds / 60).toString().padStart(2, '0');
    const secs = (state.timeSeconds % 60).toString().padStart(2, '0');
    document.getElementById('result-time').textContent = `${mins}:${secs}`;

    const btnViewMistakes = document.getElementById('btn-view-mistakes');
    const mistakesContainer = document.getElementById('mistakes-container');
    
    if (fallos > 0 || blancos > 0) {
        btnViewMistakes.classList.remove('hidden');
        btnViewMistakes.textContent = 'Ver Fallos';
        mistakesContainer.classList.add('hidden'); // Oculto por defecto hasta pulsar
    } else {
        btnViewMistakes.classList.add('hidden');
        mistakesContainer.classList.add('hidden');
    }

    processPostTestStats(isAprobado);
    
    // Evitar que el botón volver regrese al test
    state.viewHistory = state.viewHistory.filter(v => v !== 'view-test-ui');
    navigateTo('view-test-results');
}

function processPostTestStats(isAprobado) {
    const statsAsig = state.stats[state.subject];
    const keyTiempo = `${state.subject}_${state.testMode}_tiempos`;
    const keyRecord = `${state.subject}_${state.testMode}_record`;
    
    let isRecord = false;
    let oldRecord = state.stats[keyRecord] || Infinity;

    if (!state.stats[keyTiempo]) state.stats[keyTiempo] = [];
    
    state.stats[keyTiempo].push(state.timeSeconds);
    if (state.stats[keyTiempo].length > 5) state.stats[keyTiempo].shift(); 
    
    if (state.timeSeconds < oldRecord) {
        state.stats[keyRecord] = state.timeSeconds;
        isRecord = true;
    }

    // Media
    const arr = state.stats[keyTiempo];
    const avg = arr.reduce((a,b)=>a+b, 0) / arr.length;
    const avgMins = Math.floor(avg / 60).toString().padStart(2, '0');
    const avgSecs = Math.floor(avg % 60).toString().padStart(2, '0');
    document.getElementById('result-avg-time').textContent = `${avgMins}:${avgSecs}`;

    const recordMsg = document.getElementById('result-record-msg');
    if (isRecord && arr.length > 1) recordMsg.classList.remove('hidden');
    else recordMsg.classList.add('hidden');

    // Supérate!! (5 consecutivos bajando tiempo y aprobando simulacro)
    const keyConsecutivos = `${state.subject}_superate_count`;
    if (!state.stats[keyConsecutivos]) state.stats[keyConsecutivos] = 0;
    
    if (state.testMode === 'simulacro' && isAprobado) {
        if (arr.length >= 2) {
            const ultimo = arr[arr.length-1];
            const penultimo = arr[arr.length-2];
            if (ultimo < penultimo) {
                state.stats[keyConsecutivos]++;
            } else {
                state.stats[keyConsecutivos] = 1; 
            }
        } else {
            state.stats[keyConsecutivos] = 1;
        }
        
        if (state.stats[keyConsecutivos] >= 5) {
            state.stats[state.subject].superateUnlocked = true;
        }
    } else if (state.testMode === 'simulacro' && !isAprobado) {
        state.stats[keyConsecutivos] = 0; 
    }

    // Logros Base
    if (state.testMode === 'tema' && isAprobado) {
        if (!statsAsig.temasAprobados.includes(state.testTopic)) {
            statsAsig.temasAprobados.push(state.testTopic);
        }
    } else if (state.testMode === 'simulacro' && isAprobado) {
        statsAsig.simulacrosAprobados++;
    } else if (state.testMode === 'importante' && isAprobado) {
        statsAsig.repasosImportantesAprobados++;
    }
    
    saveStats();
}

// --- LOGROS ---
function checkMedals(subject) {
    const s = state.stats[subject];
    const totalTemas = CONFIG_ASIGNATURAS[subject].idTemas.length;
    const percTemas = (s.temasAprobados.length / totalTemas) * 100;
    
    let mTemas = 'locked';
    if (percTemas >= 100) mTemas = 'oro';
    else if (percTemas >= 70) mTemas = 'plata';
    else if (percTemas >= 40) mTemas = 'bronce';
    
    let mSim = 'locked';
    if (s.simulacrosAprobados >= 15) mSim = 'oro';
    else if (s.simulacrosAprobados >= 10) mSim = 'plata';
    else if (s.simulacrosAprobados >= 5) mSim = 'bronce';

    let mRep = 'locked';
    if (s.repasosImportantesAprobados >= 15) mRep = 'oro';
    else if (s.repasosImportantesAprobados >= 10) mRep = 'plata';
    else if (s.repasosImportantesAprobados >= 5) mRep = 'bronce';

    return { temas: mTemas, simulacros: mSim, repasos: mRep, percTemas };
}

function renderAchievements(targetSubject = state.subject || 'paliativos') {
    document.querySelectorAll('#view-achievements .tab-btn').forEach(b => {
        if (b.dataset.target === `logros-${targetSubject}`) b.classList.add('active');
        else b.classList.remove('active');
    });

    const container = document.getElementById('achievements-container');
    const medals = checkMedals(targetSubject);
    const s = state.stats[targetSubject];
    const totalTemas = CONFIG_ASIGNATURAS[targetSubject].idTemas.length;

    // Helper: genera el icono de medalla según el nivel
    function medalIcon(level) {
        const icons = { locked: '🔒', bronce: '🥉', plata: '🥈', oro: '🥇' };
        return icons[level] || '🔒';
    }

    // Imágenes personalizadas por asignatura
    const LOGRO_IMAGES = {
        paliativos: {
            temas: 'pal_logro_temas.png',
            simulacros: 'pal_logro_simulacros.png',
            repasos: 'pal_logro_repasos.png',
            platino: 'pal_logro_platino.png',
            superate: 'pal_logro_superate.png'
        },
        salud_mental: {
            temas: 'logro_temas.png',
            simulacros: 'logro_simulacros.png',
            repasos: 'logro_repasos.png',
            platino: 'logro_platino.png',
            superate: 'logro_superate.png'
        },
        clinica_ii: {
            temas: 'cli_logro_temas.png',
            simulacros: 'cli_logro_simulacros.png',
            repasos: 'cli_logro_repasos.png',
            platino: 'cli_logro_platino.png',
            superate: 'cli_logro_superate.png'
        },
        comunitaria: {
            temas: 'com_logro_temas.png',
            simulacros: 'com_logro_simulacros.png',
            repasos: 'com_logro_repasos.png',
            platino: 'com_logro_platino.png',
            superate: 'com_logro_superate.png'
        }
    };

    // Helper: genera los indicadores de nivel (3 puntos coloreados)
    function tierDots(current, thresholds, labels) {
        return thresholds.map((t, i) => {
            const colors = ['#cd7f32', '#c0c0c0', '#ffd700']; // bronce, plata, oro
            const achieved = current >= t;
            return `<span class="tier-dot" style="background:${achieved ? colors[i] : 'var(--border-color)'}" title="${labels[i]}: ${t}"></span>`;
        }).join('');
    }

    // Helper: genera una fila de logro completa
    function achievementRow(imageSrc, emojiIcon, title, current, max, tierThresholds, tierLabels) {
        const percent = Math.min((current / max) * 100, 100);
        const progressColor = percent >= 100 ? '#ffd700' : percent >= 70 ? '#c0c0c0' : percent >= 40 ? '#cd7f32' : 'var(--primary-color)';
        
        const iconHTML = imageSrc 
            ? `<img src="${imageSrc}" class="medal-img" alt="${title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
               <span class="fallback-icon" style="display:none">${emojiIcon}</span>`
            : `<span class="fallback-icon">${emojiIcon}</span>`;

        return `
            <div class="achievement-row">
                <div class="medal-img-container">
                    ${iconHTML}
                </div>
                <div class="achievement-info">
                    <strong>${title}</strong>
                    <div class="tier-indicators mt-1">
                        ${tierDots(current, tierThresholds, tierLabels)}
                    </div>
                    <div class="progress-mini-bar mt-1">
                        <div class="progress-mini-fill" style="width: ${percent}%; background-color: ${progressColor}"></div>
                    </div>
                    <p class="text-sm mt-1" style="color: var(--text-muted)">${current} de ${max}</p>
                </div>
            </div>
        `;
    }

    const imgs = LOGRO_IMAGES[targetSubject] || {};

    container.innerHTML = 
        achievementRow(
            imgs.temas || null,
            medalIcon(medals.temas),
            'Temas Aprobados',
            s.temasAprobados.length,
            totalTemas,
            [Math.ceil(totalTemas * 0.4), Math.ceil(totalTemas * 0.7), totalTemas],
            ['Bronce (40%)', 'Plata (70%)', 'Oro (100%)']
        ) +
        achievementRow(
            imgs.simulacros || null,
            medalIcon(medals.simulacros),
            'Simulacros Aprobados',
            s.simulacrosAprobados,
            15,
            [5, 10, 15],
            ['Bronce (5)', 'Plata (10)', 'Oro (15)']
        ) +
        achievementRow(
            imgs.repasos || null,
            medalIcon(medals.repasos),
            'Repasos Imp. Aprobados',
            s.repasosImportantesAprobados,
            15,
            [5, 10, 15],
            ['Bronce (5)', 'Plata (10)', 'Oro (15)']
        );


    // Check Platino (Por asignatura)
    let allGolds = (medals.temas === 'oro' && medals.simulacros === 'oro' && medals.repasos === 'oro');

    const platino = document.getElementById('trophy-platinum');
    if (imgs.platino) {
        platino.querySelector('.trophy-img').src = imgs.platino;
    }
    if (allGolds) platino.classList.remove('locked');
    else platino.classList.add('locked');

    // Check Supérate (Por asignatura)
    const superate = document.getElementById('trophy-superate');
    if (imgs.superate) {
        superate.querySelector('.trophy-img').src = imgs.superate;
    }
    if (s.superateUnlocked) superate.classList.remove('locked');
    else superate.classList.add('locked');
}

// --- REPOSITORIO ---
function renderRepository() {
    const select = document.getElementById('repo-filter');
    Array.from(select.options).forEach(opt => {
        if (opt.value.startsWith('tema_')) select.remove(opt.index);
    });
    
    if (state.subject) {
        CONFIG_ASIGNATURAS[state.subject].idTemas.forEach(t => {
            const count = BANCO_PREGUNTAS.filter(q => q.asignatura === state.subject && String(q.tema) === String(t)).length;
            const opt = document.createElement('option');
            opt.value = `tema_${t}`;
            opt.textContent = `Tema ${t} (${count} pregs)`;
            select.appendChild(opt);
        });
    }

    renderRepositoryList();
}

function renderRepositoryList() {
    const list = document.getElementById('questions-list');
    list.innerHTML = '';
    
    let pool = BANCO_PREGUNTAS.filter(q => q.asignatura === state.subject);
    
    const search = document.getElementById('repo-search').value.toLowerCase();
    if (search) {
        pool = pool.filter(q => q.pregunta.toLowerCase().includes(search) || q.conceptoMapa?.toLowerCase().includes(search));
    }

    const filter = document.getElementById('repo-filter').value;
    if (filter === 'examen') {
        pool = pool.filter(q => q.esExamen);
    } else if (filter.startsWith('tema_')) {
        const tVal = filter.substring(5); // todo lo que va después de 'tema_'
        pool = pool.filter(q => String(q.tema) === tVal);
    }

    const sort = document.getElementById('repo-sort').value;
    if (sort === 'tema') {
        pool.sort((a,b) => a.tema - b.tema);
    } else if (sort === 'examen') {
        pool.sort((a,b) => {
            if (a.tema === b.tema) return (a.esExamen === b.esExamen) ? 0 : a.esExamen ? -1 : 1;
            return a.tema - b.tema;
        });
    } else if (sort === 'alfabetico') {
        pool.sort((a,b) => a.pregunta.localeCompare(b.pregunta));
    }

    pool.forEach(q => {
        const card = document.createElement('div');
        card.className = `repo-question-card ${q.esExamen ? 'examen' : ''} mb-2`;
        card.innerHTML = `
            <div class="repo-q-meta">Tema ${q.tema} ${q.esExamen ? '<span class="text-red font-bold ml-2">¡EXAMEN!</span>' : ''}</div>
            <div class="repo-q-text">${q.pregunta}</div>
            <div class="repo-q-answer">✓ ${q.opciones[q.correcta]}</div>
        `;
        list.appendChild(card);
    });
}

function renderMermaidMap() {
    const container = document.getElementById('mermaid-container');
    if (!MAPAS_MENTALES[state.subject]) {
        container.innerHTML = '<p class="text-center text-gray p-2">No hay mapa mental disponible para esta asignatura.</p>';
        return;
    }

    let graphStr = MAPAS_MENTALES[state.subject];
    
    const acertados = state.stats[state.subject].conceptosAcertados || [];
    const isMindmap = graphStr.trim().startsWith('mindmap');
    
    if (acertados.length > 0 && !isMindmap) {
        graphStr += '\n';
        acertados.forEach((c) => {
            graphStr += `class ${c} acertado;\n`;
        });
        graphStr += `classDef acertado fill:#c8e6c9,stroke:#2e7d32,stroke-width:2px,color:#000;\n`;
    } else if (acertados.length > 0 && isMindmap) {
        acertados.forEach((c) => {
            graphStr = graphStr.replace(new RegExp('(' + c + '(?:\\([^)]*\\)|\\[[^\\]]*\\])?)', 'g'), '$1:::acertado');
        });
    }

    container.innerHTML = `<div class="mermaid">${graphStr}</div>`;
    
    if (window.mermaid) {
        try {
            mermaid.run({
                nodes: document.querySelectorAll('.mermaid'),
            }).then(() => {
                // Expandir viewBox del SVG para que no se corten los nodos exteriores
                const svg = container.querySelector('svg');
                if (svg) {
                    const vb = svg.getAttribute('viewBox');
                    if (vb) {
                        const parts = vb.split(' ').map(Number);
                        const padding = 80;
                        const extraRight = 120; // Más espacio a la derecha para centrar visualmente
                        const newVB = `${parts[0] - padding} ${parts[1] - padding} ${parts[2] + padding + extraRight} ${parts[3] + padding * 2}`;
                        svg.setAttribute('viewBox', newVB);
                    }
                    // Quitar restricciones de tamaño fijo que Mermaid inyecta
                    svg.style.maxWidth = 'none';
                    svg.style.width = '100%';
                    svg.style.height = 'auto';
                }
            });
        } catch(e) {
            console.error("Error renderizando Mermaid", e);
        }
    }
}

// --- UTILS ---
function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}
