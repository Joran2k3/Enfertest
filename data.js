// data.js - Banco de preguntas y configuración de EnferTest

const CONFIG_ASIGNATURAS = {
  paliativos: {
    nombre: "Paliativos",
    preguntasSimulacro: 60,
    notaAprobado: 5,
    resta: true, // 3 mal = 1 bien
    idTemas: [1, 2, 3, 4, 5] // Modificar según los temas reales que tenga la asignatura
  },
  salud_mental: {
    nombre: "Salud mental",
    preguntasSimulacro: 100,
    notaAprobado: 7,
    resta: false,
    idTemas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 'Extra_1', 'Extra_2', 'Extra_3', 'Extra_Final']
  },
  salud_genero: {
    nombre: "Salud género y retos sociales",
    preguntasSimulacro: 30,
    notaAprobado: 5,
    resta: true,
    idTemas: [1, 2, 3, 4]
  },
  comunitaria: {
    nombre: "Familiar y comunitaria",
    preguntasSimulacro: 30,
    notaAprobado: 5,
    resta: true,
    idTemas: [1, 2, 3, 4, 5, 6]
  },
  clinica_ii: {
    nombre: "Clínica II",
    preguntasSimulacro: 60,
    notaAprobado: 5,
    resta: true,
    idTemas: [1, 2, 3, 4, 5, 6]
  }
};

// --- FORMATO DE PREGUNTA ---
/*
{
    asignatura: "ID_ASIGNATURA", // "paliativos", "salud_mental", "salud_genero", "comunitaria", "clinica_ii"
    tema: NUMERO_TEMA, // ej: 1, 2, 3...
    pregunta: "Texto de la pregunta",
    opciones: ["Opción A", "Opción B", "Opción C", "Opción D"],
    correcta: 0, // Índice de la opción correcta (0 para la primera, 1 para la segunda, 2 para la tercera, 3 para la cuarta)
    esExamen: true, // true si es pregunta de examen anterior o de clase, false si es normal
    conceptoMapa: "ID_CONCEPTO" // (Opcional) Identificador en el mapa de Mermaid para colorearlo si se acierta
}
*/

const BANCO_PREGUNTAS = [
  // Aquí es donde irás añadiendo todas tus preguntas. He dejado un par de ejemplos:

  // EJEMPLO PALIATIVOS
  {
    asignatura: "paliativos",
    tema: 1,
    pregunta: "¿Qué es el dolor irruptivo?",
    opciones: [
      "Dolor crónico constante sin picos de exacerbación.",
      "Exacerbación transitoria del dolor en pacientes con dolor basal estable.",
      "Dolor de origen puramente psicológico.",
      "Dolor que solo ocurre al despertar por la mañana."
    ],
    correcta: 1, // La opción correcta es la segunda (índice 1)
    esExamen: true, // Le pondrá la etiqueta roja "Examen!!"
    conceptoMapa: "dolor_irruptivo"
  },

  // EJEMPLO SALUD MENTAL
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "¿Cuál es un síntoma positivo de la esquizofrenia?",
    opciones: [
      "Apatía",
      "Alogia",
      "Alucinaciones",
      "Anhedonia"
    ],
    correcta: 2, // La opción correcta es la tercera (índice 2)
    esExamen: false,
    conceptoMapa: "sintomas_esquizofrenia"
  },
  // --- PREGUNTAS EXAMEN OFICIAL ---
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "1. Según la teoría atributiva de Weiner, la atribución que hacemos de nuestros éxitos o fracasos actuará en la emoción de las motivaciones posteriores. En base a esta teoría, señala la correcta:",
    opciones: [
      "La atribución interna, estable y controlable favorecerá la motivación y autoestima",
      "La atribución externa e inestable es la principal generadora de motivación a largo plazo",
      "Las expectativas de éxito son independientes del locus de control",
      "La motivación es un proceso meramente inconsciente y no regulado por la emoción"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "2. Según la teoría de la atribución de Kelley, cuando tienes alto consenso, alta distintividad y alta consistencia, la responsabilidad recae en:",
    opciones: ["La persona", "El estímulo", "El ambiente", "Ninguna es correcta"],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "3. En una situación de emergencia en referencia a la relación coste/beneficio (teoría de la ayuda), ¿en qué caso el individuo NO actuará?",
    opciones: [
      "Si el coste de ayudar es alto y el coste de no ayudar es bajo",
      "Si el coste de ayudar es bajo y el coste de no ayudar es alto",
      "Si los costes de ayudar son bajos y los costes de no ayudar son bajos",
      "Si hay una baja difusión de la responsabilidad en el ambiente"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "4. ¿Qué característica es propia de la fase de identificación en el modelo de H. Peplau?",
    opciones: [
      "Entrevista Estructurada",
      "Priorización de problemas",
      "Demuestra aceptación incondicional",
      "Reevaluación y nuevas prioridades"
    ],
    correcta: 2,
    esExamen: true,
    conceptoMapa: "relacion_terapeutica"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "5. Según la teoría holística de la salud, ¿qué afirmación NO es correcta sobre el ser humano?",
    opciones: [
      "El ser humano no puede asumir la responsabilidad de velar por su salud y debe cederla totalmente",
      "La salud se entiende como un estado de equilibrio u homeostasis",
      "La fuerza vital se relaciona profundamente con la motivación",
      "El ser humano tiende por naturaleza a conservar su plena vitalidad e integridad"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "6. Neurotransmisor que está implicado en la regulación del sueño-vigilia y en relación con el TDAH y los trastornos motores:",
    opciones: ["Dopamina", "Noradrenalina", "Serotonina", "Glutamato"],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "7. ¿Qué tipo de síntomas en la esquizofrenia se asocian a las alteraciones del proceso del pensamiento y la atención?",
    opciones: [
      "Síntomas positivos",
      "Síntomas psicóticos",
      "Síntomas cognitivos",
      "Síntomas negativos"
    ],
    correcta: 2,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "8. En relación a los síntomas negativos de Andreasen en la esquizofrenia, el aplanamiento afectivo más frecuente es:",
    opciones: [
      "Disminución de los movimientos espontáneos",
      "Invariabilidad de la expresión facial",
      "Contacto escaso con la mirada",
      "Escasez de gestos expresivos"
    ],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "9. Para intuir si un paciente padece esquizofrenia de forma observacional se emplea la regla de las 3C. Esta se compone de:",
    opciones: [
      "Camina rápido y cabizbajo; consume bebidas estimulantes; hábito tabáquico",
      "Camina lento; consume alcohol; control ineficaz de impulsos",
      "Corretea constantemente; come compulsivamente; consumo de cannabis",
      "Canta en voz alta; consume sustancias depresoras; clinofilia"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "10. Los síntomas en la esquizofrenia que implican más aislamiento social son:",
    opciones: [
      "Síntomas negativos",
      "Síntomas cognitivos",
      "Todos incapacitan en lo social por igual",
      "Síntomas positivos"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "11. Al comunicarse con pacientes con esquizofrenia, ¿cuál de los siguientes problemas es más difícil para la enfermera?",
    opciones: [
      "Determinar qué significado tienen las palabras y el comportamiento simbólico para ellos",
      "Todas son prioritarias y de igual dificultad",
      "Expresarse en términos en que la entiendan",
      "Aceptar que necesitan valerse de comportamiento infantil"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "12. Para establecer una correcta diferencia entre un delirio (patológico) y una creencia normal debemos considerar especialmente:",
    opciones: [
      "La cultura del individuo",
      "La gravedad del delirio",
      "Las relaciones familiares",
      "La alteración en la sensopercepción"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "15. En cuanto al tratamiento farmacológico en la depresión, si se decide el uso de Litio, es fundamental en el personal de enfermería:",
    opciones: [
      "Valorar los efectos secundarios que puede desencadenar dicho fármaco",
      "Establecer un protocolo o pautas de seguimiento de los niveles de Litio en sangre mediante controles analíticos",
      "Actuar ante los síntomas psicóticos agudos de la depresión",
      "Las respuestas A y B son correctas"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "18. La variable somática de la ansiedad (aquella que se exterioriza de forma física) se denomina:",
    opciones: ["Afecto", "Miedo", "Angustia", "Estado emocional"],
    correcta: 2,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "19. Palmero postula que la conducta es motivada y las emociones reflejan la relación entre los motivos y el éxito para obtener la meta. Esta teoría se relaciona especialmente con:",
    opciones: [
      "La génesis de los trastornos del estado de ánimo (depresión)",
      "La génesis del trastorno de ansiedad",
      "La génesis de los trastornos de estrés y obsesivo-compulsivos",
      "Todas las anteriores son verdaderas"
    ],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "20. La persona que reacciona a un estímulo inesperado con percepción distorsionada de la realidad, incapacidad de comunicarse y alteraciones como vómitos o agitación, se encuentra en un estado de:",
    opciones: ["Ansiedad grave", "Ansiedad moderada", "Pánico", "Ansiedad muy grave"],
    correcta: 2,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "21. En relación al TOC (Trastorno Obsesivo Compulsivo), señale la respuesta CORRECTA:",
    opciones: [
      "Las compulsiones son ideas no deseadas que causan angustia",
      "Es una enfermedad generalmente de curso agudo y autolimitado",
      "Las obsesiones son actos de carácter repetitivo en respuesta a la angustia",
      "Ninguna de las opciones anteriores es correcta"
    ],
    correcta: 3, // Las obsesiones son ideas, las compulsiones actos.
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "22. Las compulsiones obsesivas siempre se manifiestan en forma de:",
    opciones: ["Ideas irracionales", "Dudas constantes", "Impulsos abstractos", "Comportamientos o actos"],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "23. La introspección o 'insight' es:",
    opciones: [
      "La capacidad que tiene el individuo de reconocer la enfermedad en su comportamiento",
      "Un concepto exclusivo del enfoque puramente mecanicista",
      "Se relaciona únicamente con el conductismo de Skinner",
      "La negación absoluta de los síntomas psicológicos"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "29. Por regla general, en el trastorno de síntomas somáticos (señale la FALSA):",
    opciones: [
      "Se interpretan las sensaciones corporales normales como signos de enfermedad física",
      "Hay preocupación y angustia recurrente",
      "Existe una búsqueda repetitiva de atención médica y pruebas innecesarias",
      "Se interpretan sensaciones corporales extrañas y alucinaciones táctiles como signos de enfermedad"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "30. Se define el trastorno por atracones como aquel en el que:",
    opciones: [
      "Se produce una ingesta de alimentos desproporcionada en un tiempo < 4 horas",
      "Se produce una ingesta de alimentos desproporcionada en un tiempo < 3 horas",
      "Se produce una ingesta de alimentos desproporcionada en un tiempo < 1 hora",
      "Se produce una ingesta de alimentos desproporcionada en un tiempo < 2 horas"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "tca"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "31. Se conoce la enuresis nocturna como:",
    opciones: [
      "Enuresis no monosintomática",
      "Un subtipo de la emisión pospuesta",
      "Enuresis monosintomática",
      "Un subtipo de incontinencia urgente"
    ],
    correcta: 2,
    esExamen: true,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "32. ¿Cuál de los siguientes trastornos de la personalidad pertenece al Grupo B?",
    opciones: ["Esquizoide", "Esquizotípica", "Narcisista", "Paranoide"],
    correcta: 2,
    esExamen: true,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "34. Según la clasificación de los trastornos de la personalidad, ¿en qué grupo se incluyen los individuos histriónicos, narcisistas, límites y antisociales?",
    opciones: ["Grupo A", "Grupo B", "Grupo C", "Grupo D"],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "36. Suspendes una materia fácil y atribuyes la culpa a tu propia falta de esfuerzo. ¿Con qué se relaciona este 'locus de causalidad'?",
    opciones: [
      "Causalidad interna o disposicional de la persona",
      "Causa situacional incontrolable",
      "Locus de control puramente ambiental",
      "Ninguna es correcta"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "37. ¿Qué área del sistema límbico afecta primordialmente al comportamiento agresivo y a la memoria del miedo?",
    opciones: ["Hipocampo", "Amígdala", "Tálamo", "Hipotálamo"],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "39. ¿Qué urgencia vital tiene que tener muy en cuenta la enfermera cuando la esquizofrenia se trata con fármacos antipsicóticos?",
    opciones: [
      "Síndrome neuroléptico maligno",
      "Síndrome extrapiramidal de instauración tardía",
      "Epilepsia mioclónica",
      "Adicción conductual"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "42. Durante la hospitalización del paciente con Trastorno Bipolar, la enfermería debe:",
    opciones: [
      "Valorar el riesgo de suicidio de forma constante",
      "Realizar el seguimiento y control del litio prescrito",
      "Verificar la adherencia farmacológica y favorecer la conciencia de enfermedad",
      "Todas las respuestas anteriores son correctas"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "43. ¿Qué intervención de enfermería será la prioritaria ante un paciente con un intento suicida reciente?",
    opciones: [
      "Asegurar que los pensamientos suicidas desaparecerán mágicamente",
      "Plantear actividades muy complejas para mantenerlo ocupado y agotarlo",
      "Animar a expresar los logros conseguidos de forma superficial",
      "Estimular la expresión controlada de sus emociones y proporcionar un entorno seguro"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "45. La variable somática o la exteriorización fisiológica de la ansiedad se denomina:",
    opciones: ["Miedo", "Angustia", "Crisis de ansiedad", "Estrés agudo"],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "47. Para valorar el riesgo suicida en Urgencias, principalmente debemos mirar:",
    opciones: [
      "La letalidad del método y urgencia del impulso",
      "La historia clínica y los antecedentes familiares",
      "El consumo de sustancias o tóxicos",
      "Todas las respuestas son correctas"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "48. El trastorno de Masoquismo sexual se define como:",
    opciones: [
      "El uso repetido a objetos inanimados para excitarse",
      "La atracción sexual por prepúberes",
      "La tendencia que provoca excitación sexual intensa al someter a sufrimiento a terceros",
      "La tendencia sexual que provoca excitación intensa al ser humillados, atados o sometidos a sufrimiento"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "51. ¿Qué es la encopresis?",
    opciones: [
      "La defecación reiterada, voluntaria o involuntaria, en lugares inadecuados",
      "La emisión repetida de orina en la ropa o en la cama",
      "El deseo de ingerir sustancias no alimenticias de manera persistente",
      "El rechazo social asociado a la falta de control de impulsos"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "52. El trastorno caracterizado por el deseo de ingerir sustancias no alimenticias, como la pintura o tierra, se denomina:",
    opciones: ["Rumiación", "Pica", "Potomanía", "Polifagia"],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "53. En el trastorno facticio:",
    opciones: [
      "El paciente fabrica intencionadamente síntomas físicos para simular una enfermedad, iniciándolos a voluntad",
      "El paciente sufre síntomas somáticos reales explicados por una base orgánica",
      "Se caracteriza exclusivamente por la amnesia de episodios traumáticos",
      "El paciente cree firmemente que las partes de su cuerpo son defectuosas"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "55. El trastorno en el que se aprecia amnesia, incapacidad para recordar de forma localizada o generalizada (incluso autobiográfica) y en la que a veces se presentan flashbacks se denomina:",
    opciones: [
      "Esquizofrenia crónica",
      "Amnesia disociativa",
      "Trastorno bipolar tipo I",
      "Fuga disociativa"
    ],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "57. ¿Cuáles son los síntomas característicos en las crisis de ansiedad? (Marca la INCORRECTA)",
    opciones: [
      "Suelen ser inespecíficos",
      "Suelen ser muy específicos y siempre iguales",
      "Son vagales-vegetativos (taquicardia, sudoración)",
      "Son similares a los de un infarto cardíaco y suelen confundirse"
    ],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "58. Los síntomas intelectuales en los trastornos de ansiedad son:",
    opciones: [
      "Sensación de grandeza y autoestima patológicamente elevada",
      "Anticipación constante del displacer y pérdida de memoria reciente",
      "Alucinaciones auditivas, delirios y pensamiento desorganizado",
      "Sensación crónica de tristeza clínica profunda"
    ],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "60. La agorafobia es ______ mientras que la ansiedad social es ______",
    opciones: [
      "Miedo a ser evaluado en situaciones sociales / Miedo a espacios abiertos y transporte público",
      "Miedo a espacios abiertos y multitudes / Miedo a situaciones sociales en las que el individuo está sometido a examen",
      "Miedo al confinamiento en espacios reducidos / Miedo a los animales",
      "Ambos conceptos representan el mismo fenómeno psicopatológico"
    ],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "61. El principal efecto colateral peligroso de los antidepresivos tricíclicos, como la amitriptilina, es:",
    opciones: ["La hepatotoxicidad", "La cardiotoxicidad", "La nefrotoxicidad", "La ototoxicidad"],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "66. La diferencia entre el Trastorno Bipolar I y Bipolar II se caracteriza especialmente por:",
    opciones: [
      "En el Bipolar I existen manías sin hipomanía y en el Bipolar II existe hipomanía pero nunca depresión",
      "En el Bipolar I la fase predominante es la depresión mayor y en el Bipolar II es la esquizofrenia",
      "En el Bipolar I existen episodios maníacos con/sin depresión, y en el Bipolar II existe hipomanía con episodios depresivos pero NUNCA manía",
      "No existe diferencia clínica, únicamente cambia la duración del trastorno"
    ],
    correcta: 2,
    esExamen: true,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "67. En relación a los síntomas negativos de Andreasen en la esquizofrenia, las alteraciones en la atención se manifiestan más frecuentemente a través de:",
    opciones: [
      "Asociabilidad extrema",
      "Anergia física",
      "Aumento de la latencia de respuesta",
      "Distraibilidad social"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "68. En la fase residual de la esquizofrenia, ¿qué síntomas predominan y tienden a permanecer?",
    opciones: ["Síntomas negativos", "Síntomas positivos activos", "Ataques de pánico agudo", "Alucinaciones visuales floridas"],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "69. El reto en cuanto al tratamiento y los cuidados en enfermería de la esquizofrenia se fundamenta en la rehabilitación enfocada a la fase:",
    opciones: [
      "Fase activa con brotes psicóticos incontrolables",
      "Fase premórbida",
      "Fase residual, debido al impacto crónico de los síntomas negativos en la funcionalidad",
      "Fase prodrómica"
    ],
    correcta: 2,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "70. ¿El consumo de cuál de las siguientes sustancias NO da lugar habitualmente a un síndrome de abstinencia físico documentado?",
    opciones: ["El alcohol", "Los alucinógenos", "La cafeína", "El cannabis"],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "71. La adicción conductual (adicciones psicológicas sin sustancia) suele presentar:",
    opciones: [
      "Automatización severa del comportamiento de riesgo",
      "Descuido de rutinas diarias y/o inversión del ritmo circadiano",
      "Malos hábitos de salud, como saltarse comidas para seguir con la conducta",
      "Todas las respuestas anteriores son correctas"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "72. ¿Cuál de los siguientes tipos de delirio NO forma parte de la clasificación estándar típica del DSM referida comúnmente en la clínica?",
    opciones: [
      "Delirios persecutorios",
      "Delirios erotomaníacos",
      "Delirio de abducción de un extraterrestre (inverosímil pero no categoría estándar principal)",
      "Delirios somáticos"
    ],
    correcta: 2,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "73. En relación al síndrome neuroléptico maligno, señale la afirmación FALSA:",
    opciones: [
      "Puede causar el coma e incluso la muerte del paciente",
      "Es un efecto secundario asociado principalmente al uso de antipsicóticos",
      "Es un efecto secundario exclusivo al uso de antidepresivos tricíclicos",
      "Provoca inestabilidad autónoma severa"
    ],
    correcta: 2,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "75. Un niño en clase no habla en absoluto. Sus padres confirman que en casa sí lo hace con total normalidad, pero el niño no puede controlar la incapacidad de hablar en el entorno escolar. Se trata de:",
    opciones: [
      "Mutismo selectivo",
      "Trastorno del espectro autista severo",
      "Discapacidad intelectual profunda",
      "Trastorno explosivo intermitente"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "77. ¿Qué factor cognitivo está más subyacentemente relacionado y afectado en los trastornos obsesivos-compulsivos (TOC)?",
    opciones: [
      "La necesidad de Control y el perfeccionismo",
      "La creación de ilusiones y delirios estructurados",
      "El descontrol de los impulsos agresivos",
      "El deterioro cognitivo y la pérdida de la memoria a largo plazo"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "82. Según Cardeña (1994), las categorías de disociación se dividen en grandes grupos que incluyen:",
    opciones: [
      "Amnesia disociativa puramente biológica",
      "Disociación por alteración de la conciencia, desconexión de la persona consigo misma",
      "Disociación como 'mecanismo de defensa' o huida",
      "Las respuestas B y C son correctas"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "83. Analiza de forma ecléctica el proceso de salud, tiene un sentido holístico, proporciona cuidados para la promoción y prioriza problemas del paciente. ¿A qué modelo nos referimos?",
    opciones: [
      "Modelo Biomédico tradicional",
      "Modelo de Orem de autocuidado físico exclusivo",
      "Modelo de Peplau enfocado sólo en relaciones de dependencia",
      "Modelo Enfermero y teoría holística de los cuidados"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "conceptos_basicos"
  },
  // --- 1º SIMULACRO ---
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "1. En relación con la esquizofrenia, los síntomas que provocan más deterioro social son:",
    opciones: [
      "Síntomas negativos",
      "Síntomas positivos",
      "Todas son falsas",
      "Síntomas cognitivos",
      "Delirios"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "2. En relación a los síntomas negativos de Andreasen en esquizofrenia, la alogia se manifiesta más frecuentemente a través de:",
    opciones: [
      "Aumento de la latencia de respuesta",
      "Pobreza del lenguaje",
      "Bloqueo",
      "Pobreza en el contenido del lenguaje",
      "Ausencia de respuesta afectiva"
    ],
    correcta: 1, // La alogia es el empobrecimiento del pensamiento y la cognición, manifestado a través del lenguaje
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "3. En relación a los síntomas negativos de Andreasen en esquizofrenia, la abulia-apatía se manifiesta más frecuentemente a través de:",
    opciones: [
      "Asociabilidad",
      "Higiene y aseo insuficientes",
      "Anergia física",
      "Bloqueos",
      "Falta de persistencia en el trabajo o la escuela"
    ],
    correcta: 4, // Abulia es la falta de motivación para realizar metas y objetivos sostenidos en el tiempo
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "4. En relación a los síntomas negativos de Andreasen en esquizofrenia, la anhedonia-asociabilidad se manifiesta más frecuentemente a través de:",
    opciones: [
      "Incoherencia al hablar en público",
      "Pocas relaciones con amigos y compañeros",
      "Poca actividad e interés sexual",
      "Escasez de actividades e intereses recreativos",
      "Alteraciones en la intimidad y en la proximidad"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "5. En relación a los síntomas negativos de Andreasen en esquizofrenia, las alteraciones en la atención se manifiestan más frecuentemente a través de:",
    opciones: [
      "Asociabilidad",
      "Anergia física",
      "Aumento de la latencia de respuesta",
      "Distraibilidad social",
      "Distraibilidad durante la consulta"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "6. La mortalidad en esquizofrenia se relaciona mainly con:",
    opciones: [
      "Indigencia",
      "Cardiopatías",
      "Accidentabilidad",
      "Suicidio",
      "Comorbilidades médicas"
    ],
    correcta: 3, // El suicidio en esquizofrenia (generalmente asociado a depresión) es de 5 a 6 veces mayor que en la población general
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "7. En relación a la patología dual, en la esquizofrenia concomita frecuentemente con:",
    opciones: [
      "Abuso de alcohol y sustancias",
      "Trastornos de depresión",
      "Otras afecciones médicas (diabetes, cardiopatías,...)",
      "Todas son correctas",
      "Trastornos de ansiedad"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "8. En relación a la 'regla nemotécnica de las 3 C' de la esquizofrenia, se observa:",
    opciones: [
      "Cabizbajo y caminando rápido",
      "Consumo de sustancias estimulantes (café, cola...)",
      "Hábito tabáquico (Colillas)",
      "a, b y c son correctas",
      "Ninguna es correcta"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "9. En la fase residual de la esquizofrenia predominan de forma crónica los síntomas:",
    opciones: [
      "Negativos",
      "Positivos",
      "Psicóticos",
      "Todas son correctas",
      "Cognitivos"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "10. Acerca de la esquizofrenia, señale la respuesta CORRECTA:",
    opciones: [
      "Las fases que se dan son: prodrómica, fase activa y fase residual",
      "Epidemiológicamente un 50% se suicidan tras el primer brote",
      "Solo existe alteración en el patrón cognitivo, respetando el resto",
      "Generalmente el primer brote se inicia en la vejez",
      "Todas son correctas"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "11. Los síntomas en la esquizofrenia que implican un mayor aislamiento social para el paciente son:",
    opciones: [
      "Síntomas negativos",
      "Síntomas cognitivos",
      "Ninguno de ellos incapacita en lo social",
      "Todos incapacitan en lo social por igual",
      "Síntomas positivos"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "12. En relación a los síntomas positivos de la esquizofrenia, señale la INCORRECTA:",
    opciones: [
      "Se incluyen el comportamiento motor anómalo y el comportamiento desorganizado",
      "Son fenómenos novedosos y extraños que se añaden a la conducta normal",
      "Tienen una fundamentación lógica y objetiva en la realidad",
      "No tienen fundamentación objetiva",
      "Se incluyen en los mismos los delirios y las alucinaciones"
    ],
    correcta: 2, // Falso: los delirios y alucinaciones no tienen base real u objetiva
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "13. Al comunicarse con pacientes con esquizofrenia, ¿cuál de los siguientes problemas es más difícil para la enfermera?",
    opciones: [
      "Determinar qué significado tienen las palabras y el comportamiento simbólico para ellos",
      "Todas son prioritarias y de igual dificultad",
      "Expresarse en términos coloquiales para que la entiendan",
      "Aceptar que necesitan valerse de comportamiento infantil",
      "Retener su atención prolongada durante largas sesiones"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "14. En esquizofrenia, las alucinaciones más frecuentes son las:",
    opciones: [
      "Auditivas",
      "Táctiles",
      "Visuales",
      "Gustativas",
      "Olfativas"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "15. Para establecer una correcta diferencia diagnóstica entre un delirio y una creencia sobrevalorada debemos considerar especialmente:",
    opciones: [
      "La cultura y contexto social del individuo",
      "La gravedad de la expresión verbal",
      "Las relaciones familiares",
      "La alteración en la sensopercepción (si hay o no alucinación paralela)",
      "La presencia de síntomas primarios depresivos"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "16. El reto en cuanto al tratamiento y los cuidados de rehabilitación en esquizofrenia se fundamenta especialmente en el trabajo sobre la fase:",
    opciones: [
      "Activa, caracterizada por sintomatología positiva",
      "Premórbida, antes de que ocurra el daño",
      "Residual, caracterizada por el predominio crónico de síntomas negativos",
      "Todas son correctas",
      "Prodrómica, al inicio de los primeros cambios"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "17. El episodio maníaco se caracteriza clínicamente por:",
    opciones: [
      "Verborrea y fuga de ideas",
      "Facilidad de distracción y agitación psicomotora",
      "Participación excesiva en actividades con alto potencial de consecuencias dolorosas",
      "Disminución de la necesidad de dormir y aumento de autoestima (sentimiento de grandeza)",
      "Todas las respuestas son correctas"
    ],
    correcta: 4,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "18. En relación al trastorno Bipolar Tipo II, señale la afirmación FALSA:",
    opciones: [
      "Hay presencia de episodios de hipomanía",
      "Hay episodios de depresión mayor",
      "Hay episodios de manía completa",
      "El curso clínico puede afectar severamente la funcionalidad"
    ],
    correcta: 2, // Falso: en el Tipo II NUNCA hay manía, solo hipomanía y depresión.
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "19. En relación al trastorno ciclotímico, señale la respuesta FALSA:",
    opciones: [
      "Se evidencian períodos de hipomanía",
      "Se evidencian episodios maníacos completos y severos",
      "Se evidencian períodos depresivos (sin llegar a depresión mayor)",
      "Los síntomas deben estar presentes durante al menos 2 años (1 en niños)"
    ],
    correcta: 1, // En la ciclotimia nunca hay manía, ni depresión mayor
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "20. En relación al trastorno Bipolar Tipo I, señale la respuesta FALSA:",
    opciones: [
      "Obligatoriamente hay episodios de manía",
      "Pueden coexistir períodos de hipomanía",
      "Pueden coexistir episodios de depresión mayor",
      "Se caracteriza por la ausencia total de episodios depresivos a lo largo de la vida del paciente"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "21. La diferencia fundamental entre el Trastorno Bipolar I y el Bipolar II se caracteriza especialmente porque:",
    opciones: [
      "En el Bipolar I existen episodios maníacos sin hipomanía y en el Bipolar II existen hipomanía sin depresión",
      "En el Bipolar I existen episodios maníacos sin hipomanía y en el Bipolar II existe hipomanía pudiendo existir depresión",
      "En el Bipolar I existen episodios maníacos (con/sin hipomanía o depresión) y en el Bipolar II existe hipomanía con depresión pero SIEMPRE sin episodios maníacos",
      "Todas son correctas",
      "Ninguna es correcta"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "24. En el trastorno bipolar, en relación al riesgo de suicidio, señale la FALSA:",
    opciones: [
      "Suponen 1/4 de todos los suicidios consumados globales",
      "El riesgo es 15 veces superior al de la población general",
      "La clínica maníaca, por su impulsividad, favorece los actos autolíticos",
      "Si hay evidencias de intentos previos, el riesgo de volver a intentarlo aumenta exponencialmente",
      "El trastorno bipolar no supone un riesgo real de suicidio, a diferencia de la depresión unipolar"
    ],
    correcta: 4,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "26. Durante la hospitalización del paciente con Trastorno Bipolar, el personal de enfermería debe:",
    opciones: [
      "Valorar el riesgo de suicidio de forma estricta",
      "Verificar la adherencia farmacológica",
      "Favorecer y trabajar la conciencia de enfermedad (insight)",
      "Realizar el seguimiento y control de litemia en pacientes con Litio pautado",
      "Todas las anteriores son correctas"
    ],
    correcta: 4,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "27. El 30% de los pacientes diagnosticados con trastorno bipolar tipo I presentan una alteración grave en el ámbito:",
    opciones: [
      "Académico",
      "Laboral",
      "Familiar exclusivo",
      "Social recreativo",
      "Todas las anteriores"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "28. La acusada impulsividad presente en los trastornos bipolares (especialmente el tipo II) aumenta significativamente el riesgo de padecer (señale la FALSA):",
    opciones: [
      "Consumo perjudicial de sustancias",
      "Alteraciones cognitivas graves como amnesia anterógrada total",
      "Disfunción psicosocial",
      "Suicidio consumado",
      "Pérdida del rol laboral/vocacional"
    ],
    correcta: 1, // La amnesia anterógrada no es un riesgo directo típico de la impulsividad del bipolar
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "29. La diferencia clínica y diagnóstica entre el episodio maníaco y el hipomaníaco radica fundamentalmente en que:",
    opciones: [
      "La manía requiere estado de ánimo elevado, pero la hipomanía solo irritabilidad",
      "El límite temporal: el episodio maníaco es de mínimo 7 días (o requiere ingreso) y el hipomaníaco de mínimo 4 días",
      "El límite temporal: el episodio maníaco es de mínimo 4 días y el hipomaníaco de 7 días",
      "La hipomanía cursa con síntomas de grandeza psicóticos severos",
      "Solo la manía cursa con disminución de la necesidad de dormir"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "30. La abulia, la anhedonia y la alogia se clasifican clásicamente como:",
    opciones: [
      "Síntomas negativos",
      "Síntomas maníacos",
      "Síntomas positivos",
      "Síntomas cognitivos",
      "Síntomas psicóticos agudos"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "32. En relación a los síntomas positivos en la esquizofrenia, las ideas delirantes más frecuentes reportadas clínicamente son:",
    opciones: [
      "De grandeza o megalomaníacas",
      "De culpabilidad o ruina",
      "Celotípicas o de infidelidad",
      "Religiosas o místicas",
      "De persecución o daño"
    ],
    correcta: 4,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "34. En relación a los síntomas positivos de Andreasen en esquizofrenia, el trastorno formal positivo del pensamiento más frecuente es:",
    opciones: [
      "Circunstancialidad",
      "Falta de lógica deductiva",
      "Descarrilamiento y tangencialidad",
      "Ensalada de palabras",
      "Incoherencia total"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },

  // --- 2º SIMULACRO ---
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "1. La depresión clínica mayor se caracteriza por todo lo siguiente EXCEPTO (señale la FALSA):",
    opciones: [
      "Presencia de ideas de muerte o suicidas recurrentes",
      "Alteración de los ritmos circadianos (sueño) y potenciación de la percepción del dolor",
      "Estar proyectada como la 1ª causa de discapacidad en el mundo a partir del año 2060",
      "Presencia de ideas de culpa irracional y falta de reconocimiento personal",
      "Disfunción cognitiva (falta de atención) y anhedonia"
    ],
    correcta: 2, // Falso: Se proyecta que sea la primera causa en 2030, no 2060.
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "2. En relación con la Terapia Electroconvulsiva (TEC), señale la respuesta INCORRECTA:",
    opciones: [
      "Es una contraindicación absoluta haber padecido una hemorragia o infarto cerebral reciente",
      "La TEC es una opción de tratamiento segura y viable para la psicosis o depresión mayor en la mujer gestante",
      "Se considera un tratamiento de rescate eficaz en el síndrome neuroléptico maligno cuando falla la farmacoterapia",
      "No se puede utilizar bajo ningún concepto si el paciente ha tomado antidepresivos en los últimos 6 meses"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "3. ¿Cuál de las siguientes situaciones clínicas está relacionada con un pico de riesgo MÁXIMO de suicidio consumado?",
    opciones: [
      "Persona con trastorno depresivo mayor en las primeras semanas tras el alta hospitalaria después de un ingreso",
      "Persona con trastorno depresivo mayor y acusada clinofilia (no se levanta de la cama)",
      "Persona con trastorno histriónico tras una ruptura superficial",
      "Persona con trastorno bipolar entrando en plena fase maníaca grandiosa",
      "Todas conllevan exactamente el mismo nivel de riesgo agudo"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "4. Los principales diagnósticos de enfermería (NANDA) a vigilar en un paciente con depresión grave serán:",
    opciones: [
      "Desesperanza",
      "Impotencia",
      "Riesgo de violencia autodirigida (suicidio)",
      "Todas son correctas",
      "Ninguna es correcta"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "6. ¿Qué caracteriza al trastorno fóbico específico conocido como 'nosofobia'?",
    opciones: [
      "El temor irracional a contraer enfermedades",
      "El temor a los espacios abiertos (agorafobia)",
      "El temor a las alturas (acrofobia)",
      "El temor al contacto físico y social",
      "El temor a los gatos (ailurofobia)"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "8. Palmero postula que la conducta humana es motivada, implicando activación y dirección hacia una meta. Las alteraciones prolongadas en este circuito de respuesta a estímulos estresantes y su evaluación de éxito fundamentan la génesis de:",
    opciones: [
      "La esquizofrenia paranoide y sus delirios",
      "Los trastornos puros de personalidad del grupo A",
      "Los trastornos de ansiedad, al percibir amenazas futuras desproporcionadas",
      "El trastorno de identidad disociativo múltiple",
      "Todas son falsas"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "9. La persona que reacciona a un estímulo inespecífico con una sensación repentina de ahogo, percepción distorsionada, incapacidad para actuar y fuerte descarga vegetativa (taquicardia, sudoración), se encuentra en pleno estado de:",
    opciones: [
      "Angustia crónica somática",
      "Paranoia persecutoria",
      "Crisis de pánico",
      "Estrés postraumático residual",
      "Episodio psicótico breve"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "10. Son síntomas subjetivos/cognitivos presentes en los cuadros de ansiedad generalizada (señale la FALSA):",
    opciones: [
      "Aprensión, pensamientos negativos constantes y anticipación del peligro",
      "Preocupación, inseguridad y temor difuso",
      "Dificultad de concentración y bloqueo en la toma de decisiones",
      "Movimientos torpes, temblores y tartamudeo",
      "Sensación de desorganización y pérdida de control mental"
    ],
    correcta: 3, // Estos son síntomas MOTORES, no cognitivos/subjetivos
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "11. Son síntomas motores u observables propios de un cuadro ansioso (señale la FALSA):",
    opciones: [
      "Paralización motora ante el pánico (quedarse 'congelado')",
      "Sentimiento interno de inseguridad y anticipación del fracaso",
      "Movimientos torpes, tensión muscular y temblores",
      "Dificultades de expresión verbal y tartamudeo",
      "Hiperactividad motora sin propósito claro"
    ],
    correcta: 1, // Esto es un síntoma cognitivo/emocional, no un signo motor
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "15. La presentación clínica a nivel de urgencias de los trastornos de ansiedad (señale la INCORRECTA):",
    opciones: [
      "Suele presentar un fuerte componente vasovagal/vegetativo",
      "Suele ser altamente específica y apuntar claramente a un problema psiquiátrico desde el inicio",
      "Suele ser muy inespecífica a nivel físico (mareos, ahogo, opresión)",
      "Es frecuente que se confunda en triaje con un posible síndrome coronario agudo (infarto)",
      "Requiere realizar un buen diagnóstico diferencial orgánico"
    ],
    correcta: 1, // Incorrecta: la clínica física de la ansiedad es muy INESPECÍFICA
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "18. En relación al afrontamiento de la ansiedad mediante el uso de mecanismos de defensa del Yo (negación, sublimación, etc.), se considera que un individuo hace un uso 'sano' o adaptativo de ellos:",
    opciones: [
      "Cuando emplea 7 o más simultáneamente",
      "Cuando emplea de forma flexible 2 o más",
      "Cuando suprime completamente su uso",
      "Cuando emplea como máximo 1 o 2",
      "Cuando depende exclusivamente de la proyección"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "19. La agorafobia se define como _______ mientras que la ansiedad social es _________",
    opciones: [
      "El miedo a espacios abiertos, usar el transporte público o estar en multitudes / El miedo y evitación a situaciones sociales donde el individuo está expuesto al escrutinio y posible juicio de otros",
      "El miedo irracional a la evaluación pública / El miedo a salir de casa sin compañía",
      "El miedo al encierro en lugares sin salida / El miedo al contacto físico directo",
      "Ambas definiciones son idénticas en el DSM-5",
      "Ninguna es correcta"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "24. En la fase aguda del cuidado de un paciente con un ataque de ansiedad severo o pánico, la enfermera deberá considerar realizar todo lo siguiente EXCEPTO (señale la FALSA):",
    opciones: [
      "Administrar la medicación ansiolítica prescrita (p. ej. lorazepam) si precisa",
      "Valorar riesgo de autolesiones y asegurar un entorno seguro",
      "Mantener un entorno con un elevado nivel de estimulación ambiental y usar comunicación compleja para distraerlo",
      "Mantener una actitud tranquila y no amenazante frente al paciente",
      "Utilizar una comunicación verbal sencilla, firme y directa"
    ],
    correcta: 2, // Falso: se debe REDUCIR el nivel de estimulación y hablar sencillo, no complejizar el entorno
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "26. En relación a los fármacos ansiolíticos benzodiacepínicos (diazepam, alprazolam), la enfermera deberá advertir y considerar especialmente que:",
    opciones: [
      "Generan dependencia física y psicológica si se usan a largo plazo",
      "Presentan tolerancia cruzada (riesgo letal al combinar con alcohol por ser depresores del SNC)",
      "Producen efectos colaterales motores como sedación, ataxia o mareo",
      "Su interrupción brusca puede generar síndrome de abstinencia y convulsiones",
      "Todas las opciones son afirmaciones correctas y precauciones clave"
    ],
    correcta: 4,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "28. Cuando en una persona que padece Trastorno Obsesivo-Compulsivo (TOC) se observan los denominados 'ritos compulsivos', ¿cuál es el objetivo clínico primario de que el paciente los realice?",
    opciones: [
      "Son actos formales y precisos que el paciente realiza obligatoriamente para intentar disminuir la fuerte angustia y ansiedad generada por su idea obsesiva",
      "Son mecanismos para llamar la atención del personal sanitario",
      "Son conductas que proporcionan un intenso placer sexual o hedónico",
      "Son movimientos guiados por voces alucinatorias que le ordenan limpiar o contar",
      "Ninguna es correcta"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "36. En relación a la dismorfia muscular (vigorexia), señale la afirmación FALSA:",
    opciones: [
      "Frecuentemente el individuo recurre al empleo de anabolizantes androgénicos para hipertrofiar",
      "La conciencia de enfermedad (insight) suele ser muy alta y el paciente pide ayuda rápidamente",
      "Es una preocupación extrema por la idea distorsionada de que el cuerpo es demasiado pequeño o insuficientemente musculado",
      "Genera una dieta restrictiva hiperproteica y rutinas de gimnasio extenuantes que alteran la vida social",
      "Se considera dentro del espectro de los trastornos obsesivos"
    ],
    correcta: 1, // Falso: en la dismorfia muscular el 'insight' o conciencia de enfermedad suele ser MUY BAJO o nulo
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "37. En relación al Trastorno por Acumulación (síndrome de Diógenes/acumulación compulsiva), señale la FALSA:",
    opciones: [
      "El espacio de la vivienda se satura y se vuelve inoperativo, bloqueando zonas vitales (cocina, baño)",
      "Consiste en la recolección obsesiva de objetos que no tienen un valor real o utilidad necesaria",
      "Entorpece la funcionalidad del hogar y eleva dramáticamente el riesgo de incendios y caídas",
      "Estadísticamente es el hombre el que lo manifiesta de forma mayoritaria a través de la compra compulsiva de ropa",
      "Produce un fuerte malestar o estrés si se intenta obligar al paciente a desechar sus posesiones"
    ],
    correcta: 3, // Falso: La oniomanía (compra de ropa/zapatos) es estadísticamente más prevalente en mujeres, no en el patrón de acumulación del hombre clásico
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "39. En relación al trastorno de excoriación (dermatilomanía), señale la afirmación FALSA:",
    opciones: [
      "El paciente invierte un tiempo considerable de su día en este comportamiento",
      "Un riesgo grave médico son las sobreinfecciones bacterianas de las lesiones cutáneas",
      "El rascado repetitivo de costras o piel se produce a menudo como respuesta a tensión emocional o aburrimiento",
      "Se clasifica como un trastorno en el que los pacientes se arrancan el pelo de la cabeza en vez de rascar la piel",
      "Causa un alivio transitorio de la angustia seguido frecuentemente de culpa"
    ],
    correcta: 3, // Falso: Arrancarse el pelo es la Tricotilomanía, no la Excoriación.
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "41. Según los criterios diagnósticos (DSM-5) para el Trastorno de Estrés Postraumático (TEPT), ¿cuál de las siguientes experiencias NO se calificaría como un evento traumático detonante del cuadro?",
    opciones: [
      "Enterarse de que la empresa donde trabajas ha cerrado repentinamente y estás despedido",
      "Enterarse de que un hijo pequeño ha sido secuestrado",
      "Sobrevivir a una agresión sexual con violencia extrema",
      "Enterarse de que un hermano ha muerto en combate de forma trágica",
      "Estar presente en un desastre natural que amenazó tu integridad física (terremoto)"
    ],
    correcta: 0, // Perder el trabajo es un estresor vital mayor, pero no califica como trauma de TEPT (no hay amenaza a la vida o integridad física severa)
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "43. Se denomina 'estrés positivo' (eustrés) a todo lo siguiente EXCEPTO (señale la FALSA):",
    opciones: [
      "Es una reacción adaptativa breve necesaria para la supervivencia y el estado de alerta ante un reto",
      "Se emplea como recurso de afrontamiento para movilizar la energía del cuerpo",
      "Genera reacciones fisiológicas transitorias que mejoran el rendimiento",
      "Cursa con una clínica clínica vasovegetativa que paraliza e infarta al paciente en todos los casos",
      "Si este estado de activación no cesa y se cronifica, se convierte en un trastorno por estrés crónico negativo"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  // --- 3º SIMULACRO ---
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "1. Los trastornos disociativos se caracterizan por:",
    opciones: [
      "Desconectar de la realidad",
      "Sentir que lo que rodea es ajeno a ti",
      "Sentir grandiosidad y alta autoestima",
      "Las respuestas A y B son verdaderas",
      "Todas son verdaderas"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "2. Los principales factores alterados en los trastornos disociativos son (señale la FALSA):",
    opciones: [
      "El patrón cognitivo perceptivo",
      "El patrón de percepción-control de la salud",
      "El patrón de rol y relaciones",
      "El patrón de autocuidado",
      "El patrón del sueño y descanso ininterrumpido"
    ],
    correcta: 4, // Principalmente se afecta la cognición, relaciones y autocuidado
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "7. La presencia de síntomas físicos no explicables a base de patología orgánica diagnosticable se refiere a:",
    opciones: [
      "Trastorno fisiológico base",
      "Trastorno por conversión",
      "Trastorno de somatización o de síntomas somáticos",
      "Las respuestas A y B son correctas",
      "Las respuestas B y C son correctas"
    ],
    correcta: 4,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "8. En el trastorno facticio (síndrome de Münchhausen):",
    opciones: [
      "El paciente fabrica intencionadamente síntomas físicos y psicológicos para simular una enfermedad iniciándolos a su voluntad",
      "Es la producción inintencionada de síntomas motivada por factores biológicos",
      "Los pacientes tienen visión exageradamente positiva de sí mismos",
      "La clínica aparece siempre como respuesta a un delirio paranoide de persecución",
      "Todas las anteriores son verdaderas"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "9. En los trastornos de conversión:",
    opciones: [
      "Los síntomas aparecen junto a la ansiedad y tienen base orgánica demostrable",
      "La ansiedad o angustia se convierten en síntomas corporales (motores o sensitivos) sin base orgánica objetivable",
      "Son los síntomas físicos orgánicos los que generan la enfermedad mental subyacente",
      "El paciente simula el síntoma conscientemente para obtener una baja laboral",
      "Todas son correctas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "12. La despersonalización se caracteriza por (señala la FALSA):",
    opciones: [
      "La persona se observa a una cierta distancia como si fuera un espectador de sí misma",
      "Se pierde la noción del entorno exterior creyendo que los objetos son irreales (desrealización)",
      "Sienten irrealidad sobre su propio ser",
      "Sienten falta de control de sus propias acciones",
      "Presencian sus movimientos como a través de un cristal"
    ],
    correcta: 1, // La pérdida de la noción del entorno irreal es la Desrealización, no Despersonalización
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "14. Por regla general en el trastorno de síntomas somáticos (señale la FALSA):",
    opciones: [
      "Se interpretan las sensaciones corporales normales como signos de enfermedad grave",
      "Hay preocupación y angustia persistente",
      "Existe una búsqueda repetitiva de atención médica",
      "No hay hallazgos clínicos que justifiquen la magnitud de la preocupación",
      "Se interpretan sensaciones corporales completamente extrañas e imposibles como signos de enfermedad"
    ],
    correcta: 4, // Interpretan sensaciones normales (latido, sudor) de forma anómala, no extrañas
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "18. La geofagia es:",
    opciones: [
      "Un trastorno que se incluye en la rumiación y se caracteriza por comer tierra",
      "Un trastorno que se incluye en la pica y se caracteriza por comer pelo (tricofagia)",
      "Un trastorno que se incluye en la pica y se caracteriza por comer heces (coprofagia)",
      "Un trastorno que se incluye en la rumiación y se caracteriza por comer piedras",
      "Un trastorno de la conducta alimentaria incluido en la PICA que se caracteriza por comer tierra"
    ],
    correcta: 4,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "19. El trastorno de rumiación se caracteriza por todas las siguientes EXCEPTO (señale la FALSA):",
    opciones: [
      "Consiste en la regurgitación de la ingesta de forma repetida",
      "Hay náuseas, arcadas involuntarias y expresión de intenso desagrado al hacerlo",
      "La comida tragada o parcialmente tragada se regurgita sin esfuerzo",
      "La postura característica es de esfuerzo y de arqueo de la espalda con succión de la lengua",
      "Se puede volver a masticar lo regurgitado o escupirlo"
    ],
    correcta: 1, // Falso: NO hay náuseas ni asco, se hace de forma natural e incluso placentera
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "23. Se define el trastorno por atracones como aquel en el que:",
    opciones: [
      "Se produce una ingesta de alimentos desproporcionada en un tiempo < 5 horas",
      "Se produce una ingesta de alimentos desproporcionada en un tiempo < 4 horas",
      "Se produce una ingesta de alimentos desproporcionada en un tiempo < 3 horas",
      "Se produce una ingesta de alimentos desproporcionada en un tiempo < 2 horas",
      "Se produce una ingesta de alimentos desproporcionada en un tiempo < 1 hora"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "24. La encopresis se define clínicamente como:",
    opciones: [
      "La micción repetida de orina en lugares inapropiados",
      "La defecación reiterada, voluntaria o involuntaria, en lugares inadecuados",
      "La incontinencia fecal exclusiva en ancianos por deterioro neurocognitivo",
      "La ingesta de materia fecal propia",
      "Todas las respuestas son correctas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "26. La enuresis se define como:",
    opciones: [
      "La emisión repetida de heces en lugares inapropiados",
      "La emisión repetida de orina en la ropa o en la cama de forma voluntaria o involuntaria",
      "La emisión repetida de orina exclusivamente de forma voluntaria por rebeldía",
      "La emisión repetida de orina exclusivamente de forma involuntaria por fallo renal",
      "El miedo irrefrenable a orinar en baños públicos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "29. Los trastornos parafílicos de preferencias de ACTIVIDAD anómalas incluyen (señala la FALSA):",
    opciones: [
      "Frotteurismo",
      "Masoquismo sexual y sadismo sexual",
      "Voyeurismo",
      "Exhibicionismo",
      "Fetichismo"
    ],
    correcta: 4, // El Fetichismo es una preferencia de OBJETO anómala, no de actividad
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "34. La situación psiquiátrica en la que alternan el control del comportamiento dos o más personalidades distintas en un mismo individuo se conoce como:",
    opciones: [
      "Trastorno de desrealización",
      "Amnesia disociativa",
      "Trastorno de despersonalización",
      "Trastorno de identidad disociativo (personalidad múltiple)",
      "Fuga disociativa"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "37. El trastorno de Voyeurismo es:",
    opciones: [
      "Tendencia sexual que consiste en la exposición de los genitales a terceros (exhibicionismo)",
      "Tendencia a tocamientos y fricciones sin consentimiento (frotteurismo)",
      "Tendencia sexual al dolor y la humillación (masoquismo)",
      "Tendencia a someter a otros al dolor (sadismo)",
      "Tendencia sexual que consiste en observar a personas desprevenidas desnudas o realizando actos sexuales, causando malestar clínico"
    ],
    correcta: 4,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "45. La fuga disociativa se caracteriza por:",
    opciones: [
      "Sensación de distanciamiento entre cuerpo y proceso mental",
      "Un 'viaje lejano' inesperado fuera de su vida en el que adopta o puede adoptar una identidad inventada amnésica de la anterior",
      "Una alucinación visual persecutoria que le hace correr",
      "Una amnesia provocada exclusivamente por un TCE severo orgánico",
      "Ninguna es correcta"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "48. Es un tipo de trastorno de la personalidad perteneciente al Grupo B (Dramáticos/Erráticos):",
    opciones: [
      "Paranoide",
      "Esquizotípica",
      "Esquizoide",
      "Obsesivo-compulsiva",
      "Narcisista"
    ],
    correcta: 4,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "50. Según la clasificación de los trastornos de la personalidad, ¿en qué grupo se incluyen los individuos histriónicos, los narcisistas, los límites (TLP) y los antisociales?",
    opciones: [
      "Grupo A",
      "Otros trastornos especificados",
      "Trastorno no especificado",
      "Grupo B",
      "Grupo C"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "52. Los trastornos de la personalidad se caracterizan por todo lo siguiente EXCEPTO (señala la FALSA):",
    opciones: [
      "Son patrones estables en el tiempo",
      "Son patrones fluctuantes y episódicos (como un brote de ansiedad)",
      "Son formas de ser crónicas y permanentes",
      "Conforman un patrón de comportamiento inflexible",
      "Afectan a la forma basal de sentir y comportarse en casi todos los ámbitos"
    ],
    correcta: 1, // Falso: La personalidad no fluctúa como un brote, es estructural y crónica
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "61. La sensación subjetiva de estar separado del propio cuerpo, de los propios procesos mentales o sentirse como un autómata es típica de:",
    opciones: [
      "Fuga disociativa",
      "Trastorno de identidad disociativo",
      "Esquizofrenia paranoide",
      "Despersonalización",
      "Depresión mayor melancólica"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },

  // --- PREGUNTAS SEMINARIOS / PELÍCULA ---
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "3. Una niña de 13 años, con buen comportamiento previo, comienza a mostrar conducta de oposición y desafío. Está enojada, discute y se niega a aceptar la responsabilidad de su comportamiento, lo que está afectando significativamente a su vida. El diagnóstico más propicio será:",
    opciones: [
      "Trastorno negativista desafiante",
      "Trastorno depresivo mayor",
      "Trastorno bipolar",
      "Trastorno adaptativo"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "4. Un chico de 15 años de edad tiene antecedentes de comportamiento violento episódico desproporcionado en comparación con el hecho desencadenante. Durante un estallido típico, destruye muebles sin propósito ni ganancia específica, calmándose a los treinta minutos. El diagnóstico que mejor se ajusta es:",
    opciones: [
      "Trastorno bipolar",
      "Trastorno de conducta antisocial",
      "Trastorno explosivo intermitente",
      "Trastorno de desregulación disruptiva del estado de ánimo"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "5. En la película Shutter Island, el diagnóstico psicopatológico más relevante del personaje protagonista (Teddy Daniels) y que más lo incapacita es:",
    opciones: [
      "Piromanía inducida",
      "Bipolaridad de ciclo rápido",
      "Esquizofrenia (psicosis paranoide delirante)",
      "Trastorno de estrés postraumático simple"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "18. El síndrome de Asperger (TEA) se caracteriza por tener obligatoriamente bajas capacidades intelectuales (discapacidad intelectual profunda).",
    opciones: ["Verdadero", "Falso"],
    correcta: 1, // Falso: El asperger conserva el CI normativo o incluso superior
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "20. Por regla general, el Trastorno por Acumulación se define como aquel en el que los individuos presentan una necesidad 'aparentemente' injustificada de recolectar objetos sin valor y angustia al desecharlos.",
    opciones: ["Verdadero", "Falso"],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },

  // --- PREGUNTAS NUEVAS EXAMEN 1 ---
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "28. Las áreas clásicamente afectadas en los trastornos de la personalidad son:",
    opciones: [
      "Funcionamiento interpersonal",
      "Afectividad",
      "Control de los impulsos",
      "Cognición",
      "Todas las anteriores son correctas"
    ],
    correcta: 4,
    esExamen: true,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "30. Señale la respuesta CORRECTA en relación con el curso y desarrollo del Trastorno del Espectro Autista (TEA):",
    opciones: [
      "El inicio de los síntomas del TEA se puede observar en etapas tempranas cuando no se cumplen hitos del desarrollo social/comunicativo",
      "El TEA es un trastorno de tipo puramente neurodegenerativo, como el Alzheimer",
      "Los síntomas de TEA no se pueden reconocer bajo ningún concepto hasta los 5-6 años de edad",
      "La presencia de fuertes preferencias en el juego o repeticiones descartan el TEA",
      "Ninguna es correcta"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "31. La inteligencia límite o funcionamiento intelectual limítrofe es determinada por un coeficiente intelectual (CI) de:",
    opciones: [
      "35-50 ptos.",
      "20-35 ptos.",
      "0-20 ptos.",
      "70-85 ptos.",
      "50-70 ptos."
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "32. El trastorno de la Tourette consiste diagnosticamente en la presencia de:",
    opciones: [
      "Comportamiento motor aparentemente guiado y sin objetivo que interfiere en la funcionalidad",
      "Comportamiento motor y/o verbal repetitivo voluntario",
      "Únicamente un tic vocal aislado de carácter agudo",
      "Tics motores múltiples y uno o más tics vocales presentes por más de un año",
      "Alucinaciones auditivas complejas que emiten órdenes"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "33. En relación al síndrome neuroléptico maligno señale la afirmación FALSA:",
    opciones: [
      "Es una urgencia vital que puede causar la muerte",
      "Es un efecto secundario primario al uso de antipsicóticos",
      "Puede inducir una alteración severa de consciencia y coma",
      "Es un efecto secundario exclusivo al uso de antidepresivos tricíclicos",
      "Provoca inestabilidad autónoma, rigidez muscular y fiebre alta"
    ],
    correcta: 3, // Falsa: Es causado por los ANTIPSICÓTICOS/neurolépticos, no por los tricíclicos.
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "34. La valoración de enfermería en los trastornos disociativos se centra fundamentalmente en:",
    opciones: [
      "La orientación espacio-tiempo-personas",
      "La cualidad y continuidad de la memoria autobiográfica",
      "El estado de conciencia y la sensación de irrealidad del entorno",
      "La organización del pensamiento y el miedo a volverse loco",
      "Todas las respuestas anteriores son correctas"
    ],
    correcta: 4,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "35. La impulsividad patológica (como rasgo principal en un trastorno límite o bipolar) se relaciona estrechamente con el aumento de:",
    opciones: [
      "El consumo de sustancias perjudiciales",
      "El riesgo de conducta suicida",
      "El deterioro de la interacción social pacífica",
      "Las opciones A y B son correctas",
      "Las opciones A, B y C son correctas"
    ],
    correcta: 4, // El texto apunta tanto a consumo, riesgo suicida como deterioro en las relaciones
    esExamen: true,
    conceptoMapa: "trastornos_personalidad"
  },

  // --- PREGUNTAS NUEVAS EXAMEN 2 ---
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "31. El trastorno intelectual LEVE es determinado por un coeficiente intelectual (CI) aproximado de:",
    opciones: [
      "35-50 ptos.",
      "50-70 ptos.",
      "70-85 ptos.",
      "20-35 ptos.",
      "0-20 ptos."
    ],
    correcta: 1, // Leve: 50-70
    esExamen: true,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "33. El trastorno de movimientos estereotipados se caracteriza principalmente por:",
    opciones: [
      "Comportamiento motor repetitivo, aparentemente guiado y sin objetivo funcional (como aleteo de manos) que interfiere en las áreas vitales",
      "La emisión exclusiva de tics vocales (coprolalia)",
      "Comportamiento motor provocado intencionadamente para llamar la atención escolar",
      "Un déficit motor periférico causado por una parálisis cerebral infantil",
      "Comportamiento motor impulsivo enfocado exclusivamente a dañar el mobiliario"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "34. Señale la FALSA en relación a la sintomatología del síndrome extrapiramidal (efecto secundario al tratamiento con antipsicóticos):",
    opciones: [
      "Provoca distonía muscular aguda y rigidez espástica",
      "Provoca acatisia (incapacidad para permanecer quieto)",
      "Provoca un aumento beneficioso y sostenido en la atención cognitiva",
      "Puede provocar discinesia tardía si el tratamiento es crónico",
      "Provoca temblor y pseudoparkinsonismo"
    ],
    correcta: 2, // Falso: el extrapiramidalismo afecta a lo motor, no mejora la atención
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "35. Para la valoración del riesgo suicida en psiquiatría principalmente se ha de considerar (señale la CORRECTA):",
    opciones: [
      "Los antecedentes personales y familiares puros",
      "La presencia de síntomas psicóticos floridos y tentativas previas",
      "La disponibilidad de medios, letalidad del método y urgencia del impulso",
      "El consumo de sustancias que desinhiben el control conductual",
      "Todas las respuestas anteriores son correctas e indispensables a valorar"
    ],
    correcta: 4,
    esExamen: true,
    conceptoMapa: "urgencias_cuidados"
  },

  // --- PREGUNTAS NUEVAS EXAMEN 3 ---
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "29. La alteración de la función integradora de la conciencia, la identidad, la percepción del entorno y/o la memoria es el rasgo patológico esencial definitorio en los trastornos:",
    opciones: [
      "De conversión",
      "Disociativos",
      "Depresivos unipolares",
      "Fóbicos específicos",
      "Obsesivos compulsivos"
    ],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "30. Los componentes psicológicos que vehiculizan y forman parte del proceso de la motivación son:",
    opciones: [
      "El autoconcepto, la autoestima y la autorrealización exclusivamente",
      "Las metas, las atribuciones de éxito/fracaso, las creencias/expectativas y las emociones generadas",
      "Únicamente los aspectos conductuales reflejos de Pavlov",
      "La presión genética predeterminada",
      "Ninguna respuesta es correcta"
    ],
    correcta: 1,
    esExamen: true,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "31. El trastorno intelectual MODERADO es determinado en psicometría por un coeficiente intelectual (CI) aproximado de:",
    opciones: [
      "50-70 ptos.",
      "20-35 ptos.",
      "0-20 ptos.",
      "35-50 ptos.",
      "70-85 ptos."
    ],
    correcta: 3, // Moderado: 35-50
    esExamen: true,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "32. El trastorno de la comunicación social (pragmático) se caracteriza clínicamente por:",
    opciones: [
      "Deficiencias en el uso social del lenguaje y la comunicación según el contexto",
      "Deficiencias en las reglas sociales de comunicación verbal (turnos de palabra) y no verbal",
      "Dificultad para cambiar o adaptar el lenguaje según las necesidades del que escucha o del entorno",
      "Problemas para entender lo que no se dice explícitamente (metáforas, doble sentido)",
      "Todas las respuestas anteriores son correctas"
    ],
    correcta: 4,
    esExamen: true,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "33. ¿Cuál de las siguientes intervenciones de enfermería será la PRIORITARIA ante un paciente con una clara intención suicida y verbalización activa?",
    opciones: [
      "Proporcionar medidas de contención mecánica inmediata y aislamiento preventivo",
      "Proponer actividades físicas extenuantes para mantener al paciente ocupado e ignorar el problema",
      "Estimular la expresión verbal de los sentimientos negativos y asegurar un entorno seguro con control ambiental continuo",
      "Animarle a que nos diga los logros alcanzados a lo largo de su vida para que cambie de idea por sí solo",
      "Asegurar ciegamente al paciente que todos los pensamientos suicidas desaparecerán rápido"
    ],
    correcta: 2,
    esExamen: true,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "34. El Síndrome Neuroléptico Maligno en psiquiatría se relaciona fisiopatológicamente de forma directa con:",
    opciones: [
      "Un efecto secundario de instauración brusca asociado al tratamiento con fármacos antipsicóticos / neurolépticos",
      "Un síntoma principal propio del Trastorno Límite de Personalidad",
      "Un cuadro de la esfera de los trastornos somatomorfos inducido por ansiedad",
      "El consumo abusivo de benzodiacepinas en pacientes geriátricos",
      "El abandono del tratamiento profiláctico con Litio"
    ],
    correcta: 0,
    esExamen: true,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "35. En cuanto a los cuidados de enfermería en salud mental de forma transversal y general (prevención y rehabilitación), son considerados como hitos prioritarios:",
    opciones: [
      "Trabajar y asegurar la adhesión al tratamiento farmacológico pautado",
      "Generar y trabajar la conciencia de enfermedad (insight) del paciente",
      "Imponer un alta forzosa lo más rápida posible aunque no esté estabilizado",
      "Las respuestas A y B son correctas",
      "Todas son correctas"
    ],
    correcta: 3,
    esExamen: true,
    conceptoMapa: "urgencias_cuidados"
  },
  // ==========================================
  // TEMA 1: HISTORIA DE LA PSIQUIATRÍA Y MODELOS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "1. La 'Triada ABC', que establece los requisitos necesarios para poder hablar de psiquiatría o salud mental, está compuesta por:",
    opciones: [
      "Afecto (emociones), Comportamiento y Cognición",
      "Actitud, Biología y Conducta",
      "Ambiente, Biología y Contexto",
      "Autonomía, Bienestar y Cognición"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "2. Desde el punto de vista etimológico, la palabra 'Psiquiatría' proviene de 'Psyche' e 'Iatréia', que significan respectivamente:",
    opciones: [
      "Mente y Medicina",
      "Alma y Curación",
      "Cerebro y Tratamiento",
      "Conducta y Sanación"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "historia_psiquiatria"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "3. ¿Qué filósofo clásico clasificó por primera vez los problemas mentales en orgánicos, éticos y divinos, diferenciando un alma racional (inmortal) y otra irracional (mortal)?",
    opciones: [
      "Sócrates",
      "Aristóteles",
      "Platón",
      "Hipócrates"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "historia_psiquiatria"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "4. Según la clasificación de los trastornos mentales de Hipócrates, la 'Frenitis' se relacionaba con:",
    opciones: [
      "Alteración mental sin fiebre",
      "Afecto depresivo sin agitación",
      "La fiebre y se relaciona con el delirium",
      "Disnea paroxística y convulsiones"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "historia_psiquiatria"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "5. ¿En qué época de la historia se utiliza por primera vez el 'Malleus Maleficarum' para justificar que las personas sin razón son poseídas por el demonio?",
    opciones: [
      "Antigua Roma",
      "Renacimiento",
      "Edad Media",
      "Siglo XVIII"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "historia_psiquiatria"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "6. ¿Quién es considerado el responsable de la Primera Revolución Psiquiátrica al crear el primer manicomio del mundo en Valencia, España?",
    opciones: [
      "Philippe Pinel",
      "Fray Juan Gilabert Jofré",
      "Paracelso",
      "Vives"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "historia_psiquiatria"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "7. Durante el siglo XVII, Descartes formula su teoría del dualismo ubicando el asiento del alma en:",
    opciones: [
      "El hipotálamo",
      "El corazón",
      "La glándula pineal",
      "El lóbulo frontal"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "historia_psiquiatria"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "8. La Segunda Revolución Psiquiátrica (s. XVIII-XIX) está marcada por la desinstitucionalización y el reconocimiento del status de enfermo mental impulsado por:",
    opciones: [
      "P. Pinel",
      "K. Schneider",
      "S. Freud",
      "E. Bleuler"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "historia_psiquiatria"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "9. ¿A qué autor del siglo XX se le atribuye la creación del modelo médico de la enfermedad mental y la diferenciación clínica entre psicosis maníaco-depresiva y demencia precoz?",
    opciones: [
      "Sigmund Freud",
      "Emil Kraepelin",
      "Carl Jung",
      "Eugen Bleuler"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "historia_psiquiatria"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "10. La Tercera Revolución Psiquiátrica (década de 1950) vino impulsada fundamentalmente por:",
    opciones: [
      "El inicio del psicoanálisis de Freud",
      "La creación de la Terapia Electroconvulsiva",
      "El descubrimiento de la Clorpromazina y los primeros psicofármacos",
      "El desarrollo de la neuroimagen (PET y RMf)"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "historia_psiquiatria"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "11. ¿En qué se fundamenta la Cuarta Revolución Psiquiátrica (s. XXI)?",
    opciones: [
      "En el conductismo radical de Skinner",
      "En el psicoanálisis y la teoría de los sueños",
      "En la genética y la neurobiología (neuroplasticidad y neurogénesis)",
      "En el aislamiento en asilos de los pacientes"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "historia_psiquiatria"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "12. La primera escuela de enfermeras psiquiátricas en el mundo fue impulsada por las diaconisas alemanas de la mano de:",
    opciones: [
      "Dorotea L. Dix",
      "Linda Richards",
      "Hildegard Peplau",
      "Theodor Fliedner y Friedericke Munster"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "historia_psiquiatria"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "13. El enfoque que estudia la salud mental analizando los procesos mentales internos como la atención, memoria, inteligencia y esquemas de pensamiento es el:",
    opciones: [
      "Enfoque Conductista",
      "Enfoque Psicodinámico",
      "Enfoque Cognitivista",
      "Enfoque Sociocultural"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "modelos_salud_mental"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "14. El enfoque Humanista de la salud mental, que busca la autorrealización y la priorización de necesidades, cuenta entre sus referentes a:",
    opciones: [
      "Skinner y Pavlov",
      "Maslow, Rogers y Peplau",
      "Darwin y Lamarck",
      "Freud y Jung"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "modelos_salud_mental"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "15. ¿Qué paradigma metodológico de investigación en salud mental busca observar la relación entre variables sin manipularlas directamente?",
    opciones: [
      "Experimental",
      "Cualitativo",
      "Correlacional",
      "Hermenéutico"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "16. En relación al nivel de estudio filosófico en salud mental, ¿quién postulaba que el ser humano es movido primordialmente por la pulsión o el instinto?",
    opciones: [
      "C. Rogers",
      "A. Maslow",
      "S. Freud",
      "H. Peplau"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "modelos_salud_mental"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "17. El proceso mediante el cual nuestro cerebro es capaz de formar nuevas neuronas a lo largo de la vida, concepto clave en el s. XXI, se denomina:",
    opciones: [
      "Neuroplasticidad",
      "Neurogénesis",
      "Sinaptogénesis retrógrada",
      "Disonancia cognitiva"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "18. Las 'terapias de cuarta generación u ola' en el ámbito de la salud mental se caracterizan por incorporar conceptos como:",
    opciones: [
      "El castigo y el refuerzo negativo exclusivo",
      "La compasión y permitirse sentir las emociones",
      "La lobotomía frontal",
      "El condicionamiento clásico pavloviano"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "modelos_salud_mental"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "19. A nivel histórico en España, el año 1930 es relevante en Cataluña porque:",
    opciones: [
      "Se crea la primera escuela de enfermeras psiquiátricas",
      "Se introduce la figura de enfermeras especialistas por la Mancomunidad y se inician las terapias somáticas",
      "Se produce la gran desinstitucionalización psiquiátrica",
      "Se prohíbe definitivamente la contención mecánica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "historia_psiquiatria"
  },
  {
    asignatura: "salud_mental",
    tema: 1,
    pregunta: "20. Dentro de los principios en el estudio científico de la salud mental, la capacidad de poner en duda lo ya estipulado para formular nuevas hipótesis se conoce como:",
    opciones: [
      "Objetividad",
      "Exactitud",
      "Escepticismo",
      "Fiabilidad"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },

  // ==========================================
  // TEMA 2: CONCEPTO SM, ATRIBUCIONES Y RELACIÓN TERAPÉUTICA
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "21. El 'Locus de Control' puede ser interno o externo. ¿Qué factor corresponde a un Locus de Control INTERNO según las bases de la salud mental?",
    opciones: [
      "La suerte o el azar",
      "La dificultad de la tarea impuesta por el entorno",
      "La motivación, la intención y el esfuerzo de la persona",
      "La genética heredada inmodificable"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "22. Según los valores sociales necesarios para sentirnos saludables englobados en el acrónimo 'BUCKET', la letra 'B' corresponde a:",
    opciones: [
      "Belief (Creencia)",
      "Belong (Pertenencia)",
      "Behavior (Comportamiento)",
      "Balance (Equilibrio)"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "23. En la matriz de la Relación de Ayuda, si un profesional siente una ALTA cordialidad pero una BAJA competencia hacia el paciente, desarrollará un:",
    opciones: [
      "Prejuicio despectivo",
      "Prejuicio envidioso",
      "Prejuicio paternalista (protección)",
      "Sentimiento de admiración plana"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "relacion_terapeutica"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "24. Siguiendo las dimensiones de percibir a alguien en la relación de ayuda, un 'Daño pasivo' mezclado con una 'Ayuda activa' es típico del:",
    opciones: [
      "Prejuicio envidioso",
      "Prejuicio paternalista",
      "Prejuicio despectivo",
      "Sentimiento de admiración pura"
    ],
    correcta: 1, // Se le ayuda pero se anula su autonomía
    esExamen: false,
    conceptoMapa: "relacion_terapeutica"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "25. El concepto de 'Ignorancia Colectiva' o generalista ante una emergencia se refiere a:",
    opciones: [
      "La falta de formación universitaria en salud mental",
      "Que ante muchos implicados, la responsabilidad se diluye y nadie da el paso para ayudar",
      "La estigmatización de la enfermedad mental en los medios de comunicación",
      "Creer erróneamente que una enfermedad mental es siempre contagiosa"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "26. Según la Teoría Atributiva de Kelley, si una situación presenta Consenso Alto, Distintividad Alta y Consistencia Alta, la responsabilidad del suceso recae fundamentalmente en:",
    opciones: [
      "La persona (actor)",
      "El estímulo (la otra persona u objeto observado)",
      "El ambiente o situación",
      "El destino"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "27. El sesgo atributivo que consiste en 'la tendencia a sobreestimar la intensidad y duración que tendrán futuros eventos en nuestras emociones' se denomina:",
    opciones: [
      "Sesgo de proyección",
      "Ilusión de transparencia",
      "Sesgo de impacto",
      "Falacia de planificación"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "28. Un paciente piensa: 'Como saqué un 10 en mi examen anterior, tengo buena racha y es imposible que suspenda el próximo aunque no estudie'. ¿A qué sesgo atributivo corresponde?",
    opciones: [
      "Falacia del jugador y de la mano caliente",
      "Sesgo retrospectivo",
      "Ilusión de control",
      "Pensamiento contrafáctico"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "29. ¿Qué diferencia clave existe entre una 'Enfermedad mental' y un 'Trastorno mental' según la psiquiatría clásica?",
    opciones: [
      "El trastorno no altera la funcionalidad, la enfermedad sí",
      "En la enfermedad mental se conoce una etiología clara y se puede proponer un tratamiento médico/biológico dirigido",
      "El trastorno es crónico e irreversible, la enfermedad es siempre curable al 100%",
      "No existe diferencia, son sinónimos absolutos en el DSM-5"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "30. La Teoría Holística de la salud postula que los profesionales actuamos como 'Tacaños cognitivos' (S. Fiske), lo cual significa que:",
    opciones: [
      "No nos importa el estado del paciente",
      "Carecemos de recursos económicos en los hospitales",
      "Ahorramos energía mental empleando esquemas y atajos (heurísticos) en nuestra práctica diaria",
      "Tratamos de retener información financiera del sistema de salud"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "modelos_salud_mental"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "31. Una de las diferencias entre el Modelo Médico (biomédico) y el Modelo Enfermero es que este último:",
    opciones: [
      "Busca la etiología exacta de la enfermedad",
      "Se dirige casi en exclusividad a la curación total anatómica",
      "Proporciona cuidados holísticos priorizando la promoción de la salud y la adaptación",
      "Rechaza el uso de cualquier herramienta farmacológica"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "modelos_salud_mental"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "32. El Modelo de Enfermería Psiquiátrica de Hildegard Peplau define varias fases en la relación terapéutica. ¿En qué fase se produce la 'priorización de problemas a través de una entrevista estructurada'?",
    opciones: [
      "Fase de Resolución",
      "Fase de Identificación",
      "Fase de Aprovechamiento",
      "Fase de Orientación"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "relacion_terapeutica"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "33. La 'Disonancia Cognitiva' inducida como herramienta de educación sanitaria sirve para:",
    opciones: [
      "Confundir al paciente para que pierda su autonomía",
      "Potenciar el autocuidado mostrando al paciente la incompatibilidad entre lo que quiere lograr y su conducta insana actual",
      "Provocar un brote psicótico y evaluar su resistencia",
      "Ninguna es correcta"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "relacion_terapeutica"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "34. Dentro de las 5 necesidades fundamentales en la práctica de la salud mental, encontramos (señale la FALSA):",
    opciones: [
      "Seguridad",
      "Comunicarse (Socialización)",
      "Dependencia absoluta del profesional",
      "Trabajar y realizarse (rol social)"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "relacion_terapeutica"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "35. En la técnica de entrevista, ¿cómo se denomina al recurso que consiste en 'desenmascarar estrategias (intelectualizaciones, negación) que utiliza el paciente para huir de su autocomprensión'?",
    opciones: [
      "Paráfrasis",
      "Confrontación",
      "Clarificación",
      "Frases por repetición"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "relacion_terapeutica"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "36. En el sistema de clasificación DSM-5 (y en el esquema multiaxial clásico), el Eje IV está destinado a clasificar:",
    opciones: [
      "Trastornos clínicos agudos",
      "Problemas psicosociales y ambientales (vivienda, laborales, legales...)",
      "Enfermedades médicas o físicas crónicas",
      "Trastornos de la personalidad y discapacidad intelectual"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "37. El ámbito de actuación de la enfermera en Salud Mental abarca 3 niveles de prevención. La 'rehabilitación psicosocial' del paciente tras la enfermedad pertenece a:",
    opciones: [
      "Prevención Primaria",
      "Prevención Secundaria",
      "Prevención Terciaria",
      "Prevención Cuaternaria"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "38. Según las '5 C de la atención' que deben regir el trabajo en las unidades de salud mental, encontramos: Compromiso, Compasión, Competencia, Confianza y...",
    opciones: [
      "Conformismo",
      "Coerción",
      "Conciencia",
      "Control"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "relacion_terapeutica"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "39. En relación con el desgaste del profesional en SM, 'la afirmación de la manipulación por la cual el profesional asume el rol de criado del paciente' se conoce como:",
    opciones: [
      "Codependencia",
      "Síndrome de Burnout",
      "Trastorno facticio",
      "Fuga disociativa"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "relacion_terapeutica"
  },
  {
    asignatura: "salud_mental",
    tema: 2,
    pregunta: "40. Cuando definimos 'la expresión positiva del equilibrio psicológico, emocional y comportamental de un individuo', nos estamos refiriendo de forma holística al concepto de:",
    opciones: [
      "Locus de Control Externo",
      "Salud Mental",
      "Distimia reactiva",
      "Esquema heurístico limitante"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  // ==========================================
  // TEMA 3: BASES NEUROBIOLÓGICAS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "41. Según las funciones de los hemisferios cerebrales, el pensamiento numérico, analítico (pensamiento vertical) y la codificación del lenguaje se asocian principalmente al:",
    opciones: [
      "Hemisferio derecho",
      "Hemisferio izquierdo",
      "Cerebelo",
      "Troncoencéfalo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "42. El lóbulo cerebral encargado de la planificación, el juicio, la personalidad y el 'insight' o autocrítica (fundamental para tener conciencia de enfermedad mental) es el:",
    opciones: [
      "Lóbulo occipital",
      "Lóbulo parietal",
      "Lóbulo temporal",
      "Lóbulo frontal"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "43. Las alteraciones en el lóbulo temporal (encargado de la percepción auditiva, aprendizaje y lenguaje) pueden desencadenar problemas severos de comunicación. ¿Qué patología se asocia típicamente a daños en esta área?",
    opciones: [
      "Afasia (receptiva o expresiva)",
      "Ataxia severa",
      "Parkinsonismo",
      "Ceguera cortical"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "44. Las estructuras iniciales profundas del cerebro (encéfalo, mesencéfalo y médula espinal) conforman la base de la conducta refleja y de supervivencia. ¿Con qué nombre informal se conoce a esta base?",
    opciones: [
      "Cerebro límbico",
      "Cerebro racional",
      "Cerebro reptiliano",
      "Neocórtex"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "45. La síntesis principal de dopamina, neurotransmisor fuertemente implicado en el Parkinson y la Esquizofrenia, se realiza a nivel del:",
    opciones: [
      "Mesencéfalo",
      "Bulbo raquídeo",
      "Hipocampo",
      "Cerebelo"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "46. En la formación reticular, el Sistema Activador Reticular Ascendente (SARA) desempeña un papel clave en la salud mental al estar directamente relacionado con:",
    opciones: [
      "La codificación visual periférica",
      "El control del equilibrio y la ataxia",
      "La motivación, la atención subconsciente (metaatención) y el filtro de estímulos",
      "La síntesis de cortisol y adrenalina"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "47. La afectación del cerebelo, comúnmente vinculada a la malnutrición y al abuso crónico de alcohol (déficit de Tiamina B1), puede provocar una alteración motora ocular conocida como:",
    opciones: [
      "Cataratas precoces",
      "Nistagmo",
      "Glaucoma",
      "Hemianopsia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "48. Dentro del sistema límbico, ¿qué estructura está específicamente relacionada con el comportamiento agresivo y el control de la ira?",
    opciones: [
      "Amígdala cerebral",
      "Septum pellucidum",
      "Hipotálamo",
      "Tálamo"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "49. El Septum pellucidum es el centro del sistema de recompensa y sensación de placer. ¿Qué sustancia psicoactiva lo estimula de forma directa y activa?",
    opciones: [
      "Litio",
      "Cocaína",
      "Benzodiacepinas",
      "Antidepresivos tricíclicos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "50. Respecto a la neurotransmisión, la unidad funcional de alerta que se encarga de regular el ciclo sueño-vigilia está estrechamente controlada por el:",
    opciones: [
      "Sistema Nervioso Autónomo (SNA)",
      "Sistema Nervioso Somático",
      "Sistema Límbico posterior",
      "Sistema extrapiramidal"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "51. Según la clasificación por unidades de información del cerebro, la unidad que se encarga de la percepción (reconocer) y el almacén (memoria) es la:",
    opciones: [
      "Unidad Primaria",
      "Unidad Secundaria",
      "Unidad Terciaria",
      "Unidad Cuaternaria"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "52. ¿Qué neurotransmisor monoamina se encuentra TÍPICAMENTE aumentado en los brotes activos de esquizofrenia y disminuido en la depresión clínica?",
    opciones: [
      "Acetilcolina",
      "GABA",
      "Glutamato",
      "Dopamina"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "53. La Serotonina (5-HT) es un modulador fundamental del estado de ánimo. ¿En qué grupo de trastornos psiquiátricos encontramos típicamente DISMINUIDOS sus niveles?",
    opciones: [
      "Depresión, ansiedad y Trastorno Obsesivo Compulsivo (TOC)",
      "Esquizofrenia paranoide activa",
      "Delirium tremens",
      "Trastornos de personalidad del Grupo A"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "54. El ácido gamma-aminobutírico (GABA) es el principal neurotransmisor inhibidor del cerebro. Sus niveles se encuentran habitualmente:",
    opciones: [
      "Aumentados drásticamente en la esquizofrenia",
      "Disminuidos en los estados de ansiedad grave",
      "Aumentados en la manía aguda",
      "Inalterados en las patologías psiquiátricas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "55. El área motora del lenguaje, fundamental para la expresión verbal, se encuentra alojada en el lóbulo frontal y se denomina:",
    opciones: [
      "Área de Wernicke",
      "Área de Broca",
      "Área de Brodmann 17",
      "Cisura de Rolando"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "56. El lóbulo encargado de procesar la sensación táctil, la presión, la temperatura, y de construir la imagen corporal (área somestésica) es el:",
    opciones: [
      "Lóbulo Frontal",
      "Lóbulo Parietal",
      "Lóbulo Temporal",
      "Lóbulo Occipital"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "57. ¿Qué neurotransmisor está directamente implicado en el control de la apertura de canales de calcio y cuya alteración tóxica se asocia a la enfermedad de Huntington y al Alzheimer?",
    opciones: [
      "Dopamina",
      "Noradrenalina",
      "Acetilcolina",
      "Glutamato"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "58. El proceso fisiológico por el cual nuestro cerebro es capaz de formar nuevas neuronas a lo largo de la vida, un concepto vital para la recuperación en salud mental, se denomina:",
    opciones: [
      "Neuroplasticidad",
      "Neurogénesis",
      "Mielogénesis",
      "Sinaptogénesis"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "59. Cuando hay una disminución crónica de Acetilcolina (ACo) en la corteza cerebral, ¿qué enfermedades neurodegenerativas están más frecuentemente asociadas?",
    opciones: [
      "Ansiedad y ataques de pánico",
      "Esquizofrenia y bipolaridad",
      "Enfermedad de Parkinson y Alzheimer",
      "Trastornos de la conducta alimentaria"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 3,
    pregunta: "60. El cruce de las fibras motoras y el control de funciones orgánicas básicas e instintivas de supervivencia (respiración, presión arterial, frecuencia cardíaca, vómito) se regula en el:",
    opciones: [
      "Cerebelo",
      "Bulbo raquídeo",
      "Hipocampo",
      "Hipotálamo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },

  // ==========================================
  // TEMA 4: ESQUIZOFRENIA Y PSICOSIS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "61. En la valoración observacional inicial de un posible paciente esquizofrénico en urgencias o consultas, la enfermería puede guiarse por la 'regla nemotécnica de las 3C', que incluye:",
    opciones: [
      "Conducta violenta, Confusión y Catatonía",
      "Caminar rápido/cabizbajo, Cafeína (estimulantes) y Colillas (tabaco)",
      "Crisis agudas, Convulsiones y Clínicas atípicas",
      "Comer compulsivamente, Clinofilia y Consumo de opiáceos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "62. Epidemiológicamente, la esquizofrenia se diagnostica con mayor frecuencia en la adolescencia y edad adulta temprana. En cuanto al género y pronóstico, es correcto afirmar que:",
    opciones: [
      "En los hombres el diagnóstico suele ser más precoz, pero con un curso mucho más benigno",
      "En mujeres aparece más tardíamente (>40 años) y suele cursar de forma más benigna",
      "Afecta exclusivamente a hombres en un 90% de los casos mundiales",
      "El pronóstico no varía entre sexos, siendo idéntico en letalidad"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "63. El curso evolutivo clásico de la esquizofrenia atraviesa diferentes etapas. La fase en la que se realizan la mayoría de diagnósticos por la floridez de la clínica psicótica es la:",
    opciones: [
      "Fase premórbida",
      "Fase prodrómica",
      "Fase activa",
      "Fase residual"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "64. En la fase residual de la esquizofrenia (que tiende a acompañar al paciente durante gran parte de su vida), los síntomas que predominan y marcan la cronicidad son:",
    opciones: [
      "Alucinaciones floridas",
      "Los síntomas negativos (abulia, apatía, anhedonia)",
      "Delirios de persecución aguda",
      "Agitación psicomotriz severa"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "65. Cuando un paciente responde a la pregunta de la enfermera '¿qué tal has dormido?' con una respuesta del tipo 'las flores del campo son de color rosa', está presentando un trastorno formal del pensamiento denominado:",
    opciones: [
      "Circunstancialidad",
      "Fuga de ideas",
      "Tangencialidad",
      "Descarrilamiento"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "66. Según la clasificación de Andreasen para la esquizofrenia, la falta de motivación intrínseca para marcarse planes o metas a largo plazo (no encontrar sentido a las cosas) se define clínicamente como:",
    opciones: [
      "Alogia",
      "Anhedonia",
      "Abulia",
      "Apatía plana"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "67. ¿Cuáles son las alucinaciones más frecuentes y patognomónicas en el transcurso clínico de la esquizofrenia?",
    opciones: [
      "Olfativas y gustativas",
      "Visuales complejas (ver personas o animales)",
      "Auditivas (voces que insultan o dan órdenes) y, en menor medida, visuales",
      "Táctiles (sentir insectos bajo la piel)"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "68. En relación a la mortalidad de la esquizofrenia, la tasa de suicidio consumado (frecuentemente asociado a depresión concomitante) respecto a la población general es:",
    opciones: [
      "Igual a la de la población general",
      "De 5 a 6 veces mayor",
      "Prácticamente nula debido a la apatía",
      "De 20 veces mayor en fase prodrómica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "69. Paciente que acude a urgencias por la creencia firme e irreductible a la lógica de que un vecino le está envenenando el agua. Tras evaluarlo, el psiquiatra no encuentra alucinaciones, ni desorganización del pensamiento, ni clínica negativa asociada, y el paciente mantiene su funcionalidad social intacta. Hablamos de:",
    opciones: [
      "Trastorno psicótico breve",
      "Esquizofrenia paranoide pura",
      "Trastorno delirante",
      "Trastorno esquizoafectivo"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "70. Un Trastorno Psicótico Breve se caracteriza temporalmente en el DSM-5 por la presencia de clínica psicótica positiva durante:",
    opciones: [
      "Menos de 24 horas",
      "Al menos 1 día y menos de 1 mes, con remisión total",
      "Al menos 1 mes y menos de 6 meses",
      "Más de 6 meses"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "71. Si los síntomas psicóticos característicos de una esquizofrenia (delirios, alucinaciones, desorganización) están presentes de forma ininterrumpida entre 1 y 6 meses, el diagnóstico provisional correcto será:",
    opciones: [
      "Trastorno esquizotípico de la personalidad",
      "Esquizofrenia residual",
      "Trastorno esquizofreniforme",
      "Trastorno bipolar con síntomas psicóticos"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "72. Un paciente tratado crónicamente con el antipsicótico atípico Clozapina precisa controles analíticos periódicos obligatorios por parte de enfermería debido al riesgo vital de desarrollar:",
    opciones: [
      "Insuficiencia renal aguda",
      "Agranulocitosis mortal (neutropenia severa)",
      "Cirrosis hepática fulminante",
      "Derrame pericárdico"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "73. El Síndrome Neuroléptico Maligno es una urgencia vital psiquiátrica derivada del uso de fármacos antipsicóticos. ¿Cuál es su triada sintomática clásica de inestabilidad autónoma?",
    opciones: [
      "Hipotermia, flacidez muscular e hiperglucemia",
      "Fiebre muy alta, rigidez muscular severa (en tubo de plomo) y estado mental alterado",
      "Temblor intencional, ataxia y nistagmo",
      "Acatisia, visión borrosa y poliuria"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "74. Durante la pauta de haloperidol (antipsicótico típico), el paciente comienza a quejarse de una intensa necesidad imperiosa e interna de moverse, siendo incapaz de permanecer sentado o quieto. Este síntoma extrapiramidal se conoce como:",
    opciones: [
      "Distonía aguda",
      "Discinesia tardía",
      "Acatisia",
      "Pseudoparkinsonismo"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "75. Al realizar el Proceso de Atención de Enfermería (PAE) en un paciente con esquizofrenia en fase activa con paranoia, el diagnóstico NANDA de prioridad máxima suele ser:",
    opciones: [
      "Déficit de actividades recreativas",
      "Riesgo de violencia (hacia sí mismo o hacia los demás)",
      "Alteración del patrón del sueño",
      "Aislamiento social crónico"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "76. Cuando hablamos de 'Patología Dual' referida a un paciente con trastorno del espectro esquizofrénico, nos referimos a la coexistencia de este cuadro clínico con:",
    opciones: [
      "Un trastorno de la conducta alimentaria (ej. anorexia)",
      "Un trastorno de ansiedad social subyacente",
      "Una adicción o trastorno por consumo de sustancias y drogas",
      "Una enfermedad médica terminal"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "77. Según el DSM-5, los síntomas puramente 'cognitivos' de la esquizofrenia (que interfieren fuertemente en el tratamiento) abarcan alteraciones en las funciones ejecutivas. Un ejemplo clínico de esto sería:",
    opciones: [
      "La creencia de que le roban los pensamientos (robo de pensamiento)",
      "La incapacidad para automonitorizar y evaluar sus propios errores, o la falta de habilidad para diseñar planes",
      "El mutismo y estupor catatónico prolongado",
      "La falta completa de higiene corporal por desidia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "78. El Trastorno Esquizoafectivo, que tiene una prevalencia del 0,3% y afecta mayoritariamente a las mujeres, se define por combinar episodios psicóticos típicos de esquizofrenia con:",
    opciones: [
      "Graves ataques de pánico y agorafobia concurrente",
      "Sintomatología de la esfera afectiva (como episodios depresivos mayores o maníacos/bipolares)",
      "Múltiples fugas disociativas y amnesia localizada",
      "Síntomas somatomorfos y de conversión severa"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "79. La 'Alogia' en la esquizofrenia se considera un síntoma negativo que se caracteriza clínicamente por:",
    opciones: [
      "La disminución o falta de percepción de placer en la vida diaria",
      "La pobreza del lenguaje y del contenido del discurso del paciente",
      "El comportamiento excéntrico o extravagante en la forma de vestir",
      "El exceso de movimientos involuntarios sin finalidad clara"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  {
    asignatura: "salud_mental",
    tema: 4,
    pregunta: "80. En psiquiatría, la alteración del nivel de conciencia que cursa con pausas prolongadas de inmovilidad total (mutismo, estupor o negativismo frente a las órdenes) asociado en ocasiones al espectro esquizofrénico, recibe el nombre de:",
    opciones: [
      "Acatisia",
      "Anergia física",
      "Catatonía",
      "Anhedonia social"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia"
  },
  // ==========================================
  // TEMA 5: TRASTORNO BIPOLAR Y RELACIONADOS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "81. La sintomatología clásica de un episodio maníaco incluye:",
    opciones: [
      "Aumento de autoestima, necesidad aumentada de dormir y bradipsiquia",
      "Aumento de autoestima, disminución de la necesidad de dormir, verborrea y fuga de ideas",
      "Apatía profunda, mutismo, clinofilia y fuga de ideas",
      "Tristeza vital, hiperfagia y agitación psicomotora"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "82. En relación al Trastorno Bipolar Tipo I, basándonos en los criterios diagnósticos, señale la afirmación CORRECTA:",
    opciones: [
      "Requiere la presencia obligatoria de al menos un episodio de depresión mayor",
      "Se caracteriza por la presencia de episodios maníacos, pudiendo o no haber depresión mayor e hipomanía",
      "Nunca cursa con episodios maníacos completos, solo con hipomanía",
      "Debe existir un curso crónico de al menos 2 años ininterrumpidos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "83. En el Trastorno Bipolar Tipo II, la característica clínica definitoria respecto a los episodios es:",
    opciones: [
      "Presenta episodios de depresión mayor e hipomanía, pero NUNCA episodios maníacos",
      "Presenta episodios maníacos severos sin episodios depresivos",
      "Es indistinguible clínicamente del trastorno ciclotímico",
      "Solo presenta episodios de hipomanía crónica sin llegar a la depresión"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "84. El trastorno ciclotímico se diagnostica cuando un paciente presenta períodos de síntomas hipomaníacos y depresivos (sin llegar a depresión mayor) durante un período mínimo de:",
    opciones: [
      "6 meses en adultos",
      "1 año en adultos y 6 meses en niños",
      "2 años en adultos (1 año en niños y adolescentes)",
      "5 años ininterrumpidos"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "85. Epidemiológicamente, el trastorno ciclotímico tiene una prevalencia del 0,4-1% y afecta a hombres y mujeres en una proporción de:",
    opciones: [
      "Afecta mucho más a mujeres (3:1)",
      "Afecta mucho más a hombres (4:1)",
      "Afecta por igual a ambos géneros (1:1)",
      "Afecta exclusivamente a varones en la pubertad"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "86. ¿Qué porcentaje de pacientes con trastorno ciclotímico terminan desarrollando un Trastorno Bipolar Tipo I o Tipo II?",
    opciones: [
      "Menos del 5%",
      "Entre el 15% y el 50%",
      "Aproximadamente el 90%",
      "El 100%, ya que es una fase prodrómica obligatoria"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "87. En el tratamiento del trastorno bipolar, es frecuente el uso de sales de Litio. Según los apuntes, ¿qué complicación de toxicidad resalta que debe vigilar enfermería mediante analíticas sanguíneas si el paciente se pasa de los niveles de Litio?",
    opciones: [
      "Afectación hepática",
      "Úlcera gástrica",
      "Agranulocitosis",
      "Cardiopatía isquémica"
    ],
    correcta: 0, // Nota: El apunte dice literalmente "Paciente pasado de niveles de Li: afectación hepática"
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "88. Al aplicar el Proceso de Atención de Enfermería (PAE) en el Trastorno Bipolar, ¿qué diagnóstico NANDA se relaciona con la falta de habilidades para preparar alimentos?",
    opciones: [
      "NANDA 00079: Incumplimiento del tratamiento",
      "NANDA 00055: Desempeño ineficaz del rol",
      "NANDA 00074: Afrontamiento familiar comprometido",
      "NANDA 00100: Riesgo de cansancio del rol de cuidador"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "89. ¿Qué diagnóstico NANDA se asocia a la reagudización de la enfermedad manifestado por las verbalizaciones y la falta de conciencia de la enfermedad?",
    opciones: [
      "NANDA 00055: Desempeño ineficaz del rol",
      "NANDA 00074: Afrontamiento familiar comprometido",
      "NANDA 00079: Incumplimiento",
      "NANDA 00130: Trastorno de los procesos de pensamiento"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "90. La clínica maníaca puede presentar síntomas similares a los del espectro de la esquizofrenia. Un ejemplo clásico mencionado de esto es:",
    opciones: [
      "La aparición de delirios o creencias erróneas (ej. creer estar embarazada de mellizos sin estarlo)",
      "El desarrollo de un síndrome neuroléptico maligno espontáneo",
      "La presencia de alogia y abulia severas",
      "La pérdida total de la memoria a corto plazo"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "91. Para el diagnóstico de Trastorno Bipolar y trastorno relacionado inducido por sustancias, se requiere evidenciar que los síntomas maníacos aparecieron:",
    opciones: [
      "Años antes del inicio del consumo de cualquier sustancia",
      "Durante o poco después de la intoxicación o abstinencia de una sustancia/medicamento",
      "Exclusivamente durante un cuadro de delirium orgánico",
      "En ausencia total de consumo o contacto con sustancias psicoactivas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "92. Respecto al factor genético en los trastornos bipolares, ¿cuánto se multiplica el riesgo de padecerlo si existen antecedentes familiares?",
    opciones: [
      "No existe componente genético en la bipolaridad",
      "El riesgo se multiplica por 2",
      "El riesgo se multiplica por 6,5",
      "El riesgo se multiplica por 20"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "93. El diagnóstico NANDA 00074 (Afrontamiento familiar comprometido) en el contexto de un trastorno bipolar se relaciona directamente con:",
    opciones: [
      "La curación milagrosa del paciente",
      "La prolongación de la enfermedad y la compresión inadecuada de la información por la persona de referencia",
      "La falta de adherencia al Litio exclusivamente",
      "El exceso de habilidades culinarias de la familia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "94. Uno de los aspectos clave a valorar por enfermería durante la hospitalización de un paciente en fase maníaca, debido a su impulsividad y grandiosidad, es:",
    opciones: [
      "Exigirle que estudie y lea libros complejos",
      "El riesgo de participación excesiva en actividades con consecuencias dolorosas y el riesgo suicida autolítico",
      "Favorecer su desinhibición animándole a gastar dinero para subirle la moral",
      "Rechazar cualquier comunicación verbal con él hasta que se calme"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "95. En la clasificación de los trastornos bipolares, ¿cuál de ellos NO presenta JAMÁS un episodio de depresión mayor según la tabla diagnóstica?",
    opciones: [
      "El Trastorno Bipolar Tipo I",
      "El Trastorno Bipolar Tipo II",
      "El Trastorno Ciclotímico",
      "El Trastorno Esquizoafectivo"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "96. Si la alteración importante del estado de ánimo (elevado y expansivo) es consecuencia fisiopatológica directa de una enfermedad somática (ej. hipertiroidismo), el diagnóstico DSM correcto es:",
    opciones: [
      "Trastorno ciclotímico grave",
      "Trastorno bipolar y relacionado debido a otra afección médica",
      "Trastorno psicótico breve",
      "Delirium agudo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "97. El Trastorno Bipolar presenta una alta comorbilidad asociada a otros trastornos. Según el temario, destacan especialmente:",
    opciones: [
      "Trastornos alimentarios como la pica",
      "Sustancias, trastornos del sueño y TDAH",
      "Trastornos parafílicos como el exhibicionismo",
      "Fugas disociativas amnésicas recurrentes"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "98. La enfermería en salud mental, al tratar pacientes con patología bipolar, debe priorizar la evaluación de:",
    opciones: [
      "La conciencia de enfermedad (insight)",
      "La adherencia farmacológica (ej. Litio)",
      "Las necesidades y patrones de cuidado",
      "Todas las respuestas anteriores son correctas y prioritarias"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "99. Durante la fase maníaca, la 'fuga de ideas' se define de forma observacional como:",
    opciones: [
      "La pérdida total de la memoria autobiográfica",
      "Un salto rápido y continuo de un tema a otro durante el discurso, a menudo basado en estímulos superficiales",
      "La creencia de que le han robado sus pensamientos",
      "El mutismo selectivo frente a figuras de autoridad"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 5,
    pregunta: "100. En pacientes que presentan alteraciones bipolares con 'ciclos rápidos', nos referimos a:",
    opciones: [
      "Que cambian de opinión rápidamente sobre qué comer",
      "Una especificidad clínica donde se alternan frecuentemente los episodios a lo largo de un año",
      "Que los fármacos se metabolizan demasiado rápido a nivel hepático",
      "Un tipo de trastorno exclusivo de la infancia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },

  // ==========================================
  // TEMA 6: TRASTORNOS DEPRESIVOS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "101. En la clasificación del estado de ánimo, la contraposición entre dos polos diferentes (triste vs desagradable/molesto) se denomina:",
    opciones: [
      "Estado eutímico",
      "Estado disfórico",
      "Estado expansivo",
      "Estado lábil"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "102. Epidemiológicamente, los trastornos depresivos presentan su pico de mayor susceptibilidad de aparición:",
    opciones: [
      "En la infancia temprana (< 5 años)",
      "En la pubertad y edad adulta temprana (entre los 20 y 40 años)",
      "Exclusivamente en la senectud (> 70 años)",
      "Durante la menopausia únicamente"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "103. Respecto al estado civil y la depresión, ¿en qué perfiles demográficos es MÁS prevalente según los datos epidemiológicos de los apuntes?",
    opciones: [
      "En mujeres viudas y hombres casados",
      "En mujeres casadas (frente a viudas/divorciadas) y en hombres solteros (frente a casados)",
      "En mujeres solteras y hombres viudos",
      "La prevalencia es idéntica independientemente del género y estado civil"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "104. El fenómeno de 'Kindling' o sensibilización en la depresión se refiere a:",
    opciones: [
      "Un efecto secundario cardíaco de los antidepresivos tricíclicos",
      "La reactivación continua de estructuras cognitivas negativas que fortalece las redes asociativas depresotípicas, aumentando la recurrencia",
      "La pérdida total de la líbido y la anhedonia asociada",
      "La curación espontánea del episodio tras 6 meses"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "105. El Trastorno de desregulación depresiva del estado de ánimo se caracteriza por accesos de cólera desproporcionados e irruptivos. Para su diagnóstico, DEBE realizarse:",
    opciones: [
      "Antes de los 6 años",
      "Entre los 6 y los 18 años",
      "Después de los 18 años",
      "Exclusivamente en adultos mayores"
    ],
    correcta: 1, // Se diagnostica después de los 6 y antes de los 18
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "106. El Trastorno Depresivo Persistente o 'Distimia' requiere, para su diagnóstico en adultos, que los síntomas estén presentes durante un mínimo de:",
    opciones: [
      "2 meses",
      "6 meses",
      "1 año",
      "2 años"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "107. El Trastorno Disfórico Premenstrual presenta una prevalencia del 1,8-5,8% y se caracteriza por la aparición de síntomas afectivos graves (labilidad, irritabilidad). ¿Cuándo deben aparecer estos síntomas?",
    opciones: [
      "Durante la semana posterior a la menstruación",
      "En la semana previa al inicio de la menstruación (desapareciendo días después de su inicio)",
      "Durante el período de ovulación exclusivamente",
      "De forma crónica y constante todos los días del mes"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "108. Los fármacos inhibidores de la monoaminooxidasa (IMAO), como la Fenelcina, tienen un riesgo vital si interactúan con la tiramina. Por tanto, enfermería debe educar al paciente para que NO consuma:",
    opciones: [
      "Verduras frescas y pescados blancos",
      "Quesos fermentados, embutidos, aguacate, plátano y vino tinto",
      "Leche desnatada y pan integral",
      "Cereales, legumbres tiernas y aceite de oliva"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "109. ¿Cuál de los siguientes fármacos antidepresivos es un tetracíclico/específico serotoninérgico que frecuentemente se toma por la noche debido a su efecto secundario beneficioso de inducción al sueño?",
    opciones: [
      "Fluoxetina",
      "Mirtazapina",
      "Bupropión",
      "Citalopram"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "110. En el contexto clínico, la tristeza normal frente al duelo se diferencia del Trastorno de Depresión Mayor en que este último:",
    opciones: [
      "No afecta a la concentración ni al apetito",
      "La persona quiere desaparecer por sentimientos de inutilidad e incapacidad de reconocerse, no para 'reunirse' con el fallecido",
      "Suele curarse con la ingesta de benzodiacepinas en una semana",
      "Presenta alucinaciones de grandeza placenteras"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "111. Al valorar el riesgo suicida en un paciente deprimido, la herramienta mnemotécnica o escala mencionada en los apuntes para la valoración sistemática es:",
    opciones: [
      "Escala de NORTON",
      "Acrónimo PLUTCHICK",
      "Escala de GLASGOW",
      "Escala de BRADEN"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "112. Entre los diagnósticos de enfermería (NANDA) específicos y de mayor relevancia a vigilar en el paciente con depresión encontramos:",
    opciones: [
      "Desesperanza, impotencia y riesgo de violencia autodirigida",
      "Exceso de volumen de líquidos y deterioro de la movilidad",
      "Riesgo de infección y dolor agudo",
      "Despeje ineficaz de las vías aéreas"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "113. La Terapia Electroconvulsiva (TEC) está indicada médicamente y se emplea como opción terapéutica eficaz en:",
    opciones: [
      "Depresiones leves reactivas al estrés laboral",
      "Distimias crónicas de más de 10 años sin riesgo suicida",
      "Depresiones graves con síntomas psicóticos, riesgo inminente de suicidio o refractarias a la psicofarmacología",
      "Cualquier trastorno de ansiedad con agorafobia"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "114. En un Trastorno de Duelo Patológico, si aparece ideación suicida, la motivación o sentimiento psicopatológico que rige este pensamiento a diferencia de la depresión clásica suele ser:",
    opciones: [
      "El deseo de castigar económicamente a los familiares supervivientes",
      "El sentimiento de que le falló al fallecido y el deseo de suicidarse para reunirse con esa persona perdida",
      "El desarrollo de un delirio persecutorio inducido",
      "La sensación de inutilidad general frente a su jefe de trabajo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "115. El Bupropión es un antidepresivo que, por su mecanismo de acción, se engloba dentro de los:",
    opciones: [
      "Inhibidores selectivos de la recaptación de serotonina (ISRS)",
      "Inhibidores de la recaptación de noradrenalina y dopamina (IRND)",
      "Inhibidores de la monoaminooxidasa tipo A (IMAO-A)",
      "Antidepresivos tricíclicos clásicos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "116. Entre las intervenciones de enfermería en el plan de cuidados para pacientes con trastornos afectivos depresivos se incluye:",
    opciones: [
      "Fomentar el aislamiento en habitación oscura para evitar estímulos",
      "Infundir esperanza, realizar reestructuración cognitiva y reforzar la autoestima",
      "Permitir que el paciente duerma 18 horas al día para descansar el cerebro",
      "Confrontar sus ideas suicidas retándole a ejecutarlas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "117. ¿Cuántos síntomas primarios depresivos tienen que aparecer de forma concurrente, al menos durante 2 semanas, para cumplir criterio diagnóstico estricto de Trastorno Depresivo Mayor?",
    opciones: [
      "2 o más síntomas",
      "5 o más síntomas",
      "Todos los posibles síntomas sin excepción",
      "Basta con 1 síntoma severo de anhedonia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "118. ¿Cuál de los siguientes fármacos pertenece a la familia de los Inhibidores Selectivos de la Recaptación de Serotonina (ISRS)?",
    opciones: [
      "Duloxetina",
      "Fluoxetina",
      "Trazodona",
      "Isocarboxacida"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "119. La recurrencia de la depresión mayor es muy alta. Estadísticamente, una vez que el paciente ha sufrido más de dos episodios, ¿cuál es la probabilidad aproximada de sufrir otra recurrencia?",
    opciones: [
      "10-20%",
      "30-40%",
      "50%",
      "80-90%"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  {
    asignatura: "salud_mental",
    tema: 6,
    pregunta: "120. Entre los fármacos que pueden inducir sintomatología depresiva secundaria (Trastorno depresivo inducido por sustancias/medicamentos) encontramos aquellos que cursan con un efecto de 'rebote' o síndrome de abstinencia, típicamente:",
    opciones: [
      "Los antibióticos macrólidos",
      "Las vitaminas del complejo B",
      "El alcohol, la cocaína, los sedantes y los ansiolíticos",
      "El paracetamol y los AINEs"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_animo"
  },
  // ==========================================
  // TEMA 7: TRASTORNOS DE ANSIEDAD
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "121. Según los apuntes, ¿cuál es la principal diferencia conceptual entre la 'Ansiedad' y la 'Angustia'?",
    opciones: [
      "La ansiedad es el proceso mental interno, mientras que la angustia es la ansiedad exteriorizada (variable somática con signos observables)",
      "La angustia es un proceso netamente cognitivo y la ansiedad es puramente muscular",
      "No existe diferencia, ambos términos son sinónimos absolutos en psiquiatría",
      "La ansiedad siempre es patológica y la angustia es un mecanismo normal de supervivencia"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "122. El temor que surge como consecuencia de que los impulsos se salgan de control y lleven al sujeto a cometer un acto por el que será castigado, se denomina:",
    opciones: [
      "Ansiedad de realidad",
      "Ansiedad neurótica",
      "Ansiedad moral",
      "Ansiedad somática"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "123. ¿Cuál de los siguientes se considera un síntoma 'motor u observable' de la ansiedad y NO un síntoma cognitivo/subjetivo?",
    opciones: [
      "La aprehensión al futuro",
      "La sensación de pérdida de control",
      "El tartamudeo y las conductas de evitación",
      "La dificultad para tomar decisiones"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "124. En relación al uso de los mecanismos de adaptación inconscientes (compensación, negación, sublimación...), se considera que una persona está en estado de ENFERMEDAD (uso patológico) cuando:",
    opciones: [
      "Utiliza todos los mecanismos de forma rotatoria",
      "Utiliza 2 o menos de 2 de estos mecanismos de forma rígida",
      "Utiliza más de 4 mecanismos simultáneamente",
      "Solo utiliza la técnica consciente de la relajación"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "125. El Trastorno de Ansiedad por Separación se diagnostica cuando existe un miedo excesivo y persistente a estar solo o alejado de la figura de apego durante un período mínimo de:",
    opciones: [
      "1 semana en niños y 2 meses en adultos",
      "2 semanas en niños y 3 meses en adultos",
      "4 semanas en niños y 6 o más meses en el adulto",
      "6 meses en niños y 1 año en adultos"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "126. El 'Mutismo Selectivo' es un trastorno de ansiedad caracterizado por el fracaso constante para hablar en situaciones sociales específicas. Para su diagnóstico debe durar un mínimo de:",
    opciones: [
      "2 semanas",
      "1 mes (y no debe coincidir exclusivamente con el primer mes de escolarización)",
      "6 meses ininterrumpidos",
      "1 año completo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "127. El Trastorno de Ansiedad Social (Fobia Social) se relaciona frecuentemente con un sesgo cognitivo que hace creer al individuo que los demás notan enormemente su nerviosismo. ¿Cómo se denomina este sesgo?",
    opciones: [
      "Catastrofismo inminente",
      "Ilusión de transparencia",
      "Sesgo de impacto somático",
      "Pensamiento contrafáctico"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "128. En el Trastorno de Pánico, la sensación previa de anticipación al 'displacer' donde el paciente experimenta ideas de que está muriendo de forma inminente se denomina:",
    opciones: [
      "Estupor ansioso",
      "Aura de pánico",
      "Flashback disociativo",
      "Desrealización primaria"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "129. Para poder diagnosticar clínicamente 'Agorafobia', el paciente debe presentar miedo o ansiedad intensa frente a un mínimo de:",
    opciones: [
      "1 situación social de exposición",
      "2 o más situaciones (ej: uso de transporte, espacios abiertos, espacios cerrados, estar solo fuera de casa...)",
      "4 o más situaciones combinadas con fobias animales",
      "Todas las situaciones al aire libre de forma excluyente"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "130. El Trastorno de Ansiedad Generalizada (TAG) se caracteriza por preocupación excesiva y aprensión incontrolable que debe durar, como mínimo:",
    opciones: [
      "Más de 6 meses (más días presente que ausente)",
      "3 meses tras un evento estresante",
      "1 mes con ataques de pánico intercalados",
      "1 año ininterrumpido en la infancia"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "131. A nivel neurobiológico, la cascada del estrés y la ansiedad comienza con la estimulación de la amígdala y el hipocampo, lo que activa el eje hipotalámico-hipofisario culminando en la secreción en la corteza suprarrenal de:",
    opciones: [
      "Melatonina",
      "Serotonina",
      "Cortisol",
      "Tiroxina"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "132. Los niveles altos de cortisol derivados de un cuadro de estrés o ansiedad crónica pueden inmunodeprimir al paciente afectando a las células NK, pero también provocando cambios físicos o hipertrofia en estructuras linfoideas como:",
    opciones: [
      "El hígado y la vesícula biliar",
      "El timo y el bazo",
      "El páncreas y las glándulas suprarrenales",
      "El hipotálamo y la hipófisis posterior"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_neurobiologicas"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "133. En la fase AGUDA (durante una crisis) de los cuidados de enfermería ante un ataque de ansiedad, ¿qué intervención es INCORRECTA y está contraindicada?",
    opciones: [
      "Proporcionar un entorno seguro y prevenir autolesiones",
      "Retar al paciente y mantener la mirada fija de forma desafiante para 'despertarlo'",
      "Mantener el entorno con bajo nivel de estimulación",
      "Utilizar una comunicación verbal sencilla y muy directa"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "134. Por el contrario, en la fase de ESTABILIZACIÓN de la ansiedad, la labor prioritaria de enfermería será:",
    opciones: [
      "Administrar grandes dosis de benzodiacepinas para sedarlo",
      "Aislar al paciente indefinidamente en una habitación vacía",
      "Ayudar a explorar los factores desencadenantes, plantear exposición gradual y realizar educación sanitaria (ej. relajación)",
      "Derivarlo inmediatamente a psiquiatría sin intervención previa"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "135. En la Terapia Cognitivo-Conductual aplicada a la ansiedad, la parte COGNITIVA de la intervención se centra específicamente en:",
    opciones: [
      "Modificar los actos y acciones mediante el control estricto de la rutina",
      "Eliminar pensamientos maladaptativos mediante la reestructuración cognitiva y el cambio del pensamiento",
      "Exponer al paciente al estímulo fobígeno de golpe (inundación motora)",
      "Administrar técnicas electroconvulsivas en quirófano"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "136. El uso terapéutico prolongado de ansiolíticos benzodiacepínicos (como el Lorazepam o el Diazepam) requiere vigilancia de enfermería, ya que pueden generar efectos secundarios como:",
    opciones: [
      "Hipertensión arterial severa y taquicardia",
      "Dependencia, tolerancia cruzada con el alcohol, ataxia y pérdida de memoria",
      "Agitación psicomotriz e insomnio crónico",
      "Hipertrofia muscular y fallo hepático agudo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "137. ¿Cuál es el factor protector epidemiológico más destacado que mencionan los apuntes frente al riesgo de desarrollar un trastorno de pánico en función de la raza?",
    opciones: [
      "Ser de raza blanca no latina",
      "Ser latino, afroamericano, negro caribeño o asiático americano",
      "Ser de origen escandinavo",
      "No se han documentado diferencias de raza, solo culturales de género"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "138. En los trastornos de ansiedad, el diagnóstico diferencial y la patología dual son frecuentes. Una enfermedad médica (endocrina) que puede cursar con clínica idéntica a la ansiedad es:",
    opciones: [
      "El hipotiroidismo severo (mixedema)",
      "La diabetes mellitus tipo 1",
      "El hipertiroidismo o el feocromocitoma",
      "La enfermedad de Addison"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "139. Una de las manifestaciones emocionales patológicas descritas en la ansiedad generalizada es:",
    opciones: [
      "La ideación delirante mística",
      "El miedo al futuro asociado a una sensación de culpabilidad constante",
      "La apatía placentera por las relaciones familiares",
      "La anhedonia total y estupor"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 7,
    pregunta: "140. Los 'Ansiolíticos no-benzodiacepínicos' como la Azaspironirona (Buspirona) también generan tolerancia cruzada, pero se diferencian clínicamente porque NO tienen un perfil tan marcado de sedación y pueden causar:",
    opciones: [
      "Temblores parkinsonianos irreversibles",
      "Hipotensión ortostática, mareo, cefalea y astenia",
      "Agranulocitosis fulminante en el 30% de los casos",
      "Convulsiones febriles inmediatas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },

  // ==========================================
  // TEMA 8: TRASTORNOS RELACIONADOS CON ESTRESORES Y TRAUMAS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "141. En salud mental, la forma teórica de definir los trastornos basándose en el enfoque temporal del pensamiento dicta que el estrés es:",
    opciones: [
      "El exceso de pensamiento sobre el pasado",
      "El exceso de pensamiento irracional sobre el futuro",
      "El exceso de pensamiento sobre el presente, ajustándose el temor o sobrecarga a un estímulo actual palpable",
      "El recuerdo involuntario de un evento que amenazó la vida"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "142. A diferencia del estrés o la ansiedad, se define un 'Trauma' puramente psicopatológico como:",
    opciones: [
      "Un miedo irracional a situaciones sociales cotidianas que nunca han ocurrido",
      "Una preocupación sostenida de origen desconocido",
      "Una experiencia pasada que realmente SÍ sucedió y supuso un peligro real o amenaza para la persona",
      "Una reacción biológica positiva que nos prepara para un examen"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "143. En la neurobiología del estrés se desencadena una intensa respuesta endocrina y celular que eleva el cortisol. Esta cascada de reacciones neuroinmunitarias NO se desactiva por completo hasta pasadas:",
    opciones: [
      "30 minutos desde la activación",
      "2 horas desde la activación",
      "6 horas desde que la activamos",
      "24 horas desde que la activamos"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "144. El Trastorno de Apego Reactivo (frecuente en la infancia tras negligencia o maltrato) se caracteriza esencialmente por:",
    opciones: [
      "Un comportamiento hiperactivo con intentos desmesurados de llamar la atención de extraños",
      "Un comportamiento inhibido hacia los cuidadores: el niño no busca consuelo ni se deja consolar si está triste",
      "El desarrollo de fobia escolar aguda y ataques de pánico diarios",
      "La aparición de tics motores y vocales persistentes"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "145. A diferencia del anterior, el Trastorno de Relación Social Inhibitoria (o Desinhibida) provocado por los mismos factores de negligencia se manifiesta como:",
    opciones: [
      "Mutismo absoluto frente a sus padres pero habla fluida con sus hermanos",
      "La tendencia a escapar con extraños e incluso marcharse con desconocidos sin ninguna reticencia",
      "Falta de interés absoluto por cualquier juego (anhedonia total infantil)",
      "Un estado catatónico cíclico provocado por orfanatos"
    ],
    correcta: 1, // En el DSM-5 se llama T. de relación social desinhibida, aunque el apunte dice "inhibitoria" pero aclara que la conducta es "desinhibida" y se van con extraños.
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "146. El Trastorno de Estrés Postraumático (TEPT) requiere la presencia de síntomas en cuatro dimensiones (intrusión, evitación, alteraciones cognitivas/estado de ánimo y alerta). Para su diagnóstico, estos síntomas deben durar:",
    opciones: [
      "Entre 3 días y 1 mes como máximo",
      "Más de 1 mes y crear malestar clínicamente significativo",
      "Al menos 6 meses ininterrumpidos",
      "Debe ser crónico de por vida sin posibilidad de mejora"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "147. Si un paciente presenta toda la clínica propia de un suceso traumático severo (disociación, intrusión, hipervigilancia) pero los síntomas comenzaron hace una semana y se curan a los 25 días del suceso, el diagnóstico correcto es:",
    opciones: [
      "Trastorno de adaptación con ansiedad",
      "Trastorno de Estrés Agudo",
      "Trastorno de Estrés Postraumático de inicio tardío",
      "Crisis de angustia simple"
    ],
    correcta: 1, // El TEA dura entre 3 días y 1 mes máximo. Si pasa de 1 mes, se convierte en TEPT.
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "148. Dentro de los síntomas del TEPT (Trastorno de Estrés Postraumático), las 'escenas retrospectivas' (flashbacks) en las que el individuo siente que el evento se está repitiendo en el presente se consideran un síntoma de:",
    opciones: [
      "Alerta e hiperactivación autónoma",
      "Evitación situacional",
      "Intrusión (reacciones disociativas)",
      "Alteración del estado de ánimo"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "149. Los síntomas de ALERTA (hiperactivación) típicos del TEPT incluyen todo lo siguiente EXCEPTO:",
    opciones: [
      "Alteración del sueño e insomnio crónico",
      "Comportamiento irritable y arrebatos de furia inmotivados",
      "Respuesta de sobresalto exagerada e hipervigilancia",
      "Amesia localizada sobre aspectos importantes del trauma"
    ],
    correcta: 3, // La amnesia localizada es una alteración COGNITIVA NEGATIVA / Disociación, no un síntoma de alerta o hiperactivación.
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "150. ¿Cómo clasifica el temario el trauma sufrido por los hijos de supervivientes del holocausto u otras tragedias similares que han convivido con el duelo de sus padres?",
    opciones: [
      "Hecho traumático simple",
      "Hecho traumático prolongado deliberado",
      "Hecho traumático de exposición indirecta",
      "Desastre natural"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "151. El Trastorno de Adaptación es una respuesta patológica ante un factor estresante psicosocial identificable (ej: divorcio, despido). Su característica temporal definitoria es que aparece:",
    opciones: [
      "Durante la primera hora tras el evento, resolviéndose al final del día",
      "En los 3 meses posteriores al cambio/estresor, y no suele durar más de 6 meses tras el fin del factor",
      "Después de 1 año del estresor, de forma crónica",
      "De forma cíclica coincidiendo con las estaciones del año"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "152. Según los apuntes, en una planta hospitalaria convencional, ¿qué porcentaje de los pacientes con enfermedades médicas crónicas recurrentes (EPOC, IAM, cáncer) puede llegar a sufrir un trastorno de adaptación u otra alteración reactiva?",
    opciones: [
      "Menos del 2%",
      "Entre el 5 y el 10%",
      "Aproximadamente el 50%",
      "Más del 95% de los pacientes"
    ],
    correcta: 2, // El apunte indica que abarca a una población clínica con enfermedad orgánica del 50%.
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "153. Según el Modelo Explicativo del Estrés de Palmero (1996), la conducta motivada implica dos ejes principales frente al estresor, que son:",
    opciones: [
      "Activación (intensidad) y Dirección (aproximación o evitación)",
      "Reflexión cognitiva y Aislamiento conductual",
      "Disonancia aguda y Sumisión somática",
      "Intrusión imaginativa y Disociación afectiva"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "154. En el abordaje del estrés agudo provocado por un trauma inminente, un factor ambiental protector clave es:",
    opciones: [
      "Evitar por completo hablar del suceso a toda costa",
      "El apoyo social temprano y la red de apoyo efectiva del individuo",
      "El suministro inmediato de estabilizadores del ánimo como el litio",
      "Fomentar la intelectualización para reprimir las emociones"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "155. Epidemiológicamente, ¿qué grupo poblacional muestra un mayor riesgo (vulnerabilidad de género) para desarrollar Trastorno de Estrés Agudo frente a eventos similares?",
    opciones: [
      "Los hombres caucásicos",
      "Las mujeres",
      "Los adolescentes varones",
      "No existe ninguna diferencia registrada por sexos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "156. En la clínica del TEPT se reportan 'Alteraciones cognitivas negativas'. Una de ellas, muy incapacitante a nivel interpersonal, es:",
    opciones: [
      "La creencia de tener habilidades telequinéticas",
      "La convicción inquebrantable de que el mundo entero es seguro pero uno mismo está maldito",
      "El sentimiento de desapego extremo, incapacidad de confiar en los demás o experimentar emociones positivas (amor, alegría)",
      "La aparición repentina de mutismo selectivo orgánico"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "157. A nivel etiológico infantil, las crianzas en instituciones severas y los múltiples cambios de custodia aumentan dramáticamente el riesgo de originar en el niño:",
    opciones: [
      "Trastornos del Espectro Autista (TEA) de base genética",
      "Tics motores crónicos tipo Tourette",
      "Trastorno de apego reactivo o Trastorno de relación social desinhibida",
      "Discapacidad intelectual profunda e irreversible"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "158. Entre los hechos traumáticos clasificados como 'Desastres naturales, accidentales y deliberados (humanos)', que suponen un evento imprevisto y abrumador para casi todo el mundo, los denominamos:",
    opciones: [
      "Hecho traumático prolongado",
      "Hecho traumático de exposición vicaria",
      "Hecho traumático simple",
      "Eustrés colectivo"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "159. Ante un paciente con TEPT que se encuentra en plena reacción disociativa (siente que revive el trauma en este momento perdiendo el contacto con el entorno real), la intervención prioritaria de enfermería es:",
    opciones: [
      "Forzarle a narrar el trauma original inmediatamente para liberar su culpa",
      "Asegurar el entorno (evitar autolesiones) y orientarlo progresivamente al momento y lugar presentes (técnicas de anclaje/grounding)",
      "Reírse de la situación para restarle hierro al asunto",
      "Administrar terapia electroconvulsiva de urgencia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 8,
    pregunta: "160. De forma paralela a los adultos, en niños que han presenciado un evento traumático grave, los síntomas de 'intrusión' o recuerdo del evento suelen exteriorizarse clínicamente a través de:",
    opciones: [
      "Peticiones escritas a los profesores del colegio",
      "Juegos repetitivos en los que se expresan temas o aspectos específicos del suceso traumático",
      "El desarrollo rápido de anorexia nerviosa",
      "La caída inmediata del cabello (tricotilomanía secundaria)"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  // ==========================================
  // TEMA 9: TRASTORNOS RELACIONADOS CON SÍNTOMAS SOMÁTICOS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "161. De forma general, los trastornos de síntomas somáticos se definen como la expresión de signos o síntomas físicos que:",
    opciones: [
      "Se presentan en ausencia de evidencia clínica o diagnóstica real",
      "Siempre tienen una base orgánica demostrada mediante analítica",
      "Se relacionan exclusivamente con la simulación para obtener beneficios económicos",
      "Solo se presentan durante episodios de psicosis aguda"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "162. Entre los síntomas somáticos más comunes, ¿cuál de los siguientes se clasifica como un síntoma 'Pseudoneurológico'?",
    opciones: [
      "Diarrea e intolerancia a los alimentos",
      "Disfunción eréctil",
      "Afonía, parálisis, ceguera y convulsiones",
      "Sangrado menstrual excesivo"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "163. En el trastorno de síntomas somáticos, es habitual que los pacientes interpreten sensaciones normales del cuerpo (ej. un latido más fuerte) atribuyéndolo a una enfermedad grave. Epidemiológicamente, este trastorno:",
    opciones: [
      "Afecta principalmente a varones jóvenes",
      "Tiene una prevalencia del 10%, afecta más a mujeres y se desarrolla durante el envejecimiento",
      "Solo se da en la infancia temprana",
      "Afecta por igual a ambos sexos con una prevalencia del 50%"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "164. El Trastorno de Ansiedad por Enfermedad (conocido clásicamente como hipocondría) se caracteriza principalmente porque:",
    opciones: [
      "El paciente inventa síntomas para ser hospitalizado",
      "Hay una enfermedad real de base o una preocupación desproporcionada por padecerla que provoca ansiedad extrema",
      "El paciente sufre ceguera temporal sin causa orgánica",
      "Se producen vómitos autoinducidos diarios"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "165. El Trastorno de Conversión (o de síntomas neurológicos funcionales) consiste en interpretar ciertos síntomas relacionados con la función motora o sensorial. Un criterio que apoya su diagnóstico es:",
    opciones: [
      "La presencia de una lesión medular evidente",
      "La aparición tras una situación de estrés psicológico previo al inicio del síntoma y rasgos de personalidad histriónica",
      "Que el paciente lo finja voluntariamente para obtener una baja laboral",
      "El aumento progresivo de la memoria autobiográfica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "166. La expresión francesa 'belle indifférence' (bella indiferencia) se asocia frecuentemente como criterio de apoyo diagnóstico en el:",
    opciones: [
      "Trastorno de ansiedad generalizada",
      "Trastorno de conversión",
      "Trastorno facticio",
      "Trastorno por atracones"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "167. A nivel epidemiológico, el Trastorno de Conversión:",
    opciones: [
      "Afecta casi exclusivamente a varones",
      "Tiene una prevalencia del 5% y las mujeres lo sufren 3 veces más que los hombres",
      "Aparece solo en personas mayores de 65 años",
      "No presenta comorbilidad con la depresión"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "168. El Trastorno Facticio (anteriormente conocido como Síndrome de Münchhausen) se define clínicamente como:",
    opciones: [
      "La creencia delirante de estar muerto",
      "La preocupación irracional por tener un defecto físico",
      "La falsificación de información clínica o inducción de daño/enfermedad a sí mismos debido a un malestar psicológico subyacente",
      "La conversión de ansiedad en un síntoma motor como la parálisis"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "169. En el contexto del Trastorno Facticio impuesto a otro (Münchhausen por poderes), cuando el individuo causa daño a terceros (por ejemplo, a un hijo para asumir el rol de cuidador abnegado), se debe prestar especial atención porque:",
    opciones: [
      "El paciente requerirá dosis más altas de antidepresivos",
      "Se convierte en un tema judicial/criminal por el daño a terceros",
      "Suele curarse espontáneamente en la adolescencia",
      "Es una práctica socialmente aceptada en algunas culturas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "170. Dentro del Proceso de Atención de Enfermería (PAE) para los trastornos de síntomas somáticos, uno de los objetivos principales de la intervención es:",
    opciones: [
      "Aumentar las ganancias secundarias del paciente",
      "Reducir las 'ganancias secundarias' e impedir que el síntoma se refuerce",
      "Aumentar la dependencia de tratamientos físicos y medicamentosa",
      "Realizar tantas pruebas de imagen como el paciente demande para tranquilizarlo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "171. Una medida fundamental de Enfermería al abordar a un paciente con un trastorno somatomorfo o de conversión es:",
    opciones: [
      "Animarle a identificar su conflicto psicológico y reconocer la relación entre ese estrés y el síntoma físico",
      "Confrontarle agresivamente diciéndole que se lo está inventando",
      "Ignorar completamente sus quejas físicas sin realizar una valoración inicial",
      "Administrar placebos sin su consentimiento"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "172. En el trastorno de ansiedad por enfermedad, la paciente puede presentar 'conductas rituales'. Un ejemplo de esto sería:",
    opciones: [
      "Comprar objetos innecesarios compulsivamente",
      "Si me levanto de esta manera determinada de la cama, no tengo dolor ni la enfermedad",
      "Arrancarse el pelo para sentir placer",
      "Creer que los pensamientos han sido insertados por extraterrestres"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "173. Las consecuencias funcionales del Trastorno de Conversión incluyen:",
    opciones: [
      "Menor estado de salud, abuso de fármacos, sometimiento a pruebas diagnósticas innecesarias y poca satisfacción vital",
      "Aumento del rendimiento laboral debido a la hipervigilancia",
      "Mejora significativa en las relaciones familiares por la atención recibida",
      "Curación espontánea de todas las patologías orgánicas previas"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "174. Para el tratamiento de los Trastornos Somáticos, las terapias que han demostrado mayor eficacia incluyen:",
    opciones: [
      "Terapia electroconvulsiva exclusivamente",
      "Psicoterapia de apoyo individual/familiar, hipnosis y terapia de conducta",
      "Aislamiento preventivo y contención mecánica",
      "Lobotomía frontal"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "175. Entre los síntomas somáticos, ¿cuáles se asocian a la esfera digestiva?",
    opciones: [
      "Afonía y ceguera",
      "Náuseas, distensión, vómitos, diarrea e intolerancia a los alimentos",
      "Disfunción eyaculatoria y sangrado excesivo",
      "Crisis convulsivas generalizadas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "176. ¿Cuál de los siguientes NO es un factor de riesgo descrito en el temario para desarrollar un trastorno de conversión?",
    opciones: [
      "Temperamentales",
      "Ambientales",
      "Culturales",
      "Dieta rica en carbohidratos"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "177. En los trastornos relacionados con síntomas somáticos, el malestar que sufre la persona:",
    opciones: [
      "Es puramente simulado y el paciente no sufre realmente",
      "Es clínicamente significativo, causando una afectación real de su vida aunque no haya lesión orgánica objetivable",
      "Solo ocurre en presencia de un familiar",
      "Desaparece automáticamente al administrar un analgésico"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "178. ¿Qué actitud es típica frente al síntoma en pacientes con rasgos histriónicos dentro de un trastorno de conversión?",
    opciones: [
      "Actitud proactiva para rehabilitarse rápidamente",
      "Actitud pasiva frente a su incapacidad o indiferencia ('belle indifférence')",
      "Actitud agresiva y violenta si se les menciona el síntoma",
      "Negación total de la existencia del síntoma"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "179. En la valoración de enfermería del paciente somatizador, es prioritario identificar:",
    opciones: [
      "El factor conductual o psicológico causante de la creencia errónea",
      "La alergia a medicamentos dermatológicos",
      "Las capacidades matemáticas del paciente",
      "El nivel de oxígeno en sangre exclusivamente"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },
  {
    asignatura: "salud_mental",
    tema: 9,
    pregunta: "180. Según el PAE para síntomas somáticos, una intervención clave para fomentar la adaptación es:",
    opciones: [
      "Someterle a múltiples pruebas de escáner",
      "Desarrollar otras formas de enfrentamiento psicológico (coping) que no impliquen somatizar",
      "Facilitar la evitación sistemática de los estresores",
      "Administrar benzodiacepinas a altas dosis"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "sintomas_somaticos"
  },

  // ==========================================
  // TEMA 10: TRASTORNO OBSESIVO-COMPULSIVO Y RELACIONADOS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "181. En el Trastorno Obsesivo-Compulsivo (TOC), ¿cómo se define conceptualmente la 'Obsesión'?",
    opciones: [
      "Como la acción motora que realiza el paciente para calmarse",
      "Como la dimensión cognitiva relacionada con pensamientos e ideas intrusivas (ej. miedo a sufrir una infección)",
      "Como un estado de hiperactividad física",
      "Como un delirio psicótico estructurado"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "182. A diferencia de la obsesión, la 'Compulsión' se define como:",
    opciones: [
      "Un pensamiento mágico sobre el futuro",
      "Una alucinación auditiva",
      "Un acto o comportamiento que se lleva a cabo de forma desproporcionada para intentar reducir la angustia (ej. girar la manilla 5 veces)",
      "La pérdida total de la memoria reciente"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "183. ¿Cuál de las siguientes es una de las OBSESIONES más comunes descritas en la clínica del TOC?",
    opciones: [
      "Preocupación por la suciedad, los gérmenes, la toxinas, la simetría y el orden",
      "Lavado repetitivo de manos hasta causar lesiones dérmicas",
      "Rituales de comprobación (verificar que se ha cerrado la puerta)",
      "El acto de contar o colocar objetos de una forma específica"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "184. El término 'Insight' o introspección en el contexto del TOC se refiere a:",
    opciones: [
      "La pérdida de visión secundaria al estrés",
      "La capacidad del paciente de reconocer la irracionalidad y la falta de sentido de sus propias obsesiones o compulsiones",
      "Un delirio de grandeza",
      "La resistencia total a la farmacoterapia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "185. A nivel epidemiológico, ¿qué porcentaje de los individuos con TOC presenta simultáneamente un trastorno de TICS a lo largo de su vida (especialmente si inicia en la niñez en varones)?",
    opciones: [
      "Alrededor del 5%",
      "Hasta un 30%",
      "Más del 80%",
      "0%, son trastornos mutuamente excluyentes"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "186. La comorbilidad psiquiátrica del TOC es muy alta. ¿Cuál es el trastorno que con mayor frecuencia (hasta un 76% de los casos) se presenta simultáneamente?",
    opciones: [
      "Trastorno de ansiedad",
      "Esquizofrenia paranoide",
      "Trastorno bipolar",
      "Anorexia nerviosa"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "187. ¿Qué tasa o porcentaje de riesgo de ideación/comportamiento suicida se asocia epidemiológicamente al TOC?",
    opciones: [
      "Es nulo, el TOC protege contra el suicidio",
      "Aproximadamente un 5%",
      "Alrededor del 50%",
      "El 100% de los pacientes"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "188. El Trastorno Dismórfico Corporal se caracteriza por:",
    opciones: [
      "Arrancarse el pelo para sentir placer",
      "Preocupación excesiva por uno o más defectos físicos percibidos que no son observables o parecen irrelevantes para los demás",
      "La creencia de que se ha contraído un virus mortal",
      "Robar objetos sin valor material aparente"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "189. Una variante del Trastorno Dismórfico Corporal en la que el individuo (generalmente varón) muestra una preocupación extrema por la idea de que su cuerpo es demasiado pequeño o insuficientemente musculado, se denomina clínicamente:",
    opciones: [
      "Anorexia nerviosa restrictiva",
      "Ortorexia",
      "Dismorfia muscular (vigorexia)",
      "Bulimia no purgativa"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "190. ¿Qué sustancias es altamente probable que consuman los pacientes que padecen dismorfia muscular?",
    opciones: [
      "Heroína y metadona",
      "Esteroides, anabolizantes y androgénicos",
      "Laxantes y diuréticos exclusivamente",
      "Inhalantes y disolventes"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "191. El Trastorno de Acumulación (o acumulación compulsiva) se define por la recolección, compra o robo de artículos innecesarios, lo que provoca graves consecuencias en el hogar, tales como:",
    opciones: [
      "Mejora del aislamiento acústico de la vivienda",
      "Infuncionalidad de la vivienda, riesgo extremo de caídas, incendios y presencia de bacterias/insectos",
      "Aumento del valor inmobiliario",
      "Sensación crónica de paz interior"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "192. La Tricotilomanía es un trastorno del control de los impulsos/espectro obsesivo que se define por:",
    opciones: [
      "La ingesta convulsiva de tierra o yeso",
      "Arrancar repetidamente el propio pelo, causando calvas, con el fin de aliviar la ansiedad o sentir placer transitorio",
      "El rascado excesivo de lesiones cutáneas o costras",
      "La necesidad de limpiar el hogar con lejía constantemente"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "193. Epidemiológicamente, la Tricotilomanía es mucho más frecuente en:",
    opciones: [
      "Hombres (10 veces más probabilidad que las mujeres)",
      "Mujeres (10 veces más probabilidad que los hombres)",
      "Afecta por igual a ambos sexos en la infancia",
      "Solo afecta a personas mayores de 65 años"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "194. El Trastorno de Excoriación (dermatilomanía) consiste en:",
    opciones: [
      "Quemar objetos deliberadamente",
      "Rascado excesivo de la piel o arrancamiento de costras que produce sensación de alivio y satisfacción, pero daña los tejidos",
      "La creencia de que se tienen insectos bajo la piel (delirio parasitario)",
      "Comprar artículos de higiene de forma compulsiva"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "195. En el abordaje del Trastorno Dismórfico Corporal, un síntoma cognitivo severo y un factor de mal pronóstico es la presencia de:",
    opciones: [
      "Baja conciencia de enfermedad (insight) e ideación suicida",
      "Apatía total sin rituales de comprobación",
      "Alta autoestima general pero focalizada en un solo defecto",
      "Recuperación espontánea en la treintena"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "196. En los trastornos relacionados con tics y conductas repetitivas centradas en el cuerpo (como excoriación o tricotilomanía), el paciente suele presentar una fuerte afectación en qué áreas de la vida:",
    opciones: [
      "Únicamente en el área económica por la compra de tiritas",
      "Área social y ocupacional, ya que suelen ocultar el problema y tapar las zonas afectadas por la vergüenza",
      "Ninguna, no interfieren en la funcionalidad diaria",
      "Área nutricional exclusivamente"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "197. El desarrollo evolutivo del TOC suele presentar su inicio medio en la edad de:",
    opciones: [
      "45 años",
      "19,5 años (adolescencia tardía / inicio de la adultez)",
      "6 años de forma sistemática",
      "70 años asociado a demencia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "198. Según los apuntes, ¿qué porcentaje de pacientes con TOC tienen comorbilidad con un Trastorno Depresivo o Bipolar?",
    opciones: [
      "5%",
      "23%",
      "63%",
      "99%"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "199. Una de las compulsiones típicas descritas en el TOC para intentar disminuir la angustia asociada a las obsesiones de simetría u orden es:",
    opciones: [
      "Lavarse las manos 50 veces seguidas",
      "Ordenar y colocar objetos con precisión milimétrica",
      "Rezar oraciones mentales",
      "Arrancarse el pelo sistemáticamente"
    ],
    correcta: 1, // La opción A es para obsesión de suciedad/contaminación. La de orden/simetría genera compulsión de colocar/ordenar.
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 10,
    pregunta: "200. En el TOC infantil y adolescente, cuando el trastorno inicia a edades tempranas, el curso de la enfermedad suele ser:",
    opciones: [
      "Agudo y resolverse de forma rápida con apoyo familiar",
      "Crónico con síntomas oscilantes, alternando periodos crecientes y decrecientes a lo largo del tiempo",
      "Totalmente lineal y progresivo hacia la psicosis",
      "Fatal en el primer año"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  // ==========================================
  // TEMA 11: TRASTORNOS DISOCIATIVOS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "201. Según la CIE-11, la característica principal de los trastornos disociativos es:",
    opciones: [
      "La pérdida parcial o completa de la integración normal entre ciertos recuerdos, identidad, sensaciones inmediatas y control motor",
      "La presencia de alucinaciones auditivas complejas que dirigen la vida del paciente",
      "La convicción irreductible a la lógica de que un familiar ha sido reemplazado por un impostor",
      "La aparición de un miedo intenso a los espacios cerrados sin justificación real"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "202. La experiencia disociativa en la que el paciente siente una falta de integridad de las experiencias consigo mismo (se siente 'como un robot', desconectado de su propio cuerpo) se denomina:",
    opciones: [
      "Desrealización",
      "Fuga disociativa",
      "Despersonalización",
      "Estupor catatónico"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "203. Por el contrario, la sensación de irrealidad en la que a la persona le parece extraño o ficticio lo que le rodea (fallo en la integración del ambiente cercano) se denomina:",
    opciones: [
      "Desrealización",
      "Amnesia anterógrada",
      "Trastorno de identidad disociativo",
      "Ilusión de transparencia"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "204. ¿Qué característica clínica es fundamental en el Trastorno de Despersonalización/Desrealización respecto a la cordura del paciente?",
    opciones: [
      "Pierden completamente el juicio de la realidad y creen que el mundo es una simulación alienígena",
      "Presentan un juicio de realidad intacto (saben que es una sensación anormal) además del manifiesto miedo a 'estar volviéndose locos'",
      "El cuadro suele cursar con una alteración severa de las constantes vitales",
      "Siempre va acompañado del robo y la inserción del pensamiento"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "205. A nivel epidemiológico, el Trastorno de Despersonalización/Desrealización:",
    opciones: [
      "Afecta por igual a mujeres y a hombres (incidencia del 2%) y suele aparecer en la infancia o adolescencia (16 años)",
      "Afecta casi exclusivamente a varones mayores de 65 años",
      "Tiene una prevalencia del 20% y es exclusivo del sexo femenino",
      "Es una patología erradicada, actualmente no existen casos reportados"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "206. En cuanto al tratamiento del Trastorno de Despersonalización/Desrealización, los apuntes indican que:",
    opciones: [
      "Requiere ingreso en UCI psiquiátrica de forma obligatoria",
      "Suele tratarse con Terapia Electroconvulsiva (TEC) como primera opción",
      "Puede remitir sin tratamiento; el tratamiento (terapia conductual y psicofármacos) solo está indicado si la enfermedad es persistente o causa malestar grave",
      "Es una enfermedad terminal e irreversible que no responde a la combinación de terapias"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "207. La Amnesia Disociativa se caracteriza por la incapacidad de recordar información general o autobiográfica localizada, y epidemiológicamente se asocia a:",
    opciones: [
      "Ausencia total de emociones negativas",
      "Una prevalencia mayor en mujeres (2,6%) que en hombres (1,0%) y un GRAN riesgo de suicidio",
      "Una prevalencia mayor en hombres que en mujeres y riesgo nulo de autolisis",
      "Un inicio lento y progresivo asociado directamente a la vejez"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "208. La incapacidad de crear nuevos recuerdos a largo plazo tras el inicio de un cuadro disociativo se denomina:",
    opciones: [
      "Amnesia retrógrada",
      "Fuga de ideas",
      "Amnesia anterógrada",
      "Paramnesia reduplicativa"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "209. La presencia de 2 o más estados de personalidad diferentes y de una experiencia de posesión, acompañados de amnesia recurrente e intrusiones inexplicables en el funcionamiento, define al:",
    opciones: [
      "Trastorno facticio impuesto a sí mismo",
      "Trastorno esquizotípico de la personalidad",
      "Trastorno bipolar de ciclos rápidos",
      "Trastorno de identidad disociativo"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "210. Un paciente abandona de repente su círculo cercano, aparece en un lugar lejano, adopta una vida totalmente inventada e incluso realiza actividades para las que no estaba cualificado. Este cuadro clínico se denomina:",
    opciones: [
      "Delirio erotomaníaco",
      "Fuga disociativa",
      "Síndrome neuroléptico maligno",
      "Mutismo selectivo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "211. En la valoración de enfermería de un paciente con un trastorno disociativo (como la fuga o la desrealización), ¿cuál de los siguientes es un síntoma/sentimiento común a explorar?",
    opciones: [
      "El miedo y la sensación inminente de 'estar volviéndose loco' y el desprendimiento del entorno",
      "La creencia absoluta y feliz de ser una deidad reencarnada",
      "El aumento repentino de las capacidades matemáticas",
      "La negación total a beber líquidos (polidipsia inhibida)"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "212. Entre las consecuencias funcionales de la amnesia disociativa destacan afectaciones a nivel:",
    opciones: [
      "Intra/interpersonal exclusivamente",
      "Sociofamiliar y ocupacional exclusivamente",
      "Todos los aspectos (intra/interpersonal, sociofamiliar y ocupacional)",
      "Ninguna, no causa deterioro funcional comprobable"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "213. Al realizar el Plan de Cuidados de Enfermería en Trastornos Disociativos, el diagnóstico 'Alteración en los procesos de pensamiento' se relaciona con:",
    opciones: [
      "La interpretación correcta de estímulos neutros",
      "La interpretación incorrecta de estímulos internos o externos",
      "La retención de orina",
      "El aumento del gasto cardíaco"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "214. La disociación puede actuar psicológicamente como:",
    opciones: [
      "Un 'mecanismo de defensa' que desconecta a la persona consigo misma o el mundo ante un evento abrumador",
      "Una técnica voluntaria de estudio académico",
      "Un trastorno exclusivamente genético sin relación con el trauma",
      "Un efecto secundario esperado del tratamiento con litio"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "215. Dentro del cuadro del Trastorno de Despersonalización, ¿qué otro síntoma suele referir el paciente?",
    opciones: [
      "Distorsión física y psicológica de nosotros mismos (nos sentimos como si no estuviésemos dentro del cuerpo)",
      "Dolor abdominal irradiado a la espalda baja",
      "Alucinaciones visuales de animales pequeños e insectos",
      "Rigidez muscular en tubo de plomo"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "216. En la Fuga Disociativa, la falta de integración cognitiva patológica está estrechamente relacionada con:",
    opciones: [
      "La agudeza visual",
      "La memoria",
      "La función renal",
      "El sentido del gusto"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "217. El diagnóstico de enfermería 'Deterioro de la interacción social' en el contexto de un trastorno disociativo se encuentra directamente relacionado con:",
    opciones: [
      "Procesos de pensamiento alterados y autoconcepto alterado",
      "Exceso de conocimiento sanitario",
      "Capacidad pulmonar disminuida",
      "Aumento del peso corporal por hiperfagia"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "218. La aparición de 'Flashbacks' y recuerdos amnésicos recurrentes autobiográficos que interrumpen la conciencia diaria es una sintomatología común en:",
    opciones: [
      "El trastorno negativista desafiante",
      "La amnesia disociativa",
      "El trastorno de la personalidad narcisista",
      "El trastorno por atracones"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "219. Las intrusiones espontáneas en la conciencia que acompañan a los trastornos disociativos provocan:",
    opciones: [
      "Fragmentación de la identidad, despersonalización y desrealización",
      "Agitación psicomotriz e insomnio global",
      "Verborrea, hipersexualidad y fuga de ideas maníaca",
      "Aumento drástico del coeficiente intelectual a corto plazo"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },
  {
    asignatura: "salud_mental",
    tema: 11,
    pregunta: "220. En relación a la amnesia retrógrada, el paciente presenta incapacidad para recordar:",
    opciones: [
      "Solo los eventos traumáticos que sucederán en el futuro",
      "Los recuerdos previos",
      "Cómo tragar los alimentos (disfagia psicosomática)",
      "Información teórica pero conserva intacta la autobiográfica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "ansiedad_estres"
  },

  // ==========================================
  // TEMA 12: TRASTORNOS DE LA EXCRECIÓN
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "221. La 'Enuresis' se define clínicamente como la emisión repetida de orina en la cama o ropa (voluntaria o involuntaria). Cuando ocurre EXCLUSIVAMENTE durante la noche, se clasifica como:",
    opciones: [
      "Enuresis no monosintomática",
      "Enuresis monosintomática (nocturna)",
      "Incontinencia refleja",
      "Enuresis somatomorfa"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "222. La Enuresis diurna se clasifica como 'No monosintomática'. Un subtipo de esta, en el que el niño 'aguanta hasta no poder más', se denomina en los apuntes:",
    opciones: [
      "Incontinencia urgente",
      "Emisión propuesta (pospuesta)",
      "Micción refractaria",
      "Incontinencia por rebosamiento"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "223. Otro subtipo de enuresis diurna, donde aparece la necesidad repentina e incontrolable de orinar, se denomina:",
    opciones: [
      "Emisión propuesta",
      "Incontinencia urgente",
      "Atonía vesical",
      "Vejiga neurógena"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "224. Epidemiológicamente, ¿cuál es la prevalencia de la enuresis en los niños de 5 años?",
    opciones: [
      "1%",
      "Alrededor del 5-10%",
      "Más del 25%",
      "Prácticamente nula (0,1%)"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "225. La enuresis afecta a menores de 15 años, pero, ¿en qué franja de edad se encuentra el 'pico' de mayor afectación clínica?",
    opciones: [
      "Entre los 1 y 2 años",
      "Entre los 2 y 4 años",
      "Entre los 5 y 8 años",
      "Entre los 12 y 14 años"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "226. En relación a la enuresis y la prevalencia por sexos, los estudios epidemiológicos demuestran que:",
    opciones: [
      "No existe ninguna diferencia entre niños y niñas",
      "Las niñas presentan mayoritariamente enuresis nocturna y los niños diurna",
      "Los niños presentan predominantemente enuresis nocturna y las niñas diurna",
      "Ambos sexos presentan exclusivamente enuresis diurna"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "227. Se considera 'Enuresis Primaria' a aquella condición clínica en la cual:",
    opciones: [
      "El esfínter urinario aún no está controlado (el niño nunca ha alcanzado la continencia)",
      "El niño ya había conseguido controlar el esfínter urinario previamente pero presenta una recaída",
      "Es provocada directamente por una malformación renal congénita severa",
      "Se produce únicamente como respuesta a una infección bacteriana (ITU)"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "228. A diferencia de la primaria, ¿cuándo hablamos de una 'Enuresis o Encopresis Secundaria'?",
    opciones: [
      "Cuando nunca ha habido control de esfínteres",
      "Cuando ocurre de forma secundaria a un traumatismo craneoencefálico",
      "Cuando se produce TRAS haber desarrollado previamente la continencia o el control del esfínter (es decir, hay una regresión)",
      "Cuando el paciente es mayor de 18 años"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "229. El trastorno caracterizado por la defecación repetida en lugares inapropiados (cama, ropa, suelo...) recibe el nombre de:",
    opciones: [
      "Enuresis nocturna",
      "Encopresis",
      "Pica por heces (coprofagia)",
      "Trastorno de rumiación"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "230. A nivel clínico, los subtipos de Encopresis se clasifican atendiendo a la presencia o ausencia de:",
    opciones: [
      "Micción simultánea (con o sin enuresis)",
      "Estreñimiento e incontinencia por desbordamiento",
      "Trastorno del desarrollo intelectual profundo",
      "Infección del tracto digestivo (gastroenteritis activa)"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "231. Epidemiológicamente, la prevalencia de la Encopresis en niños de 5 años es de alrededor del 1%. ¿A qué género afecta fundamentalmente?",
    opciones: [
      "Al género femenino",
      "Al género masculino (niños)",
      "Afecta a ambos sexos en una proporción 1:1 exacta",
      "Suele afectar más a adultos varones que a niños"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "232. Tanto en la Enuresis como en la Encopresis infantil, los apuntes destacan una comorbilidad médica importante a la que enfermería debe prestar especial atención, ya que puede ser la causa o consecuencia subyacente. ¿A cuál se refieren?",
    opciones: [
      "Meningitis aséptica",
      "Infecciones del Tracto Urinario (ITU)",
      "Neumonía atípica",
      "Apendicitis aguda"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "233. Las consecuencias funcionales derivadas de padecer Enuresis infantil repercuten directamente de forma negativa sobre:",
    opciones: [
      "Únicamente el crecimiento físico y la talla del niño",
      "La función social, la autoestima y la función familiar",
      "El coeficiente intelectual verbal",
      "El desarrollo sexual secundario"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "234. Los factores de riesgo señalados en la teoría para el desarrollo de la Encopresis son fundamentalmente:",
    opciones: [
      "Culturales y económicos",
      "Traumáticos y disociativos",
      "Genéticos y fisiológicos",
      "Dietéticos (exceso de fibra de forma crónica)"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "235. En la Enuresis nocturna, cuando el niño a la edad de 10 años continúa orinándose en la cama, la prevalencia baja estadísticamente a un:",
    opciones: [
      "3-5%",
      "15%",
      "30%",
      "0%"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "236. Y si hablamos de adolescentes o personas de 15 años o más, ¿cuál es la tasa aproximada de enuresis en la población?",
    opciones: [
      "Alrededor del 1%",
      "Cerca del 5%",
      "Prácticamente el 10%",
      "Superior al 20%"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "237. Las consecuencias funcionales de la Encopresis incluyen afectación de:",
    opciones: [
      "La función social, la autoestima y el desarrollo",
      "La visión y la audición a corto plazo",
      "Las habilidades matemáticas complejas",
      "La capacidad pulmonar total"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "238. Al valorar los factores de riesgo del desarrollo de la Enuresis (tanto nocturna como diurna), deben tenerse en cuenta determinantes de tipo:",
    opciones: [
      "Únicamente fisiológicos o anatómicos",
      "Exclusivamente psicológicos (trauma severo)",
      "Ambientales, genéticos, fisiológicos y culturales",
      "Alergias alimentarías graves"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "239. Según los parámetros de diagnóstico y clasificación clínica, un niño que desde su nacimiento nunca ha dejado de orinarse en la cama por la noche se clasificaría en:",
    opciones: [
      "Enuresis monosintomática primaria",
      "Enuresis no monosintomática secundaria",
      "Encopresis mixta persistente",
      "Fuga disociativa urinaria"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 12,
    pregunta: "240. Al realizar la evaluación en un niño con trastorno de la excreción (enuresis o encopresis) que además presenta febrícula y dolor abdominal inespecífico, la enfermera debe sospechar principalmente y descartar como complicación paralela o causante:",
    opciones: [
      "El inicio de una diabetes tipo I",
      "Una infección del tracto urinario (ITU)",
      "El síndrome neuroléptico maligno",
      "Un trastorno bipolar tipo II de debut precoz"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  // ==========================================
  // TEMA 13: TRASTORNOS PARAFÍLICOS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "241. La característica principal que define conceptualmente a una Parafilia frente a una preferencia sexual normativa es:",
    opciones: [
      "La pérdida total del deseo o apetito sexual (anhedonia sexual)",
      "El aumento del interés sexual de forma intensa y persistente hacia actividades u objetos que son diferentes a lo socialmente adecuado",
      "La incapacidad física para mantener relaciones sexuales debido a problemas circulatorios",
      "La excitación exclusiva a través del coito tradicional"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "242. Para que una parafilia sea diagnosticada psiquiátricamente como un 'Trastorno Parafílico', es condición indispensable que:",
    opciones: [
      "Genere un malestar clínicamente significativo en el sujeto, perjuicio personal o daños/riesgo de daño a terceros",
      "Sea descubierta por la policía e implique una condena penal",
      "El paciente haya perdido completamente el conocimiento de sus actos durante el suceso",
      "Tenga su inicio obligatoriamente después de los 50 años"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "243. En la clasificación diagnóstica, los trastornos parafílicos se dividen en dos grandes grupos principales, que son:",
    opciones: [
      "Preferencias de actividad anómalas y Preferencias de objetivo anómalas",
      "Preferencias lúdicas y Preferencias agresivas",
      "Alteraciones de la libido cortical y Alteraciones de la libido subcortical",
      "Trastornos de la erección y Trastornos de la eyaculación"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "244. Los trastornos parafílicos conocidos como 'trastornos del cortejo' (relacionados con prácticas anómalas previas o de 'ligue') incluyen:",
    opciones: [
      "Sadismo, masoquismo y necrofilia",
      "Zoofilia, pedofilia y fetichismo",
      "Voyeurismo, frotteurismo y exhibicionismo",
      "Travestismo, escatología telefónica y coprofilia"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "245. El trastorno del Voyeurismo consiste fundamentalmente en:",
    opciones: [
      "La necesidad de ser observado por otros durante las relaciones íntimas",
      "La tendencia sexual a observar a personas desprevenidas cuando están desnudas, duchándose o realizando actos sexuales",
      "El roce o tocamiento no consentido en lugares públicos",
      "El uso exclusivo de objetos inanimados para excitarse"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "246. Una condición psicológica y clínica muy característica que aumenta la excitación y patología en el Trastorno del Voyeurismo es que:",
    opciones: [
      "La persona espiada debe consentirlo previamente",
      "La persona observada y el entorno NO deben enterarse (si se enteran, causa frustración, culpa y malestar)",
      "El observador debe interactuar verbalmente con la víctima después",
      "Se requiere grabar la escena con cámaras obligatoriamente para llegar al orgasmo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "247. Epidemiológicamente, el Trastorno de Frotteurismo (realizar tocamientos o fricciones a otras personas sin consentimiento) puede considerarse trastorno cuando se ha realizado a un mínimo de:",
    opciones: [
      "1 persona",
      "3 o más personas",
      "10 personas distintas",
      "Cualquier familiar de primer grado"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "248. Los denominados 'Trastornos Algolágnicos' son aquellos que incluyen un componente de excitación relacionado con la inducción de dolor o el sufrimiento. En esta categoría encontramos:",
    opciones: [
      "Fetichismo y Voyeurismo",
      "Masoquismo sexual y Sadismo sexual",
      "Pedofilia y Gerontofilia",
      "Travestismo y Exhibicionismo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "249. El Trastorno de Masoquismo Sexual se caracteriza clínicamente por:",
    opciones: [
      "Aumento de la excitación al infligir y provocar dolor a otra persona no consintiente",
      "Aumento de la excitación intensa cuando la propia persona es sometida a sufrimiento, golpes, humillaciones o está atada",
      "La excitación exclusiva al oler prendas interiores usadas",
      "El descontrol de los impulsos para quemar objetos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "250. Dentro del grupo de Preferencias de OBJETIVOS anómalos, el trastorno que se orienta de forma anómala hacia personas pre-púberes se denomina:",
    opciones: [
      "Zoofilia",
      "Masoquismo",
      "Frotteurismo",
      "Trastorno Pedofílico"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "251. El Trastorno de Fetichismo (preferencia de objetivo anómalo en otros campos) se diagnostica por:",
    opciones: [
      "El uso repetitivo y persistente de objetos inanimados o ciertas partes del cuerpo para la excitación sexual",
      "El roce en el transporte público",
      "La atracción romántica por monumentos o edificios (objumofilia)",
      "La adicción a la pornografía en internet"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "252. Una característica clínica que indica una alta dependencia y disfunción en el paciente con Fetichismo es que:",
    opciones: [
      "Suelen sufrir convulsiones tonicoclónicas tras el coito",
      "Si no tienen a la vista o contacto con el objeto inanimado, no logran llegar al orgasmo",
      "Presentan siempre discapacidad intelectual profunda",
      "Obligan siempre a su pareja a sufrir daño físico"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "253. El Trastorno de Travestismo se define por la tendencia a querer vestirse como el sexo contrario causando malestar significativo si no se puede realizar. Dentro de este, existe la variante 'Autoginofilia', que consiste en:",
    opciones: [
      "La obsesión con limpiar la ropa interior constantemente",
      "Excitación al imaginarse con los genitales, anatomía femenina (mamas) o funciones fisiológicas femeninas (lactancia, menstruación)",
      "El rechazo absoluto a relacionarse con mujeres",
      "El robo compulsivo de ropa femenina de los tendederos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "254. Existen otros trastornos parafílicos especificados basados en la diana de la excitación. ¿Cómo se denomina al trastorno cuya excitación sexual está dirigida hacia los cadáveres?",
    opciones: [
      "Zoofilia",
      "Clismafilia",
      "Necrofilia",
      "Urofilia"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "255. La parafilia conocida como 'Coprofilia' implica una excitación sexual anómala relacionada con:",
    opciones: [
      "Los vómitos",
      "La orina",
      "Las heces",
      "Los enemas"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "256. La excitación o preferencia anómala relacionada con el uso de la orina se denomina:",
    opciones: [
      "Urofilia",
      "Clismafilia",
      "Escatología",
      "Autofagia"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "257. El abordaje principal y el tratamiento en salud mental para los trastornos parafílicos se realiza preferentemente a través de:",
    opciones: [
      "El aislamiento en prisiones exclusivamente",
      "Psicoterapia, terapia cognitivo-conductual, constructivista y apoyo farmacológico",
      "Lobotomía frontal y extirpación de la amígdala",
      "Terapia electroconvulsiva semanal crónica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "258. Epidemiológicamente, los trastornos parafílicos suelen tener una edad de inicio y desarrollo asociada a:",
    opciones: [
      "La infancia temprana (antes de los 5 años)",
      "La adolescencia o pubertad (ej. adolescencia tardía en torno a los 19 años)",
      "La crisis de la mediana edad (45-50 años)",
      "La tercera edad (>65 años)"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "259. A nivel de intervención del PAE, el porcentaje de pacientes que acuden a consultar voluntariamente a los profesionales sanitarios al sentir culpa o interferencia por su práctica parafílica se estima en:",
    opciones: [
      "Un 5%",
      "Solo un 25%",
      "Alrededor del 70%",
      "El 100%, todos buscan ayuda de inmediato"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "parafilias"
  },
  {
    asignatura: "salud_mental",
    tema: 13,
    pregunta: "260. Una de las consecuencias funcionales más graves y distintivas de los trastornos parafílicos (especialmente la pedofilia, el frotteurismo o el voyeurismo) frente a otros trastornos psiquiátricos es:",
    opciones: [
      "El daño exclusivo a la flora intestinal",
      "El desarrollo rápido de demencia precoz",
      "Las consecuencias y problemas de orden penal/judicial y el daño a terceros",
      "La caída del cabello y las alteraciones ungüeales"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "parafilias"
  },

  // ==========================================
  // TEMA 14: TRASTORNOS DE LA CONDUCTA ALIMENTARIA
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "261. El trastorno caracterizado por la ingesta persistente de cualquier objeto o sustancia no nutritiva (papel, tiza, chicles, pegamento...) se denomina:",
    opciones: [
      "Rumiación",
      "Bulimia no purgativa",
      "Ortorexia",
      "Pica"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "262. Dentro del trastorno de Pica, ¿cómo se denomina clínicamente a la ingesta compulsiva de tierra?",
    opciones: [
      "Geofagia",
      "Tricofagia",
      "Litofagia",
      "Coprofagia"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "263. ¿Cuál es el nombre clínico del subtipo de Pica que consiste en el consumo e ingesta recurrente de pelo?",
    opciones: [
      "Geofagia",
      "Pagofagia",
      "Tricofagia",
      "Litofagia"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "264. En el caso de que un individuo ingiera pequeñas piedras de manera patológica e iterativa, el diagnóstico específico asociado dentro de la Pica sería:",
    opciones: [
      "Pagofagia",
      "Urolofagia",
      "Coprofagia",
      "Litofagia"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "265. La ingesta de hielo de manera persistente como manifestación del trastorno de Pica se conoce clínicamente como:",
    opciones: [
      "Geofagia",
      "Tricofagia",
      "Pagofagia",
      "Urolofagia"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "266. En relación al trastorno de Pica, el término 'Coprofagia' hace referencia a la ingesta patológica de:",
    opciones: [
      "Hielo",
      "Orines",
      "Heces",
      "Ceniza de cigarro"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "267. ¿Qué dos principales factores de riesgo destaca el temario respecto a la inducción y el desarrollo del trastorno de Pica?",
    opciones: [
      "Factores genéticos y malformaciones cerebrales",
      "Factores ambientales y la cultura",
      "Uso de antidepresivos y anticonceptivos orales",
      "Lesiones orgánicas medulares previas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "268. El Trastorno de Rumiación es una patología alimentaria caracterizada esencialmente por:",
    opciones: [
      "El rechazo absoluto a ingerir líquidos (adipsia psicosomática)",
      "La inducción del vómito exclusivamente mediante el uso de objetos introducidos en la faringe",
      "Regurgitar la comida previamente tragada en la boca para volver a masticarla, tragarla o escupirla repetidamente",
      "Los atracones nocturnos de comida hipercalórica seguidos de ejercicio excesivo"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "269. A nivel de la valoración clínica visual por parte de enfermería, los pacientes con trastorno de Rumiación durante el episodio activo suelen presentar una postura muy característica descrita como:",
    opciones: [
      "Posición fetal en decúbito lateral con llanto intenso",
      "Posición encorvada de 'lactante en succión', con esfuerzo, la cabeza hacia atrás y movimientos de succión con la lengua",
      "Postura de hiperextensión cervical severa (opistótonos) y espasmo",
      "Bipedestación estática con temblor de miembros inferiores"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "270. Entre las categorías de 'Otro trastorno de la conducta alimentaria', ¿cómo se denomina a la anorexia en la cual se cumplen todas las características excepto que el paciente presenta un peso dentro o por encima de lo normal?",
    opciones: [
      "Bulimia no purgativa",
      "Vigorexia severa",
      "Anorexia nerviosa atípica",
      "Trastorno por rumiación restrictivo"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "271. El 'Trastorno por purgas' se incluye en la clasificación de Otros TCA, y consiste fundamentalmente en:",
    opciones: [
      "El rechazo de alimentos sólidos y consumo único de suplementos",
      "Purgarse mediante laxantes, diuréticos o productos eméticos (provocadores de vómito) para controlar el peso o la figura sin el atracón previo",
      "Masticar la comida y escupirla inmediatamente sin tragar nada",
      "La ingesta exclusiva de productos de limpieza para purgar el tracto intestinal"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "272. En los casos atípicos o especificados, la Bulimia Nerviosa puede diagnosticarse como 'Bulimia de frecuencia baja y/o duración limitada' cuando:",
    opciones: [
      "El peso del paciente baja drásticamente a un IMC menor a 15",
      "Los atracones y purgas se producen con una recurrencia menor o una temporalidad más corta que los criterios temporales estándar",
      "El paciente solo vomita al comer carne animal",
      "El trastorno cursa con alucinaciones de que los alimentos están podridos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "273. El 'Trastorno por atracones' (de frecuencia baja y/o duración limitada) comparte con la bulimia la ingesta compulsiva de grandes cantidades de comida, pero se diferencia principalmente en que:",
    opciones: [
      "Solo consumen productos no alimenticios",
      "Ocurre exclusivamente durante estados de sonambulismo",
      "No existe la fase posterior de comportamientos compensatorios inapropiados recurrentes (como las purgas o el ejercicio excesivo)",
      "El paciente presenta una fobia severa a tragar líquidos"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "274. La Urolofagia es otra variante del trastorno de Pica que consiste en la ingesta persistente e inapropiada de:",
    opciones: [
      "Pintura y disolventes",
      "Uñas propias y piel muerta",
      "Orines",
      "Barro o arcilla"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "275. En el diagnóstico de un trastorno de la ingesta como la Pica en pediatría, es imprescindible para clasificarlo como trastorno que:",
    opciones: [
      "El niño sea menor de un año de vida",
      "Se demuestre una alergia al gluten subyacente",
      "La práctica no esté sancionada ni forme parte de una tradición cultural respaldada de su entorno",
      "Tenga una causa orgánica cerebral (tumor) visible en el TAC"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "276. Epidemiológicamente, los trastornos de la ingesta como la Pica o la Rumiación suelen tener una alta comorbilidad y observarse frecuentemente acompañados de:",
    opciones: [
      "Esquizofrenia paranoide de inicio tardío",
      "Trastornos motores del neurodesarrollo o discapacidad intelectual y otros TEA",
      "Adicción a estimulantes en adultos",
      "Trastornos parafílicos del cortejo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "277. En la evaluación física de un paciente con un TCA purgativo crónico (vómitos, uso de laxantes/eméticos), ¿qué alteraciones orgánicas graves DEBE vigilar la enfermería prioritariamente a través de analíticas?",
    opciones: [
      "La elevación de los niveles de prolactina y hormonas tiroideas",
      "La insuficiencia hepática aguda por déficit de bilirrubina",
      "Los desequilibrios hidroelectrolíticos severos (ej. hipopotasemia, hipocloremia)",
      "El exceso de vitaminas liposolubles"
    ],
    correcta: 2, // Generalidad de los trastornos por purgas.
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "278. En el marco clínico, ¿cuál de los siguientes elementos NO es considerado un objeto 'típico' ingerido en los cuadros de Pica reportados en los apuntes?",
    opciones: [
      "Gusanos y pegamento",
      "Tiza y jabón",
      "Verduras y tubérculos crudos",
      "Ropa y pintura"
    ],
    correcta: 2, // Las verduras crudas son alimento. La Pica es ingesta de sustancias NO alimentarias y NO nutritivas.
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "279. La regurgitación en el trastorno de Rumiación se diferencia de enfermedades digestivas anatómicas orgánicas o reflujos comunes porque la rumiación:",
    opciones: [
      "Suele realizarse sin presentar náuseas involuntarias, arcadas físicas bruscas o asco, mostrando a menudo una sensación de alivio o pasividad",
      "Siempre cursa con sangrado esofágico masivo en las primeras 24 horas",
      "Aparece exclusivamente mientras el paciente duerme profundamente",
      "Va seguida inevitablemente de un ataque de pánico y dolor retroesternal"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  {
    asignatura: "salud_mental",
    tema: 14,
    pregunta: "280. Las personas con Anorexia Nerviosa Atípica, según la clasificación de 'Otros trastornos de la conducta alimentaria', tienen mayor riesgo de ser infradiagnosticadas porque:",
    opciones: [
      "Aceptan de buen grado comer ante los demás en todo momento",
      "Su peso corporal se encuentra dentro o por encima de los límites normales, ocultando la malnutrición o el comportamiento restrictivo subyacente",
      "Siempre tienen atracones desmesurados antes de restringir la comida",
      "El trastorno solo dura dos días a la semana"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "tca_excrecion"
  },
  // ==========================================
  // TEMA 15: TRASTORNOS DE LA PERSONALIDAD
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "281. El término 'personalidad' proviene etimológicamente de la palabra 'personam', que en sus orígenes significaba:",
    opciones: [
      "Individuo racional y pensante",
      "Apariencia, cometido, máscara y rol social",
      "Alma o espíritu inmutable",
      "Conjunto de enfermedades mentales"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "282. La personalidad se compone fundamentalmente de dos factores biológicos y sociales que interactúan entre sí. Estos son:",
    opciones: [
      "La inteligencia y la memoria a corto plazo",
      "El temperamento (innato/biológico) y el carácter (adquirido/social)",
      "El fenotipo y el genotipo recesivo",
      "La motivación intrínseca y la atención focalizada"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "283. En el funcionamiento de la personalidad (área intrapersonal o 'Self'), la capacidad de fijarse objetivos y metas impulsadas por una motivación intrínseca (relacionada directamente con la autoestima) se denomina:",
    opciones: [
      "Autodirección",
      "Intimidad",
      "Empatía",
      "Apatía plana"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "284. Según la valoración propuesta por la OMS para los patrones de comportamiento de la personalidad, el dominio clínico caracterizado por la evitación de experiencias socioemocionales (rehuir interacciones íntimas y afecto restringido) es el:",
    opciones: [
      "Antagonismo",
      "Psicoticismo",
      "Desapego (frente a extraversión)",
      "Afecto negativo (frente a estabilidad emocional)"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "285. El dominio de 'Antagonismo' (frente a amabilidad) en los trastornos de personalidad se caracteriza conductualmente por:",
    opciones: [
      "El aislamiento social y la incapacidad absoluta de sentir placer",
      "Creencias inusuales o excéntricas (como leer la mente)",
      "Conductas que sitúan al individuo en conflicto con otros, como la grandiosidad, la manipulación, el engaño y la insensibilidad",
      "La sumisión extrema a las necesidades de otras personas por miedo al abandono"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "286. En la clasificación general de los trastornos de la personalidad, ¿qué patologías se incluyen dentro del 'Grupo A' (personas con un patrón de comportamientos raros o excéntricos)?",
    opciones: [
      "Límite, histriónico y antisocial",
      "Paranoide, esquizotípico y esquizoide",
      "Evitativo, dependiente y obsesivo-compulsivo",
      "Ciclotímico y distímico"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "287. El Trastorno de la Personalidad Límite (TLP) se caracteriza clínicamente por andar en una fina línea entre lo aceptado y lo no aceptado. Un rasgo muy característico de este perfil es:",
    opciones: [
      "La estabilidad perfecta y prolongada de todas sus relaciones interpersonales",
      "La ausencia total de comportamientos impulsivos",
      "La inestabilidad en las relaciones interpersonales, distorsión de la propia imagen, y comportamientos de alto riesgo (ej. autolisis, boicots, consumo de sustancias)",
      "El rechazo total a cualquier tipo de compañía, prefiriendo la soledad absoluta"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "288. Epidemiológicamente, el Trastorno de la Personalidad Límite (TLP) tiene un gran impacto en el sistema sanitario. ¿Cuál es su prevalencia de género y su tasa de hospitalización psiquiátrica?",
    opciones: [
      "Afecta en un 90% a los varones y no suele requerir hospitalización",
      "Prevalece ampliamente en las mujeres (75%) y supone hasta un 20% de todos los pacientes hospitalizados en salud mental",
      "Se diagnostica exclusivamente en niños menores de 12 años",
      "Afecta por igual a hombres y mujeres sin requerir nunca ingreso"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "289. ¿Qué trastorno de la personalidad se caracteriza por una extrema emotividad, la búsqueda de atención excesiva, el papel continuo de 'víctima' o manipulador, y una baja tolerancia a la frustración?",
    opciones: [
      "Trastorno de la personalidad paranoide",
      "Trastorno de la personalidad esquizoide",
      "Trastorno de la personalidad histriónica",
      "Trastorno de la personalidad obsesivo-compulsiva"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "290. El Trastorno de la Personalidad Narcisista se distingue clínicamente por una fachada de grandiosidad y falta de empatía, pero subyacentemente el paciente suele presentar:",
    opciones: [
      "Una autoestima inquebrantable y superior",
      "Una autoestima muy baja y una sensibilidad extrema a la crítica",
      "Inteligencia límite (CI < 70)",
      "Episodios crónicos de catatonía motora"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "291. Epidemiológicamente, a diferencia del trastorno límite o histriónico, el Trastorno de la Personalidad Narcisista prevalece predominantemente en:",
    opciones: [
      "Mujeres en edad menopáusica (100% de los casos)",
      "Hombres (entre un 50% y un 75% de los diagnósticos)",
      "Niñas en etapa preescolar",
      "La proporción es idéntica en todas las franjas de edad y sexo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "292. El Trastorno de la Personalidad Obsesivo-Compulsiva (distinto del TOC de ansiedad) se caracteriza por un patrón general de preocupación por el orden, el perfeccionismo y el control a expensas de la flexibilidad. Este trastorno afecta de forma mayoritaria a:",
    opciones: [
      "Las mujeres",
      "Los hombres (el doble de hombres que de mujeres)",
      "Adolescentes en pubertad temprana",
      "Infantes menores de 5 años"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "293. Se define como un perfil de personalidad 'Pasivo-Agresivo' (en la clasificación de otros trastornos no especificados) a aquel individuo que:",
    opciones: [
      "Inicia peleas físicas de forma constante en bares y locales",
      "Se autolesiona mediante cortes en los brazos para liberar tensión",
      "Muestra una agresión indirecta u hostilidad encubierta; por ejemplo, teniendo las herramientas y el deber de ayudar frente a un problema, decide deliberadamente no hacerlo",
      "Asume de forma servil todo lo que le mandan sin rechistar"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "294. En el abordaje del paciente con un Trastorno de la Personalidad, las pautas de actuación de la enfermera (PAE) DEBEN centrarse firmemente en:",
    opciones: [
      "Acceder a todas las demandas del paciente para mantenerlo tranquilo y evitar enfados",
      "Poner límites claros en su comportamiento favoreciendo su autocontrol y no permitir que viole los derechos de otros pacientes",
      "Ignorar completamente sus provocaciones y no dirigirle la palabra en todo el turno",
      "Fomentar la intelectualización para que racionalice sus problemas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "295. Un riesgo muy alto para los profesionales de enfermería que atienden a personas con trastornos de personalidad (especialmente histriónicos o límites) es la manipulación. Por ello, una medida de cuidado hacia el profesional es:",
    opciones: [
      "Analizar sus propios sentimientos (contratransferencia) y buscar apoyo en otros compañeros de equipo para no dejarse absorber",
      "Ocultar el diagnóstico al resto del equipo para evitar el estigma",
      "Establecer una relación de amistad íntima con el paciente para ganarse su confianza",
      "Recetar ansiolíticos por cuenta propia"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "296. A la hora de comunicarse con pacientes con Trastorno Límite de la Personalidad en estado de crisis o manipulación, la enfermería debe evitar a toda costa:",
    opciones: [
      "Explicar las normas de la unidad de forma clara",
      "Discutir de forma gratuita y entrar en provocaciones o confrontaciones agresivas",
      "Documentar el comportamiento en la historia clínica",
      "Fomentar la expresión verbal de sus sentimientos de rabia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "297. De los siguientes diagnósticos de enfermería (NANDA), ¿cuál está MUY presente en la conceptualización del Trastorno de Personalidad Límite y requiere vigilancia extrema?",
    opciones: [
      "Riesgo de estreñimiento",
      "Potencial de violencia y riesgo de autolesiones",
      "Deterioro del intercambio de gases",
      "Limpieza ineficaz de las vías aéreas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "298. Uno de los dominios alterados en la personalidad es la 'Desinhibición' (frente a la escrupulosidad). Las personas con este rasgo marcado suelen manifestar:",
    opciones: [
      "Un perfeccionismo rígido e inflexible que paraliza su actividad",
      "Una orientación hacia la satisfacción inmediata y comportamientos impulsivos (ej. temeridad, asunción de riesgos innecesarios)",
      "Un afecto totalmente plano y sin reacción ante estímulos dolorosos",
      "Una devoción extrema al trabajo y a la productividad"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "299. La alteración de la empatía en los trastornos de personalidad se enmarca dentro del funcionamiento del 'Self' en su faceta:",
    opciones: [
      "Intrapersonal",
      "Interpersonal (social)",
      "Biológica o puramente genética",
      "Del juicio formal estructurado"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },
  {
    asignatura: "salud_mental",
    tema: 15,
    pregunta: "300. Entre las personas con Trastorno de la Personalidad Antisocial (frecuentemente asociado a las adicciones o conductas delictivas), es un síntoma cardinal:",
    opciones: [
      "El respeto escrupuloso por las normas de tráfico",
      "La falta absoluta de empatía, siendo crueles, cínicos, arrogantes e irresponsables, y sin mostrar remordimientos al dañar a otros",
      "La presencia de alucinaciones auditivas constantes",
      "El llanto inconsolable por el bienestar de los animales"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_personalidad"
  },

  // ==========================================
  // TEMA 16: TRASTORNOS ADICTIVOS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "301. En el marco teórico de la adicción, el 'Control Conductual Percibido (CCP)' que falla en el paciente adicto está compuesto por dos dimensiones fundamentales que son:",
    opciones: [
      "La herencia mendeliana y el ambiente intrauterino",
      "La capacidad real de controlar la situación y la capacidad subjetiva (la creencia de poder controlarlo)",
      "La norma social y la presión familiar",
      "La cantidad de sustancia ingerida y la pureza de la misma"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "302. Fisiopatológicamente, tanto en las adicciones químicas como en las conductuales, se produce la activación del sistema de recompensa cerebral. ¿Qué neurotransmisor está primordialmente implicado en las vías de placer generadas en los primeros consumos?",
    opciones: [
      "Cortisol",
      "Dopamina",
      "Histamina",
      "Tiroxina"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "303. A medida que avanza la adicción (fase tardía), el paciente ya no consume para conseguir el 'subidón' o placer inicial debido al colapso de los neurotransmisores, sino que lo hace fundamentalmente para:",
    opciones: [
      "Acabar con los efectos colaterales adversos de no consumir (síndrome de abstinencia)",
      "Demostrar a su familia que no tiene un problema",
      "Aumentar su capacidad intelectual en el trabajo",
      "Experimentar efectos psicodélicos místicos positivos"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "304. La necesidad de incrementar notablemente la dosis de una sustancia consumida para lograr el mismo efecto inicial deseado se conoce clínicamente como:",
    opciones: [
      "Abstinencia secundaria",
      "Tolerancia (o taquifilaxia)",
      "Dependencia psicológica pura",
      "Craving"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "305. Según el DSM-5, la gravedad de un trastorno adictivo se clasifica en función del número de síntomas que presente el paciente. Si manifiesta entre 4 y 5 síntomas, la adicción se califica como:",
    opciones: [
      "Leve",
      "Moderada",
      "Grave",
      "Extrema"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "306. En relación al Trastorno Adictivo por consumo de Alcohol, el daño a nivel del Sistema Nervioso Central puede ocasionar déficits cognitivos y amnesia grave debido a la deficiencia de Tiamina. Este cuadro clínico crónico recibe el nombre de:",
    opciones: [
      "Delirium tremens",
      "Síndrome de Wernicke-Korsakoff",
      "Corea de Huntington",
      "Enfermedad de Alzheimer precoz"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "307. En un paciente que acude a urgencias con inyección conjuntival (ojos muy rojos), aumento desmesurado del apetito, sequedad de boca y taquicardia, la enfermera debe sospechar de una intoxicación por:",
    opciones: [
      "Heroína",
      "Cocaína",
      "Cannabis",
      "Anfetaminas"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "308. Respecto a la adicción a la Cafeína, se considera que existe un cuadro de 'intoxicación' con síntomas de nerviosismo, diuresis y taquicardia, cuando el consumo rápido excede la dosis aproximada de:",
    opciones: [
      "50 mg",
      "250 mg",
      "1000 mg",
      "No existe intoxicación posible por cafeína"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "309. La abstinencia grave por Opiáceos (morfina, heroína, metadona) se caracteriza fisiológicamente por la presencia de:",
    opciones: [
      "Miosis puntiforme y estreñimiento severo",
      "Humor disfórico, lagrimeo/rinorrea, dilatación pupilar, piloerección y diarrea",
      "Convulsiones crónicas y coma inmediato",
      "Aumento drástico del apetito e hiperactividad social"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "310. Epidemiológicamente, la adicción química que presenta una tasa de recaída del 60% en la primera semana de cese y en la que menos de un 5% de los pacientes permanecen abstinentes de por vida es la adicción al:",
    opciones: [
      "Alcohol",
      "Heroína",
      "Tabaco",
      "Cannabis"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "311. En el abordaje terapéutico de la deshabituación, las 'Entrevistas Motivacionales' dirigidas por la enfermería tienen como técnica clave:",
    opciones: [
      "Discutir agresivamente para romper las resistencias del paciente",
      "Expresar empatía, generar discrepancia entre su consumo y sus metas, evitar la discusión y fomentar la autoeficacia",
      "Imponer castigos físicos cada vez que confiesen un deseo de consumir",
      "Ignorar las recaídas y no volver a hablar de la sustancia jamás"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "312. Dentro del proceso general del tratamiento de las adicciones químicas, la fase que tiene por objetivo reducir el malestar físico resultante del cese de la droga (suele durar de 7 a 14 días en internamiento o ambulatorio) se denomina:",
    opciones: [
      "Fase de reinserción",
      "Fase de prevención de recaídas",
      "Fase de desintoxicación",
      "Fase de consolidación cognitiva"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "313. El concepto de 'Patología Dual' en el área de adicciones hace referencia obligatoriamente a:",
    opciones: [
      "Que el paciente consume al menos dos drogas diferentes al mismo tiempo",
      "La coexistencia de un trastorno mental (ej. depresión, TLP, esquizofrenia) junto a un trastorno adictivo por consumo de sustancias en el mismo paciente",
      "Que ambos miembros de la pareja son adictos a la misma sustancia",
      "La alternancia entre períodos maníacos y depresivos inducidos por cocaína"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "314. En cuanto a las adicciones psicológicas (sin sustancia), el 'Juego Patológico' o Ludopatía sigue un modelo de fases descrito por Custer. La fase inicial, donde la persona suele ganar premios o dinero que asocia a un estado de excitación especial, se denomina:",
    opciones: [
      "Etapa de aceptación",
      "Etapa de desesperación",
      "Etapa dorada",
      "Etapa de revancha"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "315. Un criterio fundamental y común entre los pacientes con Trastorno por Juego Patológico (Ludopatía) respecto a su motivación es que:",
    opciones: [
      "Juegan porque el juego es siempre un buen método y seguro para ganar dinero y enriquecerse a largo plazo",
      "Suelen jugar para superar el aburrimiento, evadir problemas o buscar niveles altos de excitación, recurriendo cada vez a apuestas mayores para sentir lo mismo",
      "Juegan exclusivamente en estado de sonambulismo",
      "La adicción aparece siempre tras el primer contacto a los 8 años de edad"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "316. En relación al manejo de enfermería frente a una 'Recaída' en el paciente adicto, la actitud terapéutica correcta indica que:",
    opciones: [
      "Debe expulsarse al paciente del programa inmediatamente para que aprenda",
      "Es imprescindible evitar las culpabilizaciones, entendiendo la recaída como un evento frecuente dentro del proceso de recuperación a largo plazo",
      "Se debe juzgar moralmente al paciente para que sienta vergüenza y no lo repita",
      "Implica el fracaso absoluto y definitivo del tratamiento"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "317. La hipersexualidad o adicción sexual puede presentarse de diversas formas. El término clásico 'ninfomanía' para hacer referencia a esta adicción recaía exclusivamente sobre:",
    opciones: [
      "Los hombres (frente a la satiriasis en mujeres)",
      "Las mujeres (frente a la satiriasis o donjuanismo en hombres)",
      "Los adolescentes prepúberes",
      "Cualquier individuo que consuma pornografía online"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "318. Entre las sustancias depresoras del Sistema Nervioso Central (SNC) y que, por tanto, en caso de intoxicación o sobredosis conllevan un riesgo de estupor, coma o parada respiratoria, se encuentran:",
    opciones: [
      "La cocaína y las metanfetaminas",
      "El LSD y el peyote",
      "El alcohol, los opiáceos (heroína, metadona) y las benzodiacepinas/sedantes",
      "La cafeína y la nicotina a altas dosis"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "319. En las adicciones psicológicas, el ciclo habitual de progresión patológica en la mente del paciente sigue este orden secuencial:",
    opciones: [
      "Deseo > Dependencia > Emoción > Obsesión",
      "Emoción > Deseo > Obsesión > Dependencia o tolerancia > Síndrome de abstinencia",
      "Obsesión > Síndrome de abstinencia > Deseo positivo",
      "Dependencia > Emoción neutra > Deseo nulo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 16,
    pregunta: "320. ¿Qué trastorno adictivo causado por sustancias tiene como característica toxicológica principal su lenta eliminación, pudiendo detectarse trazas en el organismo hasta 8 días o más después del consumo (como en el caso de la Fenciclidina/Alucinógenos)?",
    opciones: [
      "El alcohol etílico",
      "Los inhalantes volátiles (pegamentos)",
      "Los alucinógenos (ej. fenciclidina)",
      "La cafeína"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  // ==========================================
  // TEMA 17: TRASTORNOS ADICTIVOS QUÍMICOS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "361. Según la 'Fórmula de la intención' en el estudio de las adicciones, el Control Conductual Percibido (CCP) está compuesto por dos dimensiones fundamentales. ¿Cuáles son? [2, 10]",
    opciones: [
      "La genética heredada y el ambiente social",
      "La capacidad real de controlar la situación y la capacidad subjetiva (la creencia de poder controlarlo)",
      "La impulsividad biológica y el control parental",
      "La norma social y la actitud desafiante"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "362. A nivel fisiopatológico, la adicción comienza con la activación del sistema de recompensa cerebral en los primeros contactos con la sustancia. Este proceso se relaciona teóricamente con: [2]",
    opciones: [
      "El condicionamiento clásico y el Modelo E-E",
      "La jerarquía de necesidades de Maslow",
      "La etapa preoperacional de Piaget",
      "El psicoanálisis y el Complejo de Edipo"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "363. A medida que progresa un trastorno adictivo hacia su fase de dependencia crónica, el paciente cambia su motivación principal: ya no consume para lograr el 'subidón' o placer inicial, sino fundamentalmente para: [11]",
    opciones: [
      "Demostrar que tiene control sobre la sustancia",
      "Acabar con los efectos colaterales o el malestar de no consumir (síndrome de abstinencia)",
      "Potenciar sus capacidades cognitivas en el trabajo",
      "Aumentar su nivel de grelina y leptina"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "364. Epidemiológicamente, los apuntes indican que la edad más frecuente para desarrollar un cuadro de adicción a sustancias se encuentra en la franja de: [11]",
    opciones: [
      "Los 10 a los 14 años",
      "Los 17 a los 24 años",
      "Los 30 a los 40 años",
      "Mayores de 60 años"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "365. En el proceso de recuperación, la Teoría de la Autodeterminación asume una postura realista frente a la adicción, la cual contempla que: [12]",
    opciones: [
      "El paciente jamás volverá a probar ninguna sustancia psicoactiva",
      "En alguna de las fases habrá recaída, pero lo importante es que esta se distancie a lo largo del tiempo",
      "La adicción es incurable y solo cabe el ingreso perpetuo",
      "La recaída debe castigarse severamente con aislamiento"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "366. El síndrome de abstinencia severo por consumo crónico de cannabis puede provocar malestar clínicamente significativo acompañado de síntomas como: [13]",
    opciones: [
      "Piloerección intensa y miosis puntiforme",
      "Irritabilidad, rabia, dificultades para dormir, pérdida de apetito y dolor abdominal",
      "Fuga de ideas, verborrea e hiperactividad motora",
      "Alucinaciones visuales complejas (delirium tremens)"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "367. Una intoxicación aguda por alucinógenos (como el LSD o la fenciclidina) se caracteriza por presentar signos autonómicos y neurológicos tales como: [14]",
    opciones: [
      "Bradicardia extrema e hipotensión ortostática",
      "Nistagmo, hipertensión, taquicardia, rigidez muscular y reducción de la respuesta al dolor",
      "Retención urinaria masiva y estreñimiento paralítico",
      "Aumento drástico del apetito (hiperfagia)"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "368. Si un paciente llega a urgencias con signos clínicos de somnolencia o coma, habla disártrica y un claro deterioro de la atención y la memoria, la enfermera sospechará principalmente de una intoxicación por: [15]",
    opciones: [
      "Cocaína",
      "Opiáceos (morfina, heroína, metadona)",
      "Derivados anfetamínicos",
      "Cafeína a altas dosis"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "369. Tras el cese del consumo de tabaco, el síndrome de abstinencia nicotínico se manifiesta clásicamente a través de: [16]",
    opciones: [
      "Euforia extrema y alucinaciones olfativas",
      "Irritabilidad, frustración, ansiedad, aumento del apetito e insomnio",
      "Pérdida drástica de peso y anorexia nerviosa",
      "Convulsiones tónico-clónicas generalizadas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "370. El Proceso de Atención de Enfermería (PAE) establece que la detección de drogas en orina debe realizarse bajo confidencialidad y consentimiento, estando indicada especialmente cuando: [16]",
    opciones: [
      "Se contrata a un nuevo empleado en cualquier sector",
      "Existe una sospecha de uso de drogas en servicios de urgencias o por solicitud del médico tratante/padres",
      "Un paciente solicita un alta voluntaria",
      "Se realizan exámenes de salud rutinarios anuales obligatorios"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "371. En la valoración de los procesos psicológicos del paciente adicto, la enfermería debe prestar especial atención a: [7]",
    opciones: [
      "Su índice de masa corporal",
      "Los déficits cognitivos, la alteración del contenido del pensamiento y el síndrome amotivacional",
      "El rango de movimiento articular de sus extremidades",
      "Su capacidad visual cromática"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "372. ¿Cuáles de los siguientes son considerados factores de riesgo de ámbito INDIVIDUAL para el desarrollo de un trastorno adictivo? [7]",
    opciones: [
      "Alta autoestima y locus de control interno",
      "Autoestima baja, baja tolerancia a la frustración, percepción minimalista del riesgo y depresión desatendida",
      "Ausencia de redes de apoyo en los jóvenes (nivel social)",
      "Involucramiento activo de los padres en la educación"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "373. Desde el ámbito SOCIAL, un factor que favorece o precipita la aparición de conductas adictivas en la comunidad es: [8]",
    opciones: [
      "La rápida instauración de normativas y disciplina escolar",
      "La tolerancia social de conductas de riesgo y la difusión de modelos de éxito fácil en los medios de comunicación",
      "El exceso de recursos económicos y becas universitarias",
      "La hipervigilancia policial"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "374. Como medida de prevención y tratamiento, se consideran factores de PROTECCIÓN en el ámbito familiar: [9]",
    opciones: [
      "La permisividad total y los límites difusos",
      "Las relaciones familiares armónicas, la disciplina coherente con normas claras y la comunicación continua",
      "La delegación total de la educación a la escuela",
      "La ausencia física de los progenitores"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "375. La Prevención Primaria en materia de trastornos adictivos tiene como objetivo principal: [17]",
    opciones: [
      "Desintoxicar físicamente al paciente en el hospital",
      "La educación sanitaria para conseguir cambios de actitudes e información adecuada, interviniendo en grupos de riesgo",
      "Administrar terapias aversivas en pacientes crónicos",
      "La reinserción laboral de pacientes rehabilitados"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "376. En el tratamiento de una intoxicación aguda (cuidados físicos iniciales), la prioridad de enfermería consiste en: [7]",
    opciones: [
      "Aplicar una terapia cognitivo-conductual profunda",
      "Facilitar la eliminación de la droga, evitar que pase a circulación general y utilizar fármacos antagonistas si fuera preciso",
      "Contactar inmediatamente con sus jefes laborales",
      "Ignorar el estado físico y centrarse en la psicoterapia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "377. Los focos principales sobre los que se estructuran las intervenciones sociales e interpersonales en la adicción son: [7]",
    opciones: [
      "Conflictos interpersonales, cambios de papel, problemas laborales y déficits interpersonales",
      "Exclusivamente problemas genéticos y hereditarios",
      "Las deficiencias alimentarias crónicas",
      "Los trastornos de la marcha y coordinación motora"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "378. ¿Qué particularidad toxicológica presentan drogas como la Fenciclidina (alucinógenos) que afecta a su detección y síndrome de abstinencia? [13]",
    opciones: [
      "Se metabolizan y desaparecen de la sangre en menos de 10 minutos",
      "Tienen una eliminación muy lenta, pudiendo detectarse o prolongar sus efectos durante 8 días o más",
      "Se excretan exclusivamente por vía respiratoria",
      "Son indetectables en los análisis de orina"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "379. Al tratar a un paciente que sufre una recaída en el consumo, la actuación adecuada de la enfermería debe ser: [18, 19]",
    opciones: [
      "Expulsarlo del programa terapéutico de inmediato",
      "Culpabilizarlo para generarle disonancia cognitiva severa",
      "Evitar las culpabilizaciones, entendiendo la recaída como una parte frecuente y esperable dentro del proceso de recuperación a largo plazo",
      "Informar inmediatamente a las autoridades policiales locales"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 17,
    pregunta: "380. Dentro del PAE, la valoración física de un paciente con un patrón crónico de uso de drogas por vía parenteral incluye vigilar el riesgo específico de: [7]",
    opciones: [
      "Infecciones de transmisión sanguínea como VIH o hepatitis, y el deterioro físico crónico",
      "El desarrollo de trastornos parafílicos asociados",
      "La aparición repentina de mutismo selectivo",
      "La obesidad mórbida incontrolable"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "adicciones"
  },

  // ==========================================
  // TEMA 18: TRASTORNOS ADICTIVOS PSICOLÓGICOS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "381. Los trastornos adictivos psicológicos (juego, compras, internet) siguen un ciclo de progresión patológica en la mente del individuo estructurado como: [3]",
    opciones: [
      "Obsesión > Dependencia > Emoción > Deseo",
      "Deseo > Tolerancia > Abstinencia > Curación",
      "Emoción > Deseo > Obsesión > Dependencia o tolerancia > Síndrome de abstinencia",
      "Abstinencia > Emoción > Tolerancia > Obsesión"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "382. En la Ludopatía (Juego patológico), las motivaciones principales que refieren los pacientes para jugar son: [20]",
    opciones: [
      "Ahorrar a largo plazo y realizar inversiones seguras",
      "Superar el aburrimiento, olvidar problemas y conseguir niveles altos de excitación",
      "Exclusivamente el cumplimiento de tradiciones culturales",
      "Tratar síntomas de ansiedad generalizada bajo prescripción médica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "383. Aunque los pacientes lúdicos afirmen hacerlo para conseguir ganancias, el temario recalca categóricamente que: [20]",
    opciones: [
      "El juego es una inversión muy rentable si se realiza de forma profesional",
      "El juego no es un buen camino ni un método válido para ganar dinero",
      "El juego siempre asegura un retorno mínimo del 50%",
      "Las apuestas deportivas tienen una probabilidad de ganancia garantizada"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "384. La sintomatología psiquiátrica de la Piromanía (trastorno de control de los impulsos) incluye: [6]",
    opciones: [
      "Robar mecheros para coleccionarlos sin llegar a usarlos",
      "La provocación deliberada de incendios para cobrar un seguro o expresar venganza",
      "Tensión/excitación antes de provocar el fuego, y fascinación o placer/alivio al presenciar sus consecuencias",
      "Miedo irracional a acercarse a cualquier fuente de calor (pirofobia)"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "385. A diferencia de un robo común tipificado penalmente, el trastorno de Cleptomanía se define por: [6]",
    opciones: [
      "El fracaso recurrente para resistir el impulso de robar objetos que NO son necesarios para uso personal ni por su valor monetario",
      "Robar exclusivamente grandes sumas de dinero en bancos",
      "Realizar hurtos para expresar rabia o vengarse de un conocido",
      "Cometer actos delictivos inducidos por una alucinación auditiva (voces de mando)"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "386. Un síntoma clave que comparten la Piromanía y la Cleptomanía en el momento previo a la ejecución de su respectiva conducta es: [6]",
    opciones: [
      "Una amnesia disociativa temporal",
      "Un aumento progresivo de la sensación de tensión interna",
      "Una parálisis motora por conversión",
      "Una profunda tristeza y apatía (estado depresivo)"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "387. En el estudio de las adicciones a internet y redes sociales en España, los datos revelan que el porcentaje de jóvenes (entre 10 y 15 años) que navegan por la red alcanza el: [4]",
    opciones: [
      "35,5%",
      "50,0%",
      "87,3%",
      "100%"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "388. A pesar del gran riesgo de adicción a las nuevas tecnologías, ¿qué mínimo porcentaje de jóvenes recurre a sus padres para pedir ayuda frente a este problema? [4]",
    opciones: [
      "Más del 50%",
      "En torno al 25%",
      "Menos del 2%",
      "Alrededor del 90%"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "389. Según las estadísticas proporcionadas en los apuntes respecto a las adicciones conductuales, el uso de videojuegos muestra su mayor frecuencia en: [4]",
    opciones: [
      "Varones adultos mayores de 40 años",
      "Mujeres adolescentes (15 a 18 años)",
      "Varones en la infancia (entre los 7 y 10 años)",
      "Mujeres de la tercera edad"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "390. En relación con las redes sociales (evaluadas como conducta adictiva), el 66% de los jóvenes utilizan las nuevas tecnologías primordialmente para: [4]",
    opciones: [
      "Buscar información académica exclusivamente",
      "Chatear y conectar con pornografía sexual",
      "Apostar dinero en casinos online",
      "Programar software y aprender informática básica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "391. El trastorno de control de los impulsos que se caracteriza por la adicción al teléfono móvil y el miedo irracional a salir de casa sin él se denomina comúnmente: [3]",
    opciones: [
      "Cibercondría",
      "Nomofobia",
      "Vigorexia",
      "Alogia tecnológica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "392. La retirada brusca de la conducta adictiva psicológica (ej. apagar el internet, quitar las tarjetas de crédito) provoca en el paciente: [3]",
    opciones: [
      "Un sentimiento automático de paz y curación",
      "Síndrome de abstinencia, estado de ánimo disfórico, insomnio e inquietud psicomotora",
      "Amnesia retrógrada localizada",
      "El desarrollo de tics vocales y coprolalia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "393. La adicción a la televisión en España muestra cifras muy elevadas. ¿Cuál es el promedio de consumo diario recogido en el temario? [5]",
    opciones: [
      "60 minutos al día",
      "120 minutos al día",
      "229 minutos por persona y día (casi 4 horas)",
      "Más de 10 horas al día de media"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "394. Respecto al uso temprano de juegos de azar online (apuestas deportivas) en población adolescente, se estima que: [5]",
    opciones: [
      "Ningún adolescente ha accedido nunca por las prohibiciones legales",
      "Un 5% juegan con mucha frecuencia y hasta un 12% lo han probado en alguna ocasión",
      "Solo juegan presencialmente en salones de juego, nunca online",
      "Afecta en exclusiva a mujeres mayores de 18 años"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "395. Para comenzar a abordar un trastorno adictivo (químico o psicológico), la premisa inicial obligatoria y fundamental que debe presentar el paciente es: [3]",
    opciones: [
      "Poseer un estatus socioeconómico alto para pagar las terapias",
      "Estar medicado preventivamente con litio",
      "Tener noción del problema y mostrar aceptación de la enfermedad",
      "Haber tocado fondo sufriendo una ruina económica total"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "396. Dentro del tratamiento de las adicciones, la fase de 'Motivación para el cambio' requiere que el paciente reconozca que su problema le causa: [5]",
    opciones: [
      "Ningún inconveniente real en su vida",
      "Unos inconvenientes mayores que las ventajas que supondría dar un cambio, entendiendo que no puede lograrlo por sí solo",
      "Un aumento de sus capacidades creativas y artísticas",
      "Una mejora sustancial en su desempeño familiar"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "397. Entre las estrategias de intervención psicológica recomendadas para tratar las conductas adictivas se encuentra la EPR. ¿Qué significan estas siglas? [21]",
    opciones: [
      "Evaluación Psiquiátrica Retrospectiva",
      "Entrenamiento en Patrones de Relajación",
      "Exposición con Prevención de Respuesta",
      "Evitación Preventiva de Recaídas"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "398. La estrategia global de intervención de enfermería se fundamenta en la 'Teoría de la autodeterminación', que consiste en trabajar con el paciente para lograr: [21]",
    opciones: [
      "Una sumisión pasiva a los deseos del equipo sanitario",
      "Una motivación intrínseca basada en la educación sanitaria, la toma de conciencia y la evitación de la recaída",
      "La curación milagrosa mediante fármacos sedantes",
      "El rechazo frontal a su familia y su entorno de amistades"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "399. En cuanto a las adicciones a las Redes Sociales, un porcentaje significativo de la población presenta un uso catalogado de 'riesgo' o 'abuso'. ¿Aproximadamente cuántos usuarios presentan algún tipo de 'uso problemático' global? [4]",
    opciones: [
      "Menos del 5%",
      "Alrededor del 15%",
      "Cerca del 40%",
      "Más del 95%"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: 18,
    pregunta: "400. Una de las consecuencias perjudiciales detectadas en un 16,7% de los jóvenes respecto al uso de las nuevas tecnologías es la percepción subjetiva de que: [4]",
    opciones: [
      "Mejora enormemente su rendimiento académico escolar",
      "Les priva del tiempo necesario para estar con sus amigos o parejas en el mundo real",
      "Aumenta su capacidad visual y sus reflejos motores",
      "Disminuye su riesgo de padecer obesidad"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  // ==========================================
  // TEMA 19: SALUD MENTAL INFANTO-JUVENIL (NEURODESARROLLO)
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "401. Según las etapas del desarrollo cognitivo de Piaget, ¿en qué fase el niño comienza a tener inteligencia representativa, imitación diferida y un fuerte egocentrismo (hacia las últimas etapas de la misma)?",
    opciones: [
      "Etapa sensorial (0 a 2 años)",
      "Etapa preoperacional (2 a 7 años)",
      "Etapa operatorio-concreto (7 a 11 años)",
      "Etapa operatorio formal (11 a 15 años)"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "402. Durante el desarrollo socio-afectivo en la adolescencia, si un individuo ha pasado por una 'crisis existencial' pero decide dejar de lado el 'compromiso' temporalmente, se dice que presenta una:",
    opciones: [
      "Difusión de identidad",
      "Identidad moratoria",
      "Identidad hipotecada",
      "Logro de identidad"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "403. Al realizar una evaluación psicométrica para el diagnóstico de Discapacidad Intelectual, un individuo que presenta un Coeficiente Intelectual (CI) entre 50 y 70 se clasifica como:",
    opciones: [
      "Inteligencia límite",
      "Trastorno del desarrollo intelectual leve",
      "Trastorno del desarrollo intelectual grave",
      "Trastorno del desarrollo intelectual profundo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "404. Existen síndromes genéticos que cursan con discapacidad intelectual severa. ¿Cuál de los siguientes afecta EXCLUSIVAMENTE a las niñas, causando una pérdida de todas las capacidades aprendidas (incluso motoras) a partir de los 13-14 años?",
    opciones: [
      "Síndrome de San Filippo",
      "Síndrome de Down",
      "Síndrome de Rett",
      "Síndrome de Lesch-Nyhan"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "405. En los trastornos de la comunicación infantiles, el 'Trastorno Fonológico' se caracteriza por la incapacidad de articular correctamente ciertos fonemas. A los sonidos que estadísticamente tardan más en aprenderse y causan más problemas se les denomina:",
    opciones: [
      "Los ocho que tardan (l, r, s, z, th, ch, dzh, y zh)",
      "Las fricativas frontales",
      "Los fonemas guturales precoces",
      "Las sibilantes mudas"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "406. Un niño en etapa escolar presenta grandes dificultades para respetar los turnos verbales, cambiar el tono de voz según la situación y comprender metáforas o dobles sentidos. ¿Cuál es el diagnóstico más probable?",
    opciones: [
      "Trastorno fonológico severo",
      "Trastorno de la fluidez de inicio en la infancia (tartamudeo)",
      "Trastorno de la comunicación social (pragmático)",
      "Alogia aguda transitoria"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "407. El Trastorno del Espectro Autista (TEA) se diagnostica en base a la deficiencia en dos grandes dominios principales, que son:",
    opciones: [
      "La memoria de trabajo a corto plazo y la inteligencia lógico-matemática",
      "La comunicación social y la inflexibilidad del comportamiento (patrones restrictivos y repetitivos)",
      "El control de los esfínteres y la fluidez verbal",
      "La agitación psicomotriz y la aparición de tics vocales complejos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "408. En relación con las causas y etiología del Trastorno del Espectro Autista (TEA), los apuntes subrayan como una premisa fundamental que:",
    opciones: [
      "Es causado directamente por una mala relación con los padres (falta de cariño)",
      "Depende exclusivamente de la clase social y la posición económica",
      "Los padres NO son los culpables, ya que es provocado por alteraciones neurológicas",
      "Es una reacción psicológica transitoria frente al estrés escolar"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "409. El Trastorno por Déficit de Atención/Hiperactividad (TDAH) se compone de tres esferas de síntomas: inatención, hiperactividad e impulsividad. La INATENCIÓN clínicamente NO debe confundirse ni atribuirse a:",
    opciones: [
      "La falta de comprensión de las instrucciones ni a actitudes desafiantes",
      "Déficits visuales graves",
      "Efectos secundarios de los neurolépticos",
      "Problemas crónicos de la marcha motora"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "410. Dentro del Trastorno Específico del Aprendizaje, los déficits interfieren notablemente en el rendimiento académico y suelen identificarse en áreas concretas. Según los apuntes, NO se engloba como un especificador dentro de este trastorno a:",
    opciones: [
      "Dificultades en la lectura (lenta y con esfuerzo)",
      "Dificultades con el razonamiento matemático",
      "Dificultades ortográficas o en la expresión escrita",
      "Dificultades en la orientación espacial y memoria a largo plazo"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "411. El Trastorno del Desarrollo de la Coordinación se define clínicamente cuando la ejecución de habilidades motoras está por debajo de lo esperado e interfiere notablemente en la vida diaria. Epidemiológicamente, ¿a qué género afecta más?",
    opciones: [
      "A las mujeres en una proporción 5:1",
      "A los varones en una proporción de 2:1 a 7:1",
      "Afecta por igual a ambos sexos en la infancia temprana",
      "Exclusivamente a los varones prematuros"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "412. Un comportamiento motor repetitivo, aparentemente guiado pero SIN objetivo (como balancearse, aletear las manos o abofetearse) que puede o no responder a los esfuerzos para detenerlo, recibe el diagnóstico de:",
    opciones: [
      "Trastorno de tics transitorio",
      "Trastorno de movimientos estereotipados",
      "Trastorno dismórfico muscular",
      "Catatonía rígida"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "413. ¿Cuál es la principal diferencia clínica entre un Trastorno de movimientos estereotipados y un Trastorno por tics?",
    opciones: [
      "Los tics son inducidos voluntariamente, mientras que las estereotipias son orgánicas",
      "Las estereotipias se pueden suprimir siempre, pero los tics nunca",
      "Los tics son movimientos o vocalizaciones súbitos, rápidos y no rítmicos INVOLUNTARIOS (aunque suprimibles temporalmente), frente al carácter 'aparentemente guiado' de la estereotipia",
      "No existe diferencia médica, son términos sinónimos"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "414. Dentro de los tics complejos VOCALES, la repetición involuntaria de palabras socialmente inaceptables, como obscenidades o insultos étnicos, recibe el nombre clínico de:",
    opciones: [
      "Ecopraxia",
      "Ecolalia",
      "Palilalia",
      "Coprolalia"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "415. El Trastorno de la Tourette requiere para su diagnóstico la presencia obligatoria de:",
    opciones: [
      "Múltiples tics motores sin la presencia de tics vocales",
      "Tics vocales complejos de forma aislada (sin componente motor)",
      "Múltiples tics motores y UNO o MÁS tics vocales, presentes durante más de un año",
      "Un único tic motor transitorio que dura menos de un año"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "416. Si un paciente adolescente presenta múltiples tics motores (parpadeos y sacudidas de hombros) que persisten desde hace 2 años, pero NUNCA ha presentado ningún tic vocal, el diagnóstico correcto según el DSM-5 sería:",
    opciones: [
      "Trastorno de la Tourette parcial",
      "Trastorno de tics motores o vocales persistente (crónico)",
      "Trastorno de tics transitorio",
      "Trastorno de ansiedad generalizada con componente motor"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "417. En la actuación del Proceso de Atención de Enfermería (PAE) para un niño con TEA o discapacidad intelectual en un entorno de aprendizaje, ¿cuál es la medida metodológica recomendada para evitar la distracción?",
    opciones: [
      "Enseñarle en un ambiente muy estructurado (con horarios, espacios delimitados y pistas auditivas o visuales), evitando la ambigüedad",
      "Someterle a entornos muy cambiantes a diario para forzar su capacidad adaptativa rápida",
      "No proporcionar ninguna pauta básica y esperar a que imite al educador",
      "Evitar el uso de rutinas o agendas anticipables"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "418. La 'Ecopraxia' se clasifica como un tic complejo de tipo motor que consiste en:",
    opciones: [
      "Hacer gestos sexuales u obscenos con las manos repetidamente",
      "La imitación involuntaria de los movimientos o gestos de otra persona",
      "Aletear los brazos como un pájaro rítmicamente",
      "Cerrar los ojos de forma violenta en respuesta a la luz"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "419. En el trastorno de tartamudeo (fluidez de inicio en la infancia), los apuntes señalan que los bloqueos y repeticiones empeoran de forma muy drástica debido a:",
    opciones: [
      "El consumo de alimentos azucarados",
      "La falta de horas de sueño",
      "La presión ambiental-situacional",
      "La presencia de luces fluorescentes"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },
  {
    asignatura: "salud_mental",
    tema: 19,
    pregunta: "420. Dentro de los tipos de tics simples VOCALES, encontramos acciones que duran muy poco tiempo como:",
    opciones: [
      "Decir groserías completas (coprolalia)",
      "Carraspear, olfatear, gruñir o contracciones del diafragma",
      "Parpadear y encoger los hombros repetidamente",
      "Dar patadas rítmicas al suelo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "neurodesarrollo"
  },

  // ==========================================
  // TEMA 20: TRASTORNOS NEUROCOGNITIVOS
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "421. Los Trastornos Neurocognitivos se caracterizan por una afectación de la cognición que representa:",
    opciones: [
      "Un defecto congénito inmutable presente desde el nacimiento",
      "Una disminución o declive respecto al nivel de funcionamiento adquirido previamente por el individuo",
      "Una pérdida temporal de la memoria producida exclusivamente por la anestesia general",
      "El retraso en la maduración cerebral propia de la primera infancia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "422. En la evaluación neurocognitiva, el dominio que evalúa la 'capacidad para considerar el estado mental de otra persona y el reconocimiento de emociones' se denomina:",
    opciones: [
      "Atención compleja",
      "Función ejecutiva superior",
      "Reconocimiento social (Teoría de la mente)",
      "Gnosis"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "423. Dentro del dominio de las Habilidades perceptivo-motoras en los trastornos neurocognitivos, la 'Praxis' se define como:",
    opciones: [
      "La integridad perceptual de la conciencia",
      "La integridad de los movimientos aprendidos",
      "La capacidad matemática abstracta",
      "El reconocimiento verbal de los objetos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "424. Por su parte, la 'Gnosis' (dentro del mismo dominio perceptivo-motor) hace referencia a:",
    opciones: [
      "La integridad de los movimientos motores finos",
      "El conocimiento anatómico del propio cuerpo",
      "La integridad perceptual de la conciencia y la capacidad de reconocimiento (ej. reconocer un objeto o una cara)",
      "La memoria retrospectiva autobiográfica"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "425. El 'Delírium' (o síndrome confusional agudo) se define clínicamente en el DSM-5 por la aparición de:",
    opciones: [
      "Un delirio de grandeza estructurado y estable de por vida",
      "Una alteración aguda de la atención junto con una conciencia reducida del entorno",
      "La pérdida total de la capacidad motora de las extremidades inferiores",
      "Un estado crónico de tristeza profunda intratable"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "426. Una característica clínica CLAVE del Delírium con respecto a su evolución temporal es que:",
    opciones: [
      "Se instaura de forma muy lenta a lo largo de los años y es estable durante el día",
      "Aparece en poco tiempo y su gravedad fluctúa o varía a lo largo del día (empeorando a menudo por la noche)",
      "Comienza invariablemente en la infancia y no se resuelve jamás",
      "Aparece siempre después de comer y dura exactamente una hora"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "427. Etiológicamente, el Delírium se considera un síndrome que es consecuencia de:",
    opciones: [
      "Un trauma psicológico infantil no resuelto",
      "Una alteración fisiológica directa por una afección médica, intoxicación, abstinencia o combinación de estas",
      "Una personalidad esquizotípica no tratada",
      "Un estilo de apego evitativo con la figura materna"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "428. En cuanto al pronóstico del Delírium, los apuntes señalan que:",
    opciones: [
      "Es una enfermedad terminal con un 100% de mortalidad en la primera semana",
      "La mayoría de las personas se recuperan totalmente si se detecta y trata la causa subyacente, aunque puede progresar a estupor, coma o muerte si no se trata",
      "Causa demencia irreversible de forma automática en todos los pacientes afectados",
      "Solo remite mediante la administración crónica de antidepresivos tricíclicos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "429. ¿Cuál es la diferencia fundamental en el DSM-5 para diagnosticar un Trastorno Neurocognitivo MAYOR frente a un Trastorno Neurocognitivo LEVE?",
    opciones: [
      "El Mayor afecta a la memoria y el Leve solo a la visión",
      "En el Mayor el declive interfiere en la independencia para las actividades cotidianas (ej. pagar facturas), mientras que en el Leve NO hay pérdida de independencia funcional básica",
      "El Mayor se da en ancianos y el Leve en adolescentes",
      "El Mayor cursa siempre con convulsiones, el Leve nunca"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "430. En un paciente diagnosticado de Trastorno Neurocognitivo Leve, el declive cognitivo requiere que:",
    opciones: [
      "El paciente deba ser ingresado permanentemente en un asilo",
      "El paciente compense la situación mediante mayor esfuerzo o la adopción de estrategias compensatorias para mantener su independencia",
      "Se le asigne inmediatamente un tutor legal por incapacidad civil",
      "El paciente reciba terapia electroconvulsiva semanalmente"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "431. Los Trastornos Neurocognitivos (tanto el Mayor como el Leve) se clasifican y especifican en subtipos basándose en:",
    opciones: [
      "La edad cronológica exacta del paciente en el momento del diagnóstico",
      "El origen geográfico de la persona",
      "Las entidades etiológicas/patológicas que causan el declive (ej. Alzheimer, Parkinson, traumatismos cerebrales, enfermedades cerebrovasculares)",
      "El tipo de dieta que ha llevado el paciente en los últimos años"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "432. Dentro del dominio de la Función Ejecutiva (alterado en las demencias), se incluyen habilidades mentales como:",
    opciones: [
      "El mantenimiento del equilibrio y la postura bípeda",
      "La planificación, la toma de decisiones, la memoria de trabajo, responder a la retroalimentación y la flexibilidad mental",
      "La visión en color y la agudeza auditiva de tonos graves",
      "La fuerza prensil de ambas manos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "433. El dominio cognitivo del Lenguaje, que puede verse gravemente afectado en un Trastorno Neurocognitivo, evalúa alteraciones tanto a nivel:",
    opciones: [
      "Táctil como gustativo",
      "Expresivo como receptivo (comprensión)",
      "Químico como eléctrico",
      "Simpático como parasimpático"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "434. El dominio del 'Aprendizaje y Memoria' en la evaluación neurocognitiva clásica abarca diferentes áreas, entre las que se encuentran:",
    opciones: [
      "La memoria inmunitaria humoral y celular",
      "La memoria muscular aislada del tren inferior",
      "La memoria inmediata, memoria reciente, memoria a largo plazo y memoria implícita",
      "El locus de control interno y externo"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "435. En un anciano hospitalizado por una fractura de cadera que, debido al dolor, la infección urinaria subyacente y la mezcla de fármacos sedantes, comienza a presentar agitación nocturna, lenguaje incoherente y pérdida de orientación espacial, el cuadro psiquiátrico urgente que más probablemente padece es:",
    opciones: [
      "Esquizofrenia paranoide tardía",
      "Trastorno afectivo bipolar",
      "Delírium (Síndrome confusional agudo)",
      "Trastorno de identidad disociativo"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "436. Si una persona es capaz de integrar correctamente la percepción visual de un cepillo de dientes con el movimiento y la finalidad de cepillarse (sin olvidar cómo hacerlo), se dice que conserva intactas sus capacidades:",
    opciones: [
      "Introspectivas (Insight)",
      "Perceptivo-motrices (Praxis)",
      "Afectivas o emocionales directas",
      "Endocrinas hipotalámicas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "437. Uno de los dominios cognitivos clave mencionados en el diagnóstico de demencias es la 'Atención compleja'. Este dominio NO solo incluye prestar atención a una cosa, sino también la capacidad de:",
    opciones: [
      "Ignorar completamente la temperatura ambiente",
      "Desarrollar telequinesia y poderes mentales",
      "Atención sostenida, atención dividida, atención selectiva y velocidad de procesamiento",
      "Crear memorias falsas de forma voluntaria"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "438. Cuando se habla de la etiología en la especificación del Trastorno Neurocognitivo (Mayor o Leve), una causa muy frecuente asociada a un declive neurodegenerativo por acumulación de placas amiloides es la enfermedad de:",
    opciones: [
      "Huntington",
      "Alzheimer",
      "San Filippo",
      "Rett"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "439. Un síntoma prodrómico o de avance de la demencia (Trastorno Neurocognitivo Mayor) es que el paciente se vuelve incapaz de gestionar el dinero, la medicación o vestirse por sí solo. Estas áreas comprometidas se denominan:",
    opciones: [
      "Reflejos motores arcaicos",
      "Actividades de la Vida Diaria (AVD) o funcionamiento cotidiano",
      "Ritmos circadianos basales",
      "Habilidades puramente teóricas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: 20,
    pregunta: "440. A diferencia del Trastorno Neurocognitivo o Demencia, la alteración del Delírium NO debe diagnosticarse si el paciente se encuentra en un estado de:",
    opciones: [
      "Ansiedad leve",
      "Estado de coma prolongado y previo sin nivel mínimo de conciencia (ya que el delírium es un cambio de la conciencia)",
      "Depresión mayor en remisión",
      "Eutimia emocional"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  // ==========================================
  // TEMA 21: LA URGENCIA PSIQUIÁTRICA Y EL SUICIDIO
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "441. Según los apuntes, la atención primaria de las urgencias psiquiátricas debe centrarse en un primer momento de forma indispensable en:",
    opciones: [
      "Aplicar contención mecánica a todos los pacientes",
      "Descartar la etiología médica y estabilizar la sintomatología aguda",
      "Administrar tratamiento psicoterapéutico psicoanalítico de larga duración",
      "Pautar el alta voluntaria sin preguntar motivos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "442. En la denominada 'Escala suicida', la fase inicial en la que existen situaciones o circunstancias de la personalidad que llevan a la persona a pensar que su vida no tiene sentido, se conoce como:",
    opciones: [
      "Planificación del suicidio",
      "Ideación suicida aguda",
      "Intento autolítico",
      "Factores predisponentes"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "443. Cuando el paciente pasa a pensar en los deseos y desarrolla planes mentales concretos para cometer el acto, se dice que se encuentra en la fase de:",
    opciones: [
      "Ideas de muerte o desinterés",
      "Ideación suicida",
      "Factores de riesgo vitales",
      "Intento autolítico fallido"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "444. La acción orientada de forma intencionada a provocar la propia muerte, pero que finalmente no consigue su propósito, recibe el nombre clínico exacto de:",
    opciones: [
      "Simulación de suicidio",
      "Intento autolítico (intento de suicidio)",
      "Facticio con sintomatología autoinfligida",
      "Delirio nihilista"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "445. ¿Cuándo se determina o se confirma en urgencias la sospecha firme de 'riesgo autolítico'?",
    opciones: [
      "Cuando el propio paciente refiere ideación suicida, ingresa por un intento autolítico, o se observan alteraciones conductuales peligrosas",
      "Exclusivamente cuando el paciente ha dejado una nota de despedida",
      "Solo si el paciente tiene diagnóstico previo de esquizofrenia paranoide",
      "Cuando rechaza comer durante más de 24 horas"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "446. Uno de los objetivos prioritarios en la evaluación enfermera del riesgo autolítico es:",
    opciones: [
      "Disuadir al paciente con argumentos religiosos",
      "Descubrir si existe un plan detallado y si el paciente tiene medios reales para llevarlo a cabo",
      "Evitar hablar del tema para no darle ideas",
      "Administrar terapia electroconvulsiva (TEC) de inmediato"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "447. Si el paciente que acude a urgencias tiene un historial de múltiples intentos de suicidio en el pasado, la actitud correcta de enfermería es:",
    opciones: [
      "Ignorarlos, ya que si no lo consiguió antes, no lo hará ahora",
      "Registrar exhaustivamente la historia de intentos, ya que es un indicador clave en la evaluación de riesgo",
      "Restarles importancia para que no se sienta estigmatizado",
      "Ocultar esta información a sus familiares"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "448. Respecto al principio ético de confidencialidad cuando un paciente nos confiesa su firme intención de suicidarse, los apuntes indican categóricamente que:",
    opciones: [
      "Se debe prometer y mantener el secreto profesional absoluto pase lo que pase",
      "No se puede prometer confidencialidad, ya que es posible y necesario compartir la información para proteger su vida",
      "Se debe publicar en la historia clínica pero no avisar al médico de guardia",
      "Solo se puede romper el secreto si el paciente es menor de edad"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "449. Frente a las amenazas suicidas que aparentemente tienen un componente puramente 'manipulador' o de llamada de atención, la recomendación asistencial es:",
    opciones: [
      "Ignorarlas para aplicar un castigo negativo (extinción de la conducta)",
      "Considerar seriamente todas las amenazas suicidas, aunque parezcan manipuladoras",
      "Retar al paciente a que lo haga para demostrar su falta de valor",
      "Administrar el alta de forma punitiva"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "450. El diagnóstico NANDA 'Riesgo de conducta autolesiva suicida' define a un paciente como:",
    opciones: [
      "Incapaz de realizar autocuidados básicos de higiene diaria",
      "Susceptible de actuar de forma perjudicial contra sí misma, asociado a una intención de morir",
      "Con tendencia a agredir físicamente al personal sanitario",
      "Incapaz de diferenciar la realidad de las alucinaciones"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "451. Entre los objetivos del plan de cuidados asociados al riesgo autolítico, NO se encuentra:",
    opciones: [
      "La autorrestricción del impulso suicida",
      "El equilibrio emocional",
      "El autocontrol de impulsos",
      "La promoción de la disociación afectiva como escape"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "452. Durante la comunicación con un paciente en riesgo suicida, la enfermería debe adoptar una postura en la cual:",
    opciones: [
      "Escuche atentamente transmitiendo tranquilidad, mostrando compasión y evitando actitudes críticas",
      "Se ría de los problemas del paciente para relativizarlos",
      "Se utilice un tono autoritario y directivo para imponer respeto",
      "Se interrumpa constantemente para analizar psicológicamente sus frases"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "453. Una recomendación explícita sobre qué NO hacer ante un paciente con ideación suicida es:",
    opciones: [
      "Indagar sobre su situación socioeconómica",
      "Preguntar sobre el grado de desesperanza actual",
      "Tratar de disuadir activamente a la persona o sermonearla sobre el valor de la vida",
      "Retirar los objetos peligrosos del entorno"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "454. Existe el mito social de que hablar sobre el suicidio con el paciente puede inducirlo a hacerlo. Sin embargo, clínicamente se establece que:",
    opciones: [
      "El mito es real, jamás se debe pronunciar la palabra suicidio en urgencias",
      "Tampoco se debe evitar hablar del tema ni restarle importancia, hay que abordarlo",
      "Solo lo puede hablar el psiquiatra titular, enfermería lo tiene prohibido",
      "Solo se hablará si el paciente lo saca en la conversación en primer lugar"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "455. En la escala del proceso autolítico, la diferencia fundamental entre 'Ideas de muerte' e 'Ideación suicida' radica en que en esta última:",
    opciones: [
      "El paciente solo piensa en qué pasará con su familia si muere de forma natural",
      "La persona ya pasa a pensar en los deseos de causarse daño y en los planes para cometer el acto",
      "La ideación es inconsciente y el paciente no lo recuerda",
      "El paciente sufre un episodio de fuga disociativa"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "456. Además de valorar la urgencia del impulso, el método, y los antecedentes de intentos, ¿qué otro factor es crucial para la evaluación del riesgo autolítico?",
    opciones: [
      "El color de la vestimenta del paciente al ingresar",
      "Indagar sobre la situación socioeconómica, ya que es un factor predisponente vital",
      "La dieta y el grupo sanguíneo",
      "Su afinidad religiosa exclusivamente"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "457. Tras una adecuada evaluación del paciente con riesgo de suicidio en urgencias, ¿cuál es una de las medidas preventivas físicas inmediatas de enfermería?",
    opciones: [
      "Inmovilizar siempre las cuatro extremidades",
      "Retirar todos los objetos peligrosos del entorno y aplicar acompañamiento permanente si el riesgo lo requiere",
      "Dejar al paciente a solas en una habitación cerrada con llave para que reflexione",
      "Permitir que fume en la habitación para reducir la ansiedad"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "458. Uno de los problemas a explorar en el suicidio es el grado de desesperanza. Si el paciente asegura que 'no hay futuro ni solución', enfermería deberá:",
    opciones: [
      "Darle la razón para crear alianza",
      "Evaluar si esta desesperanza se acompaña de un plan estructurado y medios letales",
      "Ignorarlo por ser un síntoma común sin importancia",
      "Redirigir la conversación hacia temas políticos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "459. La acción intencionada que tiene la finalidad de acabar con su propia vida y que provoca efectivamente la muerte de la persona, es la definición exacta de:",
    opciones: [
      "Autolisis fallida",
      "Suicidio",
      "Muerte digna (eutanasia)",
      "Homicidio indirecto"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 21,
    pregunta: "460. Según los motivos de consulta psiquiátrica de urgencia, la urgencia mayor que compromete la vida de forma inmediata junto a la agitación psicomotriz severa es:",
    opciones: [
      "El insomnio de conciliación",
      "La conducta suicida activa",
      "El trastorno específico del aprendizaje",
      "La onicofagia (comerse las uñas)"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },

  // ==========================================
  // TEMA 22: AGITACIÓN PSICOMOTRIZ Y CONTENCIÓN
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "461. Clínicamente, la agitación psicomotriz se define como:",
    opciones: [
      "Un estado de letargo profundo asociado a encefalitis vírica",
      "Un síndrome caracterizado por inquietud motora y psíquica, con un incremento de la movilidad física que no se puede contener",
      "Una parálisis histérica en respuesta a una fobia",
      "Un episodio de flexibilidad cérea típico de la catatonía"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "462. Antes de iniciar medidas farmacológicas psiquiátricas en un cuadro de agitación severa, es vital realizar una orientación diagnóstica para:",
    opciones: [
      "Confirmar el tipo de esquizofrenia mediante tests psicológicos largos",
      "Descartar cuadros somáticos (médicos) no psiquiátricos, especialmente el delírium, deterioro cognitivo o intoxicación",
      "Realizar una entrevista psicoanalítica profunda sobre su infancia",
      "Determinar su nivel socioeconómico exacto"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "463. En un paciente agitado, ¿cuál de los siguientes signos se asocia con una 'Actividad verbal excesiva e inapropiada'?",
    opciones: [
      "El estupor y el mutismo selectivo",
      "La logorrea (flujo verbal inagotable), el lenguaje ofensivo y el tono de voz muy elevado",
      "La incapacidad de formar frases de más de dos palabras (alogia)",
      "La tartamudez inducida y la bradilalia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "464. Determinados factores dificultan en gran medida la actuación de los profesionales frente a un paciente agitado. Los apuntes destacan tres, que son:",
    opciones: [
      "La presión por actuar rápido, las implicaciones legales y el fuerte componente emocional",
      "La falta de medicación, el ruido y la oscuridad",
      "El número de familiares, el olor y el idioma",
      "La falta de fuerza física, la estatura del paciente y su sexo"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "465. El principio terapéutico fundamental que marca la actuación en la agitación psicomotriz es el de:",
    opciones: [
      "Contención máxima de entrada para garantizar la seguridad del personal",
      "Aislamiento preventivo obligatorio en todos los casos",
      "La gradación de las intervenciones, con preferencia inicial siempre por las menos coercitivas (ambientales y desescalada verbal)",
      "Sedar al paciente de inmediato para evitar que hable"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "466. A la hora de asegurar un ambiente físico seguro frente a un paciente agitado (medidas ambientales), se debe:",
    opciones: [
      "Cerrar la puerta con llave para que no se escape",
      "Evitar cerrar la puerta, asegurando una vía de salida accesible tanto para el paciente como para el profesional",
      "Apagar todas las luces de la habitación para inducir el sueño",
      "Quitar todas las sillas y dejar solo el suelo para sentarse"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "467. Para reducir la irritabilidad de un paciente psiquiátrico agitado mediante medidas ambientales, es muy útil:",
    opciones: [
      "Mantener la radio encendida con música alta",
      "Aumentar el número de personas en la habitación para que se sienta protegido",
      "Reducir la estimulación sensorial, evitando excesos de luz, ruido o corrientes de aire fuertes",
      "Acercarse lo máximo posible a él para hablarle al oído"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "468. Respecto al contacto físico y la proximidad en el manejo de un paciente con agitación severa, ¿qué pauta es correcta?",
    opciones: [
      "Darle palmadas en la espalda para transmitir confianza",
      "Evitar aproximarse por detrás (se toma como amenaza) y mantener una adecuada distancia de seguridad respetando su espacio personal",
      "Acercarse rápidamente por la espalda para sujetarlo e inmovilizarlo",
      "Cogerle de las manos fuertemente mientras habla"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "469. La 'Desescalada Verbal' (contención verbal) tiene como uno de sus objetivos principales:",
    opciones: [
      "Enseñar al paciente que el profesional es quien manda y domina",
      "Conseguir que la persona abandone el estilo de pensamiento de crisis para adoptar uno centrado, reduciendo su ansiedad",
      "Provocar el llanto incontrolable para liberar tensión",
      "Forzar al paciente a tomar la medicación mediante chantaje emocional"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "470. El Proyecto BETA de la Asociación Americana de Psiquiatría propone 10 dominios para la desescalada. El dominio llamado 'Estar de acuerdo o estar de acuerdo con el desacuerdo' implica:",
    opciones: [
      "Darle la razón en absolutamente todos sus delirios psicóticos",
      "Intentar hacer que comprenda que le entendemos, pero a la vez aclarar nuestra posición respetuosa de desacuerdo con sus ideas irreales",
      "Ignorar sus quejas y asentir con la cabeza sin escuchar",
      "Discutir airadamente hasta que reconozca su error"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "471. En relación con las pautas de actuación 'NO verbales' al desescalar a un paciente, se recomienda que la enfermera:",
    opciones: [
      "Se siente preferiblemente enfrente del paciente, ambos a la misma altura",
      "Se mantenga de pie y con los brazos cruzados para mostrar autoridad",
      "Mire fíjamente a los ojos sin parpadear",
      "Esconda las manos en los bolsillos para que no le quiten nada"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "472. ¿Qué se recomienda respecto al contacto ocular con un paciente agitado o agresivo?",
    opciones: [
      "Mantener un contacto directo, penetrante y prolongado",
      "Cerrar los ojos al hablarle",
      "Evitar el contacto ocular directo y prolongado (es desafío), pero NO evitar totalmente la mirada para que no parezca que nos sentimos inferiores",
      "Mirar siempre a sus manos para prever golpes"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "473. Al iniciar la comunicación verbal durante la agitación, el lenguaje del profesional debe ser:",
    opciones: [
      "Complejo, utilizando mucha terminología médica para que entienda la gravedad",
      "Sencillo, con oraciones cortas, hablando despacio y repitiendo las pautas las veces necesarias",
      "Rápido y contundente, para que no le dé tiempo a pensar",
      "De confrontación directa con sus delirios desde el primer momento"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "474. ¿Cuál de las siguientes es una indicación explícita de lo que NO se debe hacer nunca durante la desescalada?",
    opciones: [
      "Reservar el propio juicio sobre lo que debería hacer",
      "Pedirle las cosas por favor",
      "Ofrecerle ayudas lúdicas o alternativas (ej. hablar con alguien)",
      "Realizar promesas poco realistas que no podremos cumplir"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "475. Si estamos en pleno proceso de negociación verbal y la persona nos rechaza de plano y se niega a hablar, debemos:",
    opciones: [
      "Castigarle sin salir a la sala común",
      "Obligarle a escucharnos poniéndonos frente a su cara",
      "No continuar la negociación, pero dejar claro que quedamos disponibles si nos necesita",
      "Proceder de inmediato a la sujeción mecánica sin evaluar más la situación"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "476. Según las fases de la escalada conductual descritas en los apuntes, la etapa en la que el paciente está totalmente fuera de control y muestra la conducta más grave se denomina:",
    opciones: [
      "Etapa de desencadenante",
      "Etapa de recuperación",
      "Etapa de Cima",
      "Etapa de aceleración"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "477. Ante una 'Agitación leve', los cuidados de enfermería recomendados de primera línea son:",
    opciones: [
      "Control visual continuo, implementar medidas de distracción y valorar el inicio de técnicas de desactivación verbal",
      "Activar al personal de seguridad y aplicar correas",
      "Administrar haloperidol intramuscular de manera profiláctica",
      "Darle el alta de la unidad de urgencias inmediatamente"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "478. En el abordaje de una 'Agitación severa', cuando han fallado o no son aplicables las medidas menores, se procederá a:",
    opciones: [
      "Dialogar indefinidamente aunque el paciente esté lesionando a otros",
      "Activar el código de urgencia, preparar medicación, actuar en equipo y valorar aislamiento/reducción/contención mecánica",
      "Huir de la planta psiquiátrica",
      "Administrar placebo para calmarlo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "479. La 'Contención química' se define específicamente como:",
    opciones: [
      "El uso de correas y cinturones acolchados",
      "La aplicación de fuerza física humana por parte de celadores",
      "El uso de fármacos para calmar al paciente, disminuir su nivel de consciencia y reducir su respuesta a estímulos",
      "El encierro del paciente en una celda acolchada sin muebles"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 22,
    pregunta: "480. Desde el punto de vista médico-legal, si un paciente con 'ingreso voluntario' requiere de medidas coercitivas (aislamiento o contención mecánica por agitación severa), esta intervención obligará a:",
    opciones: [
      "Darle el alta forzosa a su domicilio",
      "Tramitar e informar judicialmente el cambio a un ingreso involuntario",
      "Cobrarle los gastos de los materiales utilizados",
      "Suspender todo su tratamiento farmacológico"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  // ==========================================
  // TEMA 23: TERAPÉUTICA
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "481. En la Terapéutica en Salud Mental, la 'Psicoterapia' se define fundamentalmente como:",
    opciones: [
      "Un tratamiento basado exclusivamente en medios bioquímicos y farmacológicos",
      "Un tratamiento que consiste en aplicar métodos clínicos y actitudes interpersonales para modificar conductas y emociones mediante medios psicológicos",
      "El uso de corrientes eléctricas para inducir la recuperación neuronal",
      "La intervención quirúrgica aislada sobre los ganglios basales"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "482. ¿Qué enfoque psicoterapéutico pretende estudiar y modificar la conducta humana entendiendo que las 'actividades psíquicas inconscientes' son esenciales para comprender las acciones?",
    opciones: [
      "Técnicas humanístico-existenciales",
      "Técnicas psicoanalíticas",
      "Técnicas cognitivas puras",
      "Técnicas de modelado operante"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "483. Dentro de las técnicas conductuales de psicoterapia, ¿cuál de ellas consiste en la aplicación sistemática de 'reforzamientos positivos o negativos y castigos'?",
    opciones: [
      "Técnicas de exposición",
      "Técnicas operantes",
      "Control de la activación",
      "Técnicas de modelado"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "484. En el abordaje terapéutico, la técnica conductual del 'Modelado' se basa específicamente en:",
    opciones: [
      "Encerrar al paciente para extinguir la conducta",
      "Representar de forma visible una conducta deseable para que la persona la imite y repita",
      "Administrar una descarga eléctrica tras cada error",
      "Relajar progresivamente los grupos musculares del paciente"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "485. Las psicoterapias que se centran en reconocer y modificar los patrones de pensamiento distorsionados del paciente (ya que entienden que causan la perturbación psicológica) pertenecen al enfoque de:",
    opciones: [
      "Técnicas cognitivas",
      "Técnicas sistémicas",
      "Técnicas psicoanalíticas",
      "Técnicas biológicas"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "486. Las denominadas 'Técnicas de 3ª generación' se diferencian de las terapias cognitivo-conductuales clásicas (1ª y 2ª generación) en que:",
    opciones: [
      "Solo utilizan psicofármacos inyectables de depósito",
      "Dan mayor importancia al contexto y a la 'aceptación' de los fenómenos psicológicos, en lugar de tratar de eliminarlos mediante lucha directa",
      "Se aplican exclusivamente en pacientes menores de 5 años",
      "Rechazan el uso de la palabra y se basan en el lenguaje de signos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "487. El enfoque psicoterapéutico que considera que 'toda conducta es normal si nos situamos en el lugar de la persona', analizando la percepción subjetiva para que el paciente encuentre significado a su vida, corresponde a:",
    opciones: [
      "Técnicas humanístico-existenciales",
      "Técnicas de orientación sistémica",
      "Terapia electroconvulsiva",
      "Condicionamiento operante"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "488. En el tratamiento psicofarmacológico, los fármacos Antipsicóticos Típicos (o de primera generación) ejercen su mecanismo de acción principal actuando como:",
    opciones: [
      "Agonistas puros de la melatonina",
      "Antagonistas de los receptores de dopamina",
      "Inhibidores de la recaptación de noradrenalina exclusivamente",
      "Antagonistas de la hormona antidiurética"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "489. Por el contrario, la principal diferencia farmacodinámica de los Antipsicóticos Atípicos (o de segunda generación) es que actúan como:",
    opciones: [
      "Agonistas GABAérgicos inhibidores",
      "Antagonistas conjuntos de los receptores de dopamina y serotonina",
      "Bloqueantes betaadrenérgicos a nivel cardíaco",
      "Depletores masivos de cortisol"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "490. En la clasificación farmacológica para el manejo de los síntomas asociados a la ansiedad, ¿qué grupos de medicamentos se recogen en el temario, además de las clásicas benzodiacepinas?",
    opciones: [
      "Los antimaníacos y el litio",
      "Los bloqueantes betaadrenérgicos, los ISRS y los IRSN",
      "Los estimulantes anfetamínicos",
      "Los analgésicos opioides de tercer escalón"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "491. Los fármacos 'Eutimizantes' (estabilizadores del estado de ánimo), donde destaca el Litio como principal exponente, se utilizan clínicamente para el tratamiento de:",
    opciones: [
      "El Trastorno Obsesivo-Compulsivo",
      "La Esquizofrenia residual",
      "El Trastorno Bipolar",
      "El Trastorno del Espectro Autista"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "492. Entre los tratamientos biológicos de carácter no farmacológico, la Terapia Electroconvulsiva (TEC) consiste en:",
    opciones: [
      "Aplicar estímulos magnéticos aislados en un punto de la nuca",
      "Aplicar una corriente eléctrica a través de electrodos en la cabeza con la finalidad de producir una crisis convulsiva generalizada controlada",
      "Irradiar al paciente con luz ultravioleta durante el sueño",
      "Insertar electrodos quirúrgicamente en los ganglios basales"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "493. La técnica biológica que consiste en aplicar repetidamente estímulos magnéticos focalizados sobre un punto craneal para estimular o inhibir la actividad neuronal, se denomina:",
    opciones: [
      "Neurocirugía psiquiátrica no ablativa",
      "Estimulación magnética transcraneal",
      "Terapia electroconvulsiva focalizada",
      "Resonancia magnética funcional psicoterapéutica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "494. El uso pautado de 'luz artificial' con fines terapéuticos para el tratamiento de ciertos trastornos (como el trastorno afectivo estacional) recibe el nombre clínico de:",
    opciones: [
      "Terapia lumínica",
      "Helio-reestructuración cognitiva",
      "Radioterapia psiquiátrica",
      "Desensibilización visual"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "495. El tratamiento biológico extremo que tiene por objetivo quirúrgico invasivo 'interrumpir las conexiones anormales entre circuitos cerebrales' se clasifica como:",
    opciones: [
      "TEC ablativa",
      "Neurocirugía psiquiátrica",
      "Lobotomía farmacológica reversible",
      "Técnica de modelado anatómico"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "496. En el tratamiento de las fobias y la ansiedad mediante terapias conductuales, la 'Técnica de Exposición' tiene como fin fundamental:",
    opciones: [
      "Fomentar la huida y evitación rápida del estímulo causante",
      "Exponer a la persona al estímulo o situación que teme hasta que disminuya la ansiedad y compruebe que no es necesario evitarlo",
      "Exponer los traumas de la persona en público para generar vergüenza terapéutica",
      "Inducir un coma barbitúrico frente al estímulo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "497. La técnica conductual denominada 'Control de la activación' busca habitualmente en el paciente:",
    opciones: [
      "Aumentar su hiperactividad para cansarlo físicamente",
      "Reducir el grado de activación emocional, procurando la relajación muscular y el control sistemático de la respiración",
      "Estimular el sistema simpático al máximo mediante cafeína",
      "Provocarle un estallido de ira terapéutico"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "498. Dentro de las familias de psicofármacos, los medicamentos catalogados como 'Hipnóticos' (ya sean benzodiacepínicos o no) tienen como capacidad terapéutica diana:",
    opciones: [
      "Inhibir los receptores de serotonina en la esquizofrenia",
      "Inducir, mantener y/o alargar el tiempo efectivo de sueño en el paciente",
      "Provocar la pérdida total de la memoria retrógrada",
      "Controlar la ideación autolítica agresiva en vigilia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "499. ¿A qué gran grupo de enfoques psicoterapéuticos pertenece el 'Adiestramiento en Habilidades Sociales' según los apuntes?",
    opciones: [
      "A las técnicas humanístico-existenciales",
      "A las técnicas sistémicas",
      "A las técnicas conductuales",
      "A las técnicas biológicas-quirúrgicas"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 23,
    pregunta: "500. La orientación psicoterapéutica que centra su intervención clínica y análisis exclusivamente en el 'sistema familiar' como unidad se denomina:",
    opciones: [
      "Técnica psicoanalítica",
      "Técnica de orientación sistémica",
      "Técnica cognitivo-conductual de 1ª generación",
      "Psicoterapia del ego y el superego"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },

  // ==========================================
  // TEMA 24: EL PLAN DE CUIDADOS EN SALUD MENTAL
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "501. Según la comparativa teórica entre modelos, a la hora de establecer el Plan de Cuidados, el 'Modelo Enfermero' se caracteriza diferencialmente por:",
    opciones: [
      "Estudiar las enfermedades, buscar la etiología orgánica y pretender la curación total médica",
      "Estudiar el proceso de la salud, atender factores causales concurrentes y dirigirse a la persona en sentido holístico",
      "Centrarse exclusivamente en los marcadores genéticos del paciente",
      "Aplicar un modelo reduccionista biomédico a todos los trastornos psiquiátricos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "502. En contraposición al modelo médico que se define puramente como 'biomédico', el enfoque general adoptado para el plan de cuidados de la enfermería se define como:",
    opciones: [
      "Inflexible y dogmático",
      "Ecléctico, holístico y global",
      "Aislado y unifactorial",
      "Estrictamente psicoanalítico freudiano"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "503. En salud mental, la 'Relación de ayuda' es el eje central del cuidado. Sin embargo, los apuntes advierten que 'el proceso de ayudar no es neutro y puede implicar riesgos si no se maneja adecuadamente', tales como:",
    opciones: [
      "La curación espontánea y no deseada del paciente psicótico",
      "El desgaste emocional del profesional (burnout), la dependencia nociva del paciente y relaciones desequilibradas",
      "El aumento exponencial de los recursos económicos del hospital",
      "La aparición inmediata de un síndrome neuroléptico maligno"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "504. Dentro de las actitudes en la relación de ayuda enfermera-paciente, la dimensión conocida como 'Cordialidad Primaria' conlleva el uso de:",
    opciones: [
      "Actitudes de sobreprotección pasivas y controladoras",
      "Conductas activas, empatía real, comunicación terapéutica, respeto y el fomento de la autonomía",
      "Contención mecánica preventiva sin evaluación previa",
      "Prescripción farmacológica unilateral e impositiva"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "505. Por el contrario, la dimensión de 'Competencia Secundaria' en la relación de cuidados hace referencia a actitudes desaconsejadas como:",
    opciones: [
      "La negociación asertiva de normas de convivencia",
      "Conductas pasivas, sobreprotección, paternalismo y anulación de la autonomía real del paciente",
      "La escucha activa incondicional y el respeto a sus tiempos",
      "La evaluación clínica objetiva de la gravedad del episodio"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "506. El modelo teórico principal que estructura el 'Desarrollo de la Relación Terapéutica' en fases secuenciales dentro de la enfermería psiquiátrica es el de:",
    opciones: [
      "Nancy Roper",
      "Hildegard Peplau",
      "Dorothea Orem",
      "Virginia Henderson"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "507. Según el Modelo de H. Peplau, la primera fase, denominada 'Fase de Orientación', incluye actividades críticas de la enfermera como:",
    opciones: [
      "La reevaluación de la integración social en el alta y la firma de papeles comunitarios",
      "Delimitar el espacio íntimo, establecer el tiempo, realizar una entrevista estructurada y priorizar los problemas del paciente",
      "Administrar tratamiento electroconvulsivo inmediato",
      "Ocultar la propia identidad para generar un clima de misterio terapéutico"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "508. En la 'Fase de Identificación' de la relación terapéutica de Peplau, una pauta actitudinal fundamental y delicada de la enfermera debe ser:",
    opciones: [
      "Ignorar los sentimientos del paciente para no generar transferencia afectiva",
      "Demostrar aceptación incondicional, captar la atención, proveer información y ayudar a expresar sentimientos manteniendo una IDENTIDAD SEPARADA",
      "Fusionar sus problemas personales con los del paciente para empatizar a nivel profundo",
      "Imponer sus propios valores morales por encima de las creencias delirantes"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "509. Según el Modelo de Peplau, el momento clínico del plan de cuidados en el que se procede a la 'reevaluación y a la formulación de nuevas prioridades' mediante preguntas íntimas, se denomina:",
    opciones: [
      "Fase de Orientación precoz",
      "Fase de Aprovechamiento",
      "Fase Somática",
      "Fase de Resolución de conflictos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "510. En la evolución de la relación terapéutica de Peplau, la última etapa, que está dirigida hacia el empoderamiento y la reintegración del paciente, recibe el nombre de:",
    opciones: [
      "Fase de Identificación de síntomas",
      "Fase de Resolución (hacia la autonomía)",
      "Fase de Dependencia clínica",
      "Fase de Latencia prodrómica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "511. Para favorecer la correcta comunicación e interpretación dentro del plan de cuidados con el paciente mental, la técnica enfermera de la 'Paráfrasis' consiste en:",
    opciones: [
      "Reírse de los argumentos incongruentes del paciente para romper el hielo",
      "Repetir el contenido cognitivo exacto de lo que se transmite, pero utilizando nuestras propias palabras para asegurar la comprensión",
      "Preguntar constantemente '¿Por qué?' hasta generar llanto en el paciente",
      "Ignorar su discurso y hablar sobre temas neutros como el clima"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "512. ¿Qué potente recurso terapéutico se utiliza en la entrevista psiquiátrica avanzada con el objetivo de 'desenmascarar estrategias (como la manipulación) que el paciente utiliza para huir de su autocomprensión o de sus distorsiones'?",
    opciones: [
      "La racionalización empática",
      "La sedación química inmediata",
      "La confrontación",
      "El refuerzo positivo incondicional"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "513. Entre los 'Sistemas de clasificación de enfermería' que se detallan en el temario para estructurar el plan de cuidados en salud mental, se encuentra la 'CIPE', que fue promovida y desarrollada por:",
    opciones: [
      "La Organización Mundial de la Salud (OMS)",
      "El Consejo Internacional de Enfermeras (CIE), aplicando un enfoque hermenéutico de sistemas",
      "La Asociación Psiquiátrica Americana (APA)",
      "El Ministerio de Sanidad de España"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "514. El acrónimo 'PMHND' hace referencia a otro sistema de clasificación teórica fundamental en el plan de cuidados, cuyas siglas significan:",
    opciones: [
      "Primary Mental Health National Department",
      "Psychiatric and Mental Health Nursing Diagnosis",
      "Preventive Manual of Holistic Nursing and Disease",
      "Psychological Medication and Health Nurse Dosage"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "515. En la valoración enfermera en salud mental, apoyándose en teóricas como Gordon o Peplau, se establecen 5 necesidades fundamentales a vigilar en el paciente. Éstas son:",
    opciones: [
      "Seguridad, comunicarse, trabajar/realizarse, actividades recreativas y adquisición de conocimientos (autocuidado)",
      "Respiración, alimentación, eliminación postural, descanso térmico e higiene ocular",
      "Control de esfínteres diurnos, agudeza visual, tono muscular estriado, marcha autónoma y sed",
      "Oxigenación venosa, control analgésico epidural, asepsia, termorregulación y audición"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "516. Frente a las actitudes interpersonales de la enfermera, la combinación de aplicar una gran 'Cordialidad' pero induciendo un 'daño o limitación pasiva' al considerar que el paciente no es competente, desencadena el fenómeno conocido en la tabla de relaciones de ayuda como:",
    opciones: [
      "Perjuicio envidioso por desprecio",
      "Perjuicio paternalista (sobreprotección asfixiante)",
      "Alianza terapéutica sublime",
      "Efecto placebo social"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "517. En la planificación universal de los cuidados, ¿cuál es el eje o triada taxonómica enfermera más conocida y utilizada metodológicamente para establecer diagnósticos, intervenciones y resultados esperados?",
    opciones: [
      "DSM-5 / CIE-11 / RDC",
      "NANDA / NOC / NIC",
      "APGAR / BRADEN / NORTON",
      "PSE / CATEGO / LICET"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "518. Una de las grandes diferencias teóricas entre la planificación del modelo enfermero y el modelo biomédico radica en que la enfermería:",
    opciones: [
      "Busca siempre el diagnóstico farmacológico exacto ignorando el contexto sociofamiliar",
      "Proporciona cuidados orientados primordialmente a la PROMOCIÓN de la salud, el proceso de la misma y la atención a las necesidades alteradas",
      "Rechaza el concepto de 'salud holística' en favor de las 'dianas moleculares'",
      "Se centra de forma exclusiva en encontrar la etiología microbiana de la enfermedad psiquiátrica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "519. El recurso terapéutico de comunicación en el cual la enfermera psiquiátrica NO interpreta, sino que simplemente 'repite de forma literal las expresiones del paciente' para hacerle ver que le escucha y entender mejor qué significan para él, se conoce como:",
    opciones: [
      "Interpretación psicoanalítica de sueños",
      "Frases por repetición",
      "Tangencialidad clínica inducida",
      "Inhibición dialéctica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: 24,
    pregunta: "520. Dentro de los niveles de prevención que determinan el ámbito de actuación de la enfermera de salud mental en el Plan de Cuidados, la 'Prevención Secundaria' se corresponde exactamente con:",
    opciones: [
      "La educación sanitaria en colegios antes de que exista enfermedad",
      "La detección y la emisión de diagnósticos de enfermería precoces ante un problema incipiente",
      "La rehabilitación psicosocial en centros de crónicos",
      "El encierro preventivo judicial de pacientes en riesgo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  // ==========================================
  // TEMA 25: LAS HABILIDADES SOCIALES (Seminario 1)
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "521. Según el Seminario 1 de Habilidades Sociales, ¿cómo se define clínicamente la 'Asertividad'?",
    opciones: [
      "Como la capacidad de imponer nuestra voluntad sobre los demás para conseguir beneficios rápidos",
      "Como la actitud de autoafirmación y defensa de nuestros derechos personales, expresando sentimientos en forma adecuada y respetando los de los demás",
      "Como una conducta de inhibición en la que priorizamos las necesidades del grupo frente a las propias",
      "Como la alteración psicomotora en la que el paciente se muestra hiperactivo y locuaz"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "522. La conducta de carácter opuesto a la inhibición, que consiste en no respetar los derechos, sentimientos e intereses de los demás (ofendiéndolos, provocándolos o atacándolos), se define como:",
    opciones: [
      "Agresividad",
      "Asertividad pasiva",
      "Tangencialidad discursiva",
      "Proyección psicológica"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "523. En el marco de los pensamientos irracionales frente a los conflictos, la 'tendencia a percibir o esperar catástrofes sin tener motivos razonables para ello' recibe el nombre de:",
    opciones: [
      "Racionalización",
      "Catastrofismo",
      "Ilusión de transparencia",
      "Distorsión nihilista"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "524. Si una persona utiliza frecuentemente frases como 'no me importa', 'no tiene importancia' o 'paso' para minimizar o negar sus propios problemas y legítimos derechos, está aplicando el mecanismo de:",
    opciones: [
      "Sublimación",
      "Racionalización",
      "Técnica desarmante",
      "Empatía táctica"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "525. Dentro del entrenamiento asertivo, ¿cuál de los siguientes es considerado un legítimo 'derecho asertivo' de la persona?",
    opciones: [
      "El derecho a no equivocarse nunca en el trabajo",
      "El derecho a cambiar de opinión, cometer errores y a decir 'no lo sé'",
      "El deber de dar explicaciones a todo el mundo sobre nuestra vida privada",
      "El derecho a agredir verbalmente si hemos sido previamente atacados"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "526. De acuerdo con los expertos citados en los apuntes, ¿qué porcentaje de lo que comunicamos a los demás se realiza a través de la comunicación no-verbal (mirada, expresión facial, postura)?",
    opciones: [
      "Un 20%",
      "Aproximadamente el 50%",
      "El 80%",
      "El 100%"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "527. Frente al pensamiento irracional inhibido que dicta: 'Si no digo algo interesante, los demás pensarán que soy tonto, mejor me callo', ¿cuál es el pensamiento asertivo de reestructuración correcto?",
    opciones: [
      "Los temas de conversación de la gente suelen ser superficiales; no tienen por qué pensar que soy tonto, y si lo piensan, es irracional por su parte",
      "Si me callo siempre, los demás terminarán admirando mi prudencia e inteligencia superior",
      "La próxima vez gritaré más fuerte para que todos se vean obligados a escucharme",
      "Es mejor evitar por completo cualquier interacción social para no arriesgarme"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "528. Si necesitamos hacer una petición a otra persona y sospechamos que se puede oponer rotundamente a ella, la técnica comunicativa más recomendable es:",
    opciones: [
      "Exigir el cumplimiento inmediato amparándonos en nuestra autoridad moral",
      "Formularla indirectamente, haciendo preguntas y planteándole el problema para dejar que llegue por sí mismo a la solución",
      "Amenazarle con consecuencias graves si no accede",
      "Aplicar tiempo fuera e ignorar a la persona el resto del día"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "529. La 'Técnica del disco rayado' para insistir en una petición se caracteriza fundamentalmente por:",
    opciones: [
      "Repetir nuestra petición todas las veces que haga falta, de forma serena, sin salirnos de la cuestión central ni responder a excusas ajenas al tema",
      "Gritar la misma frase cada vez con un tono de voz más alto hasta imponer el silencio",
      "Halagar a la persona múltiples veces para que se sienta comprometida a aceptar",
      "Repetir todo lo que dice el interlocutor (paráfrasis) de forma sarcástica"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "530. Al utilizar la técnica asertiva del 'disco rayado', ¿qué actitud debemos evitar a toda costa para que sea efectiva?",
    opciones: [
      "Mantener un tono de voz constante y neutro",
      "Enfadarnos, levantar la voz, hablar de más, dar demasiadas explicaciones o sentirnos culpables por hacer la petición",
      "Escuchar activamente a la otra persona",
      "Mirar a los ojos al interlocutor"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "531. Si un compañero nos pide que le hagamos un trabajo que no nos corresponde y queremos rechazarlo de forma asertiva expresando algo positivo inmediatamente antes y después de dar la negativa, estaremos usando la:",
    opciones: [
      "Técnica desarmante",
      "Técnica del disco rayado",
      "Técnica del sándwich",
      "Técnica de la intención paradójica"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "532. Según los apuntes, la posición o ruta que adoptemos ante un conflicto dependerá de nuestras creencias previas. Si percibimos los conflictos como 'una batalla que hay que ganar como sea', tenderemos a manejarlos de forma:",
    opciones: [
      "Inhibida y evasiva",
      "Asertiva y negociadora",
      "Agresiva, sin respetar al otro",
      "Catatónica o paralizada"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "533. En el esquema general para la 'Solución de problemas interpersonales', el PASO 1 (la base del proceso) consiste en:",
    opciones: [
      "Crear múltiples alternativas y hacer una lluvia de ideas",
      "Formular el problema excluyendo las emociones del otro",
      "Reconocer el problema lo antes posible y adoptar una posición adecuada ante él",
      "Someterse a la voluntad del grupo para mantener la paz social"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "534. Al pedir a otra persona que cambie una conducta que nos molesta, ¿qué tipo de pensamiento irracional favorece una respuesta de 'agresividad' hacia ella?",
    opciones: [
      "Las expectativas no realistas, como pensar: 'él debería darse cuenta de que me molesta sin tener que decírselo', y la tendencia al catastrofismo",
      "La minimización de nuestros propios sentimientos ('no tiene importancia')",
      "La comprensión y empatía por sus circunstancias personales",
      "La creencia en que todo ser humano tiene derecho a equivocarse"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "535. Existen tres 'rutas' o formas de reaccionar ante una crítica externa. ¿Qué pensamiento interno es característico de la 'Ruta Asertiva'?",
    opciones: [
      "Seguro que tiene razón, soy un inútil y nunca aprenderé",
      "Seguro que su crítica es injustificada. ¡No lo soporto, es un estúpido!",
      "Cualquiera puede equivocarse, tenemos derecho a fallar y puedo aprender de mis errores (analizando los hechos con seguridad)",
      "La ignoraré por completo y haré como si no lo hubiera escuchado"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "536. Por el contrario, si ante esa misma crítica el individuo reacciona con ira/odio, dando un portazo y pensando '¡Él no debería criticarme, es un estúpido!', está circulando por la:",
    opciones: [
      "Ruta triste-inhibida",
      "Ruta asertiva",
      "Ruta agresiva",
      "Ruta de evitación cognitiva"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "537. La 'Técnica Desarmante' se utiliza para afrontar comportamientos irracionales de otras personas. Según su protocolo, ¿cuál es el Paso 1 fundamental?",
    opciones: [
      "Mostrarte de acuerdo con todo lo que diga el agresor inmediatamente",
      "Frenar tu tendencia a enfadarte tú también, cuidando lo que te dices a ti mismo",
      "Acusarle de tener una actitud histérica para desestabilizarlo",
      "Darle la espalda y salir corriendo del edificio"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "538. En esta misma 'Técnica Desarmante', una vez hemos frenado nuestra ira y hemos intentado comprender su punto de vista pidiendo detalles (Paso 2), ¿en qué consiste el Paso 3?",
    opciones: [
      "Mostrarte de acuerdo con él en todo lo posible para desescalar el conflicto",
      "Explicarle de forma agresiva por qué está equivocado",
      "Ignorar su respuesta y aplicar el disco rayado",
      "Derivar el problema a un superior jerárquico"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "539. Cuando en medio de una discusión el interlocutor (o uno mismo) está excesivamente alterado emocionalmente y es imposible razonar, la técnica indicada para aplazar la conversación hasta reducir la ansiedad es el:",
    opciones: [
      "Catastrofismo inducido",
      "Tiempo fuera",
      "Aislamiento de contacto crónico",
      "Role-playing invertido"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },
  {
    asignatura: "salud_mental",
    tema: 25,
    pregunta: "540. En los anexos sobre control de la ansiedad social, se recogen varias técnicas fisiológicas y conductuales para superarla, entre las que destacan:",
    opciones: [
      "El consumo de alcohol previo para desinhibirse y la hiperventilación",
      "La respiración diafragmática lenta, la relajación y la exposición progresiva a los temores irracionales",
      "El aislamiento total preventivo de un mes para 'curarse'",
      "El uso exclusivo de benzodiacepinas sin psicoterapia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "habilidades_sociales"
  },

  // ==========================================
  // EXTRAS PARTE 1: Conceptos, Modelos y Sesgos de "Salud mental.pdf"
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "541. Según los apuntes complementarios (Salud mental.pdf), la 'Tríada ABC' es imprescindible para reconocer y regular los comportamientos psiquiátricos. Sus tres componentes son:",
    opciones: [
      "Apatía, Bipolaridad y Catatonía",
      "Emoción (afecto), Comportamiento (behaviour) y Cognición",
      "Ansiedad, Burnout y Confusión",
      "Atención, Biología y Conciencia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "542. Dentro de la exploración semiológica mental, ¿cuál es la diferencia clínica que establecen los apuntes entre 'Comportamiento' y 'Conducta'?",
    opciones: [
      "No existe diferencia, son términos médicos idénticos",
      "El comportamiento es lo que se ve/expresa físicamente, mientras que la conducta engloba esa externalización SUMADA a los procesos cognitivos internos",
      "La conducta es exclusivamente genética, y el comportamiento es social",
      "El comportamiento solo se evalúa en animales y la conducta en humanos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "543. En la teoría de los 'Valores Sociales' (B, U, C/K, E, T) que nos dirigen en la comunidad, la letra 'B' hace referencia a 'Belonging'. ¿Qué significa psicológicamente?",
    opciones: [
      "Beligerancia o capacidad de lucha",
      "Búsqueda de beneficios económicos",
      "Sentimiento de pertenencia a un grupo",
      "Bipolaridad emocional latente"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "544. Al estudiar las 'atribuciones' (la forma en que buscamos a los responsables de una acción), se establece que el ser humano tiene una tendencia psicológica a:",
    opciones: [
      "Echarse la culpa de todos los desastres mundiales (locus de control interno puro)",
      "Interiorizar los éxitos como mérito propio (locus interno) e intentar culpar a factores externos ante los resultados negativos",
      "Atribuir todo a la suerte, eliminando el locus interno por completo",
      "Juzgarse con extrema severidad cuando aprueban un examen"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "545. En la 'Atribución de Kelley', para determinar el causante de un evento analizamos 3 parámetros. ¿Qué indica una ALTA 'Distintividad' en el comportamiento de una persona?",
    opciones: [
      "Que el comportamiento de la persona es siempre igual y monótono en cualquier situación",
      "Que la persona ha reaccionado de forma inusual frente a un estímulo concreto (la actuación es diferente a su forma de ser habitual), lo que responsabiliza al estímulo o al ambiente",
      "Que la sociedad no acepta bajo ningún concepto esa actitud",
      "Que el paciente presenta un trastorno de personalidad límite"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "546. Siguiendo a Kelley, si la actuación de una persona ante un estímulo determinado tiene 'Alto Consenso', esto nos indica que:",
    opciones: [
      "Solo esa persona reacciona así en todo el mundo",
      "El paciente actuó bajo un brote psicótico",
      "La mayoría de las personas actuarían de forma similar o 'están de acuerdo' con esa respuesta ante dicho estímulo",
      "El ambiente en el que ocurrió el suceso era extremadamente tóxico"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "547. Entre los atajos o errores mentales (sesgos atributivos), ¿cómo se define el 'Sesgo de Confirmación' (frecuente, por ejemplo, al leer fake news)?",
    opciones: [
      "Creer que tenemos poderes curativos",
      "La tendencia a favorecer, buscar, interpretar y recordar únicamente la información que confirma nuestras creencias, rechazando explicaciones alternativas",
      "La creencia de que si sale 'cara' en la moneda 5 veces, la sexta saldrá 'cruz' seguro",
      "Estimar que un trabajo nos llevará 2 horas cuando en realidad requiere 10"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "548. El sesgo caracterizado por la 'tendencia a basarnos en nuestras experiencias y emociones actuales para imaginarnos cómo será lo que nos deparará el día de mañana', recibe el nombre de:",
    opciones: [
      "Sesgo de impacto",
      "Sesgo retrospectivo",
      "Sesgo de proyección",
      "Ilusión de transparencia"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "549. Si un ludópata cree irracionalmente que, como lleva una 'buena racha', esta va a durar siempre, o que un evento que ocurrió frecuentemente en el pasado ya no va a suceder, está sufriendo la:",
    opciones: [
      "Falacia de planificación",
      "Falacia del jugador y de la mano caliente",
      "Ilusión de transparencia",
      "Distorsión de la memoria retrógrada"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "550. En el ámbito psicológico, el 'Pensamiento contrafáctico' se define como:",
    opciones: [
      "La incapacidad total de tener pensamientos abstractos",
      "El delirio constante de ser perseguido por mafias internacionales",
      "La capacidad para generar escenarios alternativos ('¿y si hubiera hecho esto...?') a los hechos que realmente han sucedido",
      "El exceso de pensamiento negativo centrado en el pasado (depresión)"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "551. El 'Optimismo no realista' es un sesgo atributivo en el que el individuo tiende a pensar que:",
    opciones: [
      "Su futuro será absolutamente catastrófico y fatal",
      "Tiene más probabilidades que el resto de personas de que le sucedan cosas positivas y menos probabilidades de sufrir eventos negativos",
      "Sus pensamientos pueden curar enfermedades graves",
      "Todo el mundo puede leer sus intenciones con solo mirarle"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "552. Al percibir a los demás (como cuando se atiende a un paciente), la enfermera capta primero la dimensión de 'Cordialidad' (dimensión primaria). Esta dimensión suele generar en nosotros conductas:",
    opciones: [
      "Pasivas (indiferencia o ignorancia)",
      "Agresivas y de desprecio",
      "Activas (implica ayuda sana, empatía, respeto o comunicación terapéutica)",
      "Exclusivamente farmacológicas"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "553. Por otro lado, al percibir la dimensión secundaria de 'Competencia' (habilidad o asertividad del paciente), el observador tiende a reaccionar manifestando conductas:",
    opciones: [
      "Pasivas (como la sobreprotección, el paternalismo y la anulación de la autonomía del paciente)",
      "Proactivas para rehabilitarlo rápidamente",
      "De agitación psicomotriz simétrica",
      "De huida y evitación del contacto físico"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "554. En el análisis sociológico de las instituciones sanitarias, cuando existe una práctica inaceptable (por ejemplo, maltrato) y las personas del entorno no dan el paso para notificarlo y cambiar la situación por conformismo, ocurre el fenómeno de:",
    opciones: [
      "Disonancia cognitiva",
      "Catastrofismo",
      "Ignorancia colectiva",
      "Resiliencia adaptativa"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "555. Al comparar los modelos de actuación asistencial, ¿cuál es la gran premisa diferenciadora del 'Modelo Enfermero' frente al 'Modelo Médico' tradicional?",
    opciones: [
      "El enfermero busca la etiología biológica de la enfermedad mental, y el médico el tratamiento social",
      "El enfermero estudia el proceso de salud, atiende necesidades de forma holística/global y proporciona cuidados para promover la salud, mientras que el médico busca la etiología y cura la enfermedad",
      "El enfermero prescribe fármacos antipsicóticos y el médico solo aplica psicoterapia de apoyo",
      "El enfermero utiliza el DSM-5 y el médico utiliza la taxonomía NANDA"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "conceptos_basicos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "556. En los modelos teóricos de la salud mental, la 'Teoría Psicoanalítica de Freud' divide la mente en tres estructuras. ¿Cuál de ellas contiene los instintos e impulsos básicos, siendo la parte más inconsciente?",
    opciones: [
      "El Ego (Yo)",
      "El Superego (Superyó)",
      "El Id (Ello)",
      "El Córtex prefrontal"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "557. Dentro de las teorías del aprendizaje, ¿qué autor es el principal exponente del 'Condicionamiento Operante', el cual defiende que las consecuencias (refuerzos o castigos) pueden modificar y extinguir conductas?",
    opciones: [
      "Jean Piaget",
      "B.F. Skinner",
      "Sigmund Freud",
      "Hildegard Peplau"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "558. En el 'Desarrollo de la relación terapéutica' estructurado por Hildegard Peplau, la 'Fase de Identificación' requiere por parte de la enfermera de salud mental:",
    opciones: [
      "Delimitar el tiempo, el espacio físico y priorizar los problemas (esto es la fase de Orientación)",
      "Darle el alta definitiva hacia la autonomía (esto es la fase de Resolución)",
      "Demostrar aceptación incondicional, ayudar a expresar sentimientos y proveer información manteniendo siempre una identidad profesional separada",
      "Fundir sus problemas personales con los del paciente para alcanzar una simbiosis emocional pura"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "559. En base a los modelos de necesidades (Gordon y Peplau) aplicados a la psiquiatría, se establecen '5 Necesidades Fundamentales' a observar en todo paciente mental. Entre ellas destacan:",
    opciones: [
      "Respiración tisular, gasto cardíaco, motilidad intestinal, termorregulación y deglución",
      "Seguridad, comunicarse (socializar), trabajar/realizarse, actividades recreativas y adquisición de conocimientos para el autocuidado",
      "Reproducción sexual, evasión del dolor, alimentación intravenosa, aislamiento profiláctico y fe religiosa",
      "Inmovilidad articular preventiva, contención química, sedación, obediencia y sumisión"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_1",
    pregunta: "560. Como recurso comunicativo en la relación de ayuda psiquiátrica avanzada, el uso de la 'Confrontación' tiene por objetivo terapéutico:",
    opciones: [
      "Insultar al paciente para provocarle un brote de rabia liberador",
      "Desenmascarar de forma profesional estrategias (como la manipulación o distorsiones) que utiliza el paciente para huir de su autocomprensión y evitar el cambio",
      "Repetir todo lo que el paciente dice con sus mismas palabras exactas (paráfrasis)",
      "Darle la razón en sus creencias delirantes extravagantes para crear un vínculo de simpatía rápida"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  // ==========================================
  // EXTRAS PARTE 2: Bases Neurobiológicas
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: "Extra_2",
    pregunta: "561. En el estudio de las bases neurobiológicas de la conducta, ¿qué lóbulo de la corteza cerebral es el encargado de la planificación, el juicio, la personalidad y el 'insight' (conciencia de enfermedad)?",
    opciones: [
      "Lóbulo parietal",
      "Lóbulo occipital",
      "Lóbulo frontal",
      "Lóbulo temporal"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "bases_biologicas"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_2",
    pregunta: "562. ¿Qué hemisferio cerebral se relaciona fundamentalmente con el lenguaje y el desarrollo de un pensamiento numérico y analítico (conocido como 'pensamiento vertical')?",
    opciones: [
      "El hemisferio derecho",
      "El hemisferio izquierdo",
      "Ambos por igual en todas las personas",
      "Ninguno, el lenguaje reside en el cerebelo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_biologicas"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_2",
    pregunta: "563. Dentro de las estructuras del sistema límbico, existe una íntimamente vinculada a la sensación de placer y que es estimulada de forma directa por el consumo de cocaína. Hablamos de:",
    opciones: [
      "La amígdala",
      "El hipotálamo",
      "El septum pellucidum",
      "El tálamo"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "bases_biologicas"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_2",
    pregunta: "564. El neurotransmisor cuya elevación en las vías cerebrales se asocia íntimamente a la sintomatología de la esquizofrenia, y cuya disminución se observa en la enfermedad de Parkinson y la depresión, es:",
    opciones: [
      "La serotonina",
      "El glutamato",
      "La dopamina",
      "La acetilcolina"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "bases_biologicas"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_2",
    pregunta: "565. En la división de las 'Unidades de funcionamiento' cerebrales, la encargada de regular el ciclo sueño-vigilia, el estado de atención y la activación o inhibición de respuestas motoras es:",
    opciones: [
      "La unidad de alerta",
      "La unidad de información primaria",
      "La unidad de información terciaria",
      "El área de Wernicke"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "bases_biologicas"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_2",
    pregunta: "566. Las deficiencias severas de Tiamina, frecuentemente observadas en pacientes con trastorno por consumo de alcohol, provocan a nivel neurobiológico:",
    opciones: [
      "Pérdida de memoria a largo plazo exclusivamente",
      "Pérdida de memoria a corto plazo unida a desinhibición conductual",
      "Rigidez muscular en rueda dentada",
      "Estimulación de la glándula pineal"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "bases_biologicas"
  },

  // ==========================================
  // EXTRAS PARTE 3: Modelos, Esquizofrenia y Urgencias
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "567. Según la 'Teoría Psicoanalítica' desarrollada por Sigmund Freud, la estructura de la mente que comprende el ideal de persona que debemos ser, centrándose en los valores morales y las aspiraciones, se denomina:",
    opciones: [
      "El Id (Ello)",
      "El Ego (Yo)",
      "El Superego (Superyó)",
      "La sombra"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "568. En el marco de los mecanismos de defensa psicoanalíticos, el acto de 'justificar las verdaderas motivaciones de nuestra conducta utilizando otras explicaciones que son más aceptables socialmente', corresponde a:",
    opciones: [
      "Supresión",
      "Racionalización",
      "Introyección",
      "Proyección"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "569. Dentro de las teorías de aprendizaje, ¿qué psicólogo desarrolló la 'Teoría de aprendizaje social', defendiendo que las conductas se modelan a través de experiencias observadas (aprendizaje vicario o por imitación)?",
    opciones: [
      "B.F. Skinner",
      "Iván Pavlov",
      "Albert Bandura",
      "Jean Piaget"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "570. Según la teoría cognitiva del desarrollo de Jean Piaget, la fase en la cual el niño comienza a 'razonar de forma inductiva, obteniendo generalizaciones a partir de hechos particulares' es la fase:",
    opciones: [
      "Sensitivomotora",
      "Preoperacional",
      "De operaciones concretas",
      "De operaciones formales"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "571. En la evaluación observacional de pacientes con esquizofrenia, la literatura recoge la 'Regla nemotécnica de las 3 C', la cual asocia el estilo de vida de estos pacientes a tres características. Estas son:",
    opciones: [
      "Catatonía, Comidas copiosas y Celos",
      "Caminar rápido y cabizbajo, consumo excesivo de Cafeína y consumo de tabaco (Colillas)",
      "Cansancio constante, Conductas agresivas y Cuadros febriles",
      "Culpa, Catastrofismo y Compasión"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "esquizofrenia_psicosis"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "572. Para establecer un diagnóstico clínico formal de esquizofrenia, la suma de las fases de la enfermedad (prodrómica + activa + residual) debe sumar una duración mínima ininterrumpida de:",
    opciones: [
      "1 mes",
      "3 meses",
      "6 meses",
      "12 meses"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia_psicosis"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "573. Analizando la semiología de los delirios en pacientes psicóticos, aquel delirio extravagante en el que el paciente cree que agentes externos o entidades ajenas le han quitado sus ideas de la cabeza, se denomina:",
    opciones: [
      "Delirio nihilista",
      "Inserción del pensamiento",
      "Robo del pensamiento",
      "Delirio de control"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "esquizofrenia_psicosis"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "574. En el abordaje general de los trastornos adictivos, el tratamiento se estructura clásicamente en tres fases. La fase que tiene como objetivo que la persona 'desarrolle estrategias para enfrentarse a los factores internos y externos que podrían llevarla a una recaída tras lograr la abstinencia' se llama:",
    opciones: [
      "Desintoxicación",
      "Deshabituación",
      "Reinserción",
      "Remisión espontánea"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "575. Durante las urgencias psiquiátricas, el Proyecto BETA estructuró 10 dominios de técnicas de desescalada verbal. El dominio de 'Estar de acuerdo o estar de acuerdo con el desacuerdo' se refiere a:",
    opciones: [
      "Darle la razón al paciente en todos sus delirios psicóticos para calmarlo de inmediato",
      "Intentar lograr acuerdos generales, o consensuar de manera respetuosa que no se coincide con su postura, aclarando nuestro desacuerdo pacíficamente",
      "Obligar al paciente a estar de acuerdo con las normas de la unidad mediante amenazas",
      "Ignorar las quejas del paciente y asentir con la cabeza sin escuchar"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "576. En el manejo de la agitación psicomotriz, ¿qué recomendación de actuación NO verbal indica el protocolo respecto al contacto ocular?",
    opciones: [
      "Mantener un contacto ocular penetrante y fijo para imponer autoridad",
      "Evitar el contacto ocular directo y prolongado (pues se toma como amenaza), pero NO evitar la mirada por completo para no parecer inferiores",
      "Mirar exclusivamente al suelo mientras se le habla al paciente",
      "Cerrar los ojos durante la interacción para reducir el exceso de estímulos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "577. A nivel psicofarmacológico, la principal diferencia mecanística es que los 'Antipsicóticos Típicos' (de primera generación) actúan de manera selectiva como:",
    opciones: [
      "Antagonistas puros de los receptores de dopamina",
      "Antagonistas conjuntos de los receptores de dopamina y serotonina",
      "Agonistas de la recaptación de noradrenalina",
      "Inhibidores de la enzima monoaminooxidasa"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "578. Dentro de las psicoterapias, la familia de las 'Técnicas conductuales operantes' basa su intervención de modificación de conducta clínica mediante el uso sistematizado de:",
    opciones: [
      "La interpretación de los sueños del paciente",
      "La exposición in vivo prolongada",
      "El reforzamiento positivo o negativo y el castigo positivo o negativo",
      "El adiestramiento cognitivo en el control de la respiración"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "579. Como técnica de comunicación en la entrevista en salud mental, la 'Confrontación' tiene como objetivo terapéutico primordial:",
    opciones: [
      "Provocar un ataque de ira en el paciente para liberar tensión reprimida",
      "Desenmascarar estrategias (como la manipulación o distorsiones) que utiliza el paciente para huir de su autocomprensión y del cambio",
      "Repetir el contenido cognitivo de lo que dice el paciente con nuestras propias palabras",
      "Infundir sumisión en el paciente agresivo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_3",
    pregunta: "580. Médico-legalmente, el procedimiento de 'Contención mecánica' se entiende como una medida coercitiva y de último recurso, la cual sólo es tolerable éticamente cuando:",
    opciones: [
      "El paciente se niega a tomar la medicación pautada en más de dos ocasiones",
      "La amenaza para la vida y/o integridad física es urgente e inmediata y las medidas ambientales, verbales y farmacológicas previas no fueron efectivas",
      "La familia del paciente lo solicita formalmente por escrito",
      "El paciente molesta a otros usuarios con ruidos altos durante el horario nocturno"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  // ==========================================
  // MODELOS TEÓRICOS DE LA SALUD MENTAL (Mecanismos de defensa)
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "581. En la Teoría Psicoanalítica de Freud, los mecanismos de defensa intentan mantener el equilibrio de la mente y distorsionar la realidad para aliviar la ansiedad. ¿Qué mecanismo consiste en 'reaccionar a un evento estresante antes de que ocurra'?",
    opciones: [
      "Negación",
      "Anticipación",
      "Proyección",
      "Racionalización"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "582. El mecanismo de defensa psicológico que se define por 'atribuir la responsabilidad de nuestros propios actos inaceptables a otros o a factores externos' se denomina:",
    opciones: [
      "Supresión",
      "Introyección",
      "Proyección",
      "Intelectualización"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "583. Por el contrario, la 'integración inconsciente de las ideas, valores y actitudes de otras personas' haciéndolas propias, corresponde al mecanismo de defensa de:",
    opciones: [
      "Introyección",
      "Desplazamiento",
      "Formación reactiva",
      "Sublimación"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "584. ¿Qué mecanismo de defensa utiliza una persona cuando, de forma deliberada, decide 'evitar pensar sobre situaciones estresantes' para protegerse?",
    opciones: [
      "Proyección",
      "Introyección",
      "Supresión",
      "Racionalización"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "585. Dentro de las teorías interpersonales, ¿qué destacada teórica propuso que la relación entre el enfermero y el paciente es el 'fundamento de la práctica de la enfermería', promoviendo que las personas participen en su proceso de cambio?",
    opciones: [
      "Dorothea Orem",
      "Hildegard Peplau",
      "Virginia Henderson",
      "Nancy Roper"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "modelos_teoricos"
  },

  // ==========================================
  // ADICCIONES Y PATOLOGÍA DUAL
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "586. Clínicamente, para que se diagnostique un 'Trastorno por consumo de sustancias' (a pesar de tener problemas relacionados con el uso), el paciente debe manifestar un mínimo de síntomas a lo largo de 12 meses. ¿Cuántos síntomas exige el manual?",
    opciones: [
      "Mínimo 1 síntoma",
      "Mínimo 2 síntomas",
      "Mínimo 5 síntomas",
      "Mínimo 7 síntomas"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "587. La necesidad fisiológica de 'incrementar notablemente la dosis de la sustancia consumida para lograr el efecto deseado o una disminución de los efectos derivados del uso continuado de la misma cantidad', define el concepto de:",
    opciones: [
      "Tolerancia",
      "Abstinencia",
      "Patología dual",
      "Craving"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "588. En el proceso terapéutico de los trastornos por consumo de sustancias, la fase que consiste en la integración progresiva en el medio familiar/social y que 'se realiza de forma paulatina y se puede solapar con la anterior fase', es la:",
    opciones: [
      "Fase de precontemplación",
      "Fase de desintoxicación",
      "Fase de deshabituación",
      "Fase de reinserción"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "589. Las 'entrevistas motivacionales' en adicciones buscan que el paciente reflexione sobre su consumo. Una de sus técnicas clave para motivar al cambio es:",
    opciones: [
      "Buscar generar una discrepancia entre la realidad del paciente y lo que este podría conseguir",
      "Confrontar directamente las mentiras del paciente hasta que confiese",
      "Ignorar completamente al paciente si este no quiere hablar",
      "Amenazar con medidas legales si no cesa el consumo"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "590. Ante conductas defensivas o aparición de resistencias en el paciente durante la entrevista motivacional, la actitud correcta del profesional de enfermería debe ser:",
    opciones: [
      "Insistir con mayor firmeza en los daños biológicos que se está causando",
      "Cambiar de estrategia para evitar la discusión, sugiriendo otros puntos de vista sin confrontar",
      "Levantar el tono de voz para imponer respeto profesional",
      "Obligar al paciente a firmar un contrato de abstinencia inmediata"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "591. Si durante la valoración enfermera en adicciones, el paciente 'NO considera que existe un problema' (fase de precontemplación), nuestra principal intervención será:",
    opciones: [
      "Ofrecer información y generar una alianza terapéutica que fomente una segunda visita",
      "Aconsejar sobre los recursos terapéuticos y centros de internamiento",
      "Darle el alta definitiva por falta de colaboración",
      "Aplicar medidas coercitivas familiares"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "adicciones"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "592. En el tratamiento de la 'Adicción SIN sustancias' (adicciones conductuales), la Fase de recuperación tiene como objetivo primordial:",
    opciones: [
      "Reducir el malestar físico del cese inmediato de la conducta",
      "Promover la motivación para evitar recaídas y desarrollar nuevos patrones de comportamiento para sustituir al antiguo",
      "Aislar al paciente del contacto con el exterior durante 6 meses",
      "Administrar metadona como terapia sustitutiva"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "adicciones"
  },

  // ==========================================
  // TRASTORNOS NEUROCOGNITIVOS Y FUNCIONES
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "593. Dentro de la evaluación neurocognitiva, el dominio de 'Atención compleja' engloba diversas capacidades. ¿Cómo se denomina a la capacidad de 'realizar dos tareas a la vez'?",
    opciones: [
      "Atención selectiva",
      "Atención continua",
      "Atención dividida",
      "Velocidad de procesamiento"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "594. En el dominio de la 'Función ejecutiva', la capacidad para 'escoger una solución que requiere mayor esfuerzo, pero que sabemos que es la correcta', recibe el nombre de:",
    opciones: [
      "Toma de decisión heurística",
      "Inhibición o control de hábitos predominantes",
      "Retroalimentación visual",
      "Flexibilidad mental oscilante"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "595. El dominio de las 'Capacidades perceptuales motoras' incluye la capacidad 'Viso constructiva'. Ésta se define como:",
    opciones: [
      "La integración de los recuerdos olfativos con la visión",
      "La construcción de elementos que requieren coordinación entre las manos y la vista",
      "El reconocimiento verbal de objetos simples",
      "La habilidad para caminar en línea recta con los ojos cerrados"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "trastornos_neurocognitivos"
  },

  // ==========================================
  // PSICOTERAPIA Y TERAPÉUTICA
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "596. En psiquiatría, la 'Psicoterapia' es un tratamiento que modifica conductas y emociones. Una característica estrictamente definitoria de este concepto es que:",
    opciones: [
      "Se basa siempre en el condicionamiento operante de recompensas alimenticias",
      "Utiliza exclusivamente corrientes eléctricas inducidas en la corteza frontal",
      "Se realiza a través de medios psicológicos y NO comprende el uso de medios bioquímicos o biológicos",
      "Debe ser administrada únicamente por el médico psiquiatra titular"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "597. Dentro de las técnicas conductuales, ¿cuál de las siguientes estrategias busca que la persona 'compruebe que no es necesario evitar el estímulo' tras disminuir la ansiedad al estar frente a él?",
    opciones: [
      "Control de la activación",
      "Técnicas de exposición",
      "Técnicas de modelado",
      "Reforzamiento negativo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },

  // ==========================================
  // URGENCIAS PSIQUIÁTRICAS: SUICIDIO
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "598. En la 'Escala suicida' analizada en Urgencias, la fase en la que 'la persona piensa en su propia muerte y en las consecuencias para las personas con las que se relaciona' corresponde a:",
    opciones: [
      "Factores predisponentes",
      "Ideas de muerte o desinterés por la vida",
      "Ideación suicida (planes concretos)",
      "Intento autolítico"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "599. Al comunicarnos con un paciente que ha manifestado riesgo autolítico grave, los apuntes indican una recomendación contraintuitiva pero fundamental en la evaluación inicial:",
    opciones: [
      "NO es recomendable tratar de disuadir a la persona de forma inmediata",
      "Se debe prometer siempre confidencialidad para que el paciente se abra y lo cuente",
      "Se debe ignorar si parece que solo es una 'llamada de atención' manipuladora",
      "Hay que evitar hablar del tema para no proporcionarle más ideas"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "600. Según NANDA, el diagnóstico enfermero 'Riesgo de conducta autolesiva suicida' se define explícitamente como:",
    opciones: [
      "Incapacidad para realizar el autocuidado básico de higiene por profunda tristeza",
      "La persona es susceptible de actuar de forma perjudicial contra sí misma, asociado a una intención de morir",
      "Rechazo activo a tomar la medicación pautada en urgencias",
      "Presencia de delirios nihilistas que bloquean la ingesta de alimentos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },

  // ==========================================
  // URGENCIAS PSIQUIÁTRICAS: AGITACIÓN Y DESESCALADA
  // ==========================================
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "601. En el abordaje de la agitación psicomotriz, desde el punto de vista médico, la etiología o causa MÁS frecuente de agitación en un hospital general es:",
    opciones: [
      "Psiquiátrica (esquizofrenia)",
      "Orgánica (siendo la forma de presentación más frecuente el delirium)",
      "Situacional (duelo agudo)",
      "Ambiental (masificación de las salas)"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "602. Entre las manifestaciones clínicas iniciales de un paciente con agitación psicomotriz encontramos signos de 'aumento de la reactividad' del sistema nervioso autónomo, como:",
    opciones: [
      "Miosis, bradipnea y sequedad de piel",
      "Midriasis (pupilas dilatadas), hiperventilación y taquicardia",
      "Hipotensión severa y letargo",
      "Anhedonia e hiperfagia"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "603. La medida terapéutica de la 'Contención verbal' (desescalada) persigue varios objetivos clínicos. ¿Cuál de los siguientes ES uno de ellos?",
    opciones: [
      "Provocar el agotamiento físico del paciente mediante el exceso de diálogo",
      "Lograr la sumisión total del paciente mediante la imposición de autoridad",
      "Animar al paciente a aceptar el diálogo, reducir la ansiedad y restablecer su autocontrol",
      "Conseguir que reconozca que sus delirios son totalmente falsos de inmediato"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "604. Durante la desescalada verbal (Proyecto BETA), en cuanto al abordaje NO verbal, ¿qué postura es la más recomendable para la enfermera?",
    opciones: [
      "Estar de pie mirando fijamente desde arriba para mostrar dominancia",
      "Sentarse preferiblemente en frente del paciente, ambos a la misma altura",
      "Colocarse a su espalda para evitar agresiones frontales",
      "Caminar constantemente alrededor del paciente para vigilarlo"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "605. Entre las pautas de comunicación activa al abordar a un paciente agitado, existe un término que el protocolo del Proyecto BETA recomienda EVITAR siempre por resultar contraproducente. Este término es:",
    opciones: [
      "Por favor",
      "Te entiendo",
      "Tranquilo",
      "Hablemos"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "606. Una vez finalizada la crisis y lograda la conclusión de la contención verbal, ¿qué tarea enfermera es vital realizar con el paciente?",
    opciones: [
      "Aplicar contención mecánica preventiva de forma inmediata por protocolo",
      "Reforzarle por haber accedido a hablar y preguntarle por los detonantes que le hicieron escalar",
      "Sancionarle retirando sus privilegios de salida",
      "Informar de inmediato a sus familiares de la gravedad de sus insultos"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "607. En las 'Fases de la escalada conductual' en salud mental, la fase número 2, en la cual el paciente empieza a experimentar conflictos no resueltos que inician el proceso, se denomina:",
    opciones: [
      "Cima",
      "Aceleración",
      "Desencadenante",
      "Desescalada"
    ],
    correcta: 2,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "608. Siguiendo el modelo de escalada conductual, la 'Fase 6', en la que el paciente 'desahoga las emociones del período de cima, aparece confuso y disminuye la gravedad conductual', se llama:",
    opciones: [
      "Fase de Recuperación (Fase 7)",
      "Fase de Agitación (Fase 3)",
      "Fase de Calma (Fase 1)",
      "Fase de Desescalada (Fase 6)"
    ],
    correcta: 3,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "609. Ante un paciente con 'Agitación Moderada' (nivel 2 de abordaje), una de las medidas de tratamiento farmacológico proactivas de enfermería es:",
    opciones: [
      "Administrar automáticamente terapia electroconvulsiva de choque",
      "Valorar adelantar la medicación oral de la siguiente toma habitual pautada",
      "Administrar propofol intravenoso sin consultar al psiquiatra",
      "Retirar toda la medicación porque los psicofármacos pueden haber causado el cuadro"
    ],
    correcta: 1,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
  {
    asignatura: "salud_mental",
    tema: "Extra_Final",
    pregunta: "610. A nivel ético y legal, las medidas de 'Contención física o mecánica' se consideran coercitivas y suponen una restricción de la libertad. ¿Qué trámite burocrático provocan si se aplican a un paciente de ingreso voluntario?",
    opciones: [
      "Implican tramitar automáticamente el cambio a un ingreso involuntario",
      "El alta obligatoria tras soltar las sujeciones",
      "La firma obligatoria del paciente mientras está atado asumiendo su culpa",
      "Ninguno, las medidas coercitivas son rutinarias y carecen de impacto legal"
    ],
    correcta: 0,
    esExamen: false,
    conceptoMapa: "urgencias_cuidados"
  },
];

// --- MAPAS MENTALES (MERMAID) ---
// Aquí puedes pegar el código de Mermaid.js que te dé NotebookLM para cada asignatura.
// Los nodos (nombres entre corchetes, paréntesis, etc) deben coincidir con "conceptoMapa" de las preguntas si quieres que se coloreen.
const MAPAS_MENTALES = {
  paliativos: `
graph TD
    A[Cuidados Paliativos] --> B(Manejo del Dolor)
    A --> C(Apoyo Emocional)
    B --> D[dolor_irruptivo]
    B --> E[escalon_analgesico]
    `,
  salud_mental: `
mindmap
  root((Salud Mental 2025))
    Conceptos Fundamentales
      Triada ABC
        Afecto
        Comportamiento
        Cognición
      Valores Sociales (BUCET)
        Pertenencia (Belonging)
        Comprensión (Understanding)
        Control
        Estima
        Confianza (Trust)
      Locus de Control
        Externo (Suerte/Dificultad)
        Interno (Capacidad/Motivación)
    Trastornos Parafílicos
      Fetichismo
        Objetos inanimados
        Partes del cuerpo
      Travestismo
        Autoginefilia
        Malestar clínico
      Otros especificados
        Zoofilia
        Necrofilia
        Clismafilia
    Trastornos de Personalidad
      Grupo A (Raros/Excéntricos)
        Paranoide
        Esquizoide
        Esquizotípico
      Grupo B (Dramáticos/Erráticos)
        Antisocial
        Límite (TLP)
        Histriónico
        Narcisista
      Grupo C (Ansiosos/Temerosos)
        Evitativo
        Dependiente
        Obsesivo-Compulsivo
    Trastornos Conducta Alimentaria
      PICA (Ingesta no nutritiva)
      Rumiación (Regurgitación)
      Evitación/Restricción
      Atracones
    Esquizofrenia y Psicosis
      Síntomas Positivos
        Delirios
        Alucinaciones
        Lenguaje desorganizado
      Síntomas Negativos
        Abulia
        Alogia
        Anhedonia
        Afecto embotado
    Trastornos Adictivos
      Químicos (Sustancias)
        Activación Recompensa
        Dopamina y Serotonina
        Tolerancia y Abstinencia
      Conductuales
        Juego Patológico
        Videojuegos
    Rol de Enfermería (PAE)
      Relación Terapéutica (Peplau)
      Gestión de Agitación
      Prevención Suicidio
      Límites Profesionales
    `
};
